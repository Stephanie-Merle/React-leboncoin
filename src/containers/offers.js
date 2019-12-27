import React, { useState, useEffect } from 'react';
import SearchBox from '../components/search-box';
import axios from 'axios';
import Card from '../components/card';
import Spinner from '../components/spinner';
import { Link } from 'react-router-dom';

const Offers = () => {
	const [ data, setData ] = useState({});
	const [ loading, setLoading ] = useState(true);
	const [ counter, setCounter ] = useState(1);
	const [ results, setResults ] = useState({});
	const [ searchingData, setSearchingData ] = useState('');
	const limit = 5;

	const fetchingAllData = async () => {
		let url = `https://good-deal.herokuapp.com/offer/with-count`;
		const res = await axios.post(url);
		setResults(res.data.offers);
	};
	useEffect(() => {
		fetchingAllData();
	}, []);
	const fetchingData = async () => {
		let n = limit * (counter - 1);
		let url = `https://good-deal.herokuapp.com/offer/with-count?skip=${n}&limit=${limit}`;
		try {
			const res = await axios.post(url);
			setData(res.data.offers);
			setLoading(false);
		} catch (err) {
			console.log(err.message);
		}
	};
	useEffect(
		() => {
			fetchingData();
		},
		[ counter ]
	);

	const searchingOffer = (e) => {
		e.preventDefault();
		setLoading(true);
		if (searchingData !== null) {
			let research = new RegExp(searchingData, 'i');
			let myResults = results.filter((el) => research.test(el.title));
			//return setData(myResult);
			setData(myResults);
			return setLoading(false);
		} else {
			fetchingAllData();
			fetchingData();
			// tmp variable for immutability
			setCounter(1);
			return setLoading(false);
		}
	};

	let n = Object.keys(data);
	// listing of items in Card components
	const listing = n.map((el) => {
		let url = `/offer/` + data[el]._id;
		return (
			<Link to={url} key={el} className="link">
				<Card key={el} data={{ ...data[el] }} />
			</Link>
		);
	});
	// getting all pages for navigation purpose
	let displayPages;
	const countingPages = (obj) => {
		let pages = [];
		let p = Object.keys(obj);
		const numberOfPages = Math.ceil(p.length / limit);
		for (let i = 0; i < numberOfPages; i++) {
			pages = [ ...pages, i ];
		}
		displayPages = pages.map((el) => {
			// adjustment since map start with 0 but counter with 1
			let myPage = el + 1;
			return (
				<div
					key={el}
					className={myPage === counter ? 'selected-page' : null}
					onClick={() => setCounter(el + 1)}
				>
					{el + 1}
				</div>
			);
		});
		return displayPages;
	};
	countingPages(results);

	// get input from search bar
	const handleChange = (e) => {
		setSearchingData(e.target.value);
	};

	return (
		<div className="offers">
			<div className="orange-header" />
			<SearchBox changingValue={(e) => handleChange(e)} submit={(e) => searchingOffer(e)} />
			{loading ? <Spinner /> : listing}
			<div className="pages">{displayPages}</div>
		</div>
	);
};

export default Offers;
