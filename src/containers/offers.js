import React, { useState, useEffect } from "react";
import SearchBox from "../components/search-box";
import axios from "axios";
import Card from "../components/card";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";

const Offers = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);
  const [results, setResults] = useState({});
  const [searchingData, setSearchingData] = useState("");
  const limit = 5;

  const fetchingAllData = async () => {
    let url = `https://leboncoin-api.herokuapp.com/api/offer/with-count`;
    const res = await axios.get(url);
    setResults(res.data.offers);
  };
  useEffect(() => {
    fetchingAllData();
  }, []);

  useEffect(() => {
    const fetchingData = async () => {
      let n = limit * (counter - 1);
      let url = `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${n}&limit=${limit}`;
      const res = await axios.get(url);
      setData(res.data.offers);
      setLoading(false);
    };
    fetchingData();
  }, [counter]);

  const searchingOffer = search => {
    // e.preventDefault();
    // console.log(e.target.value);

    const deepClone = JSON.parse(JSON.stringify({ ...results }));
    if (searchingData) {
      let research = new RegExp(searchingData);
      let myResult = deepClone.filter(el => research.test(el.title));
      //return setData(myResult);
      console.log(myResult);
    } else {
      fetchingAllData();
      // tmp variable for immutability
      let myCount = counter;
      return setCounter(myCount);
    }
  };

  let n = Object.keys(data);
  // listing of items in Card components
  const listing = n.map(el => {
    let url = `/offer/` + data[el]._id;
    return (
      <Link to={url} key={el} className="link">
        <Card key={el} data={{ ...data[el] }} />
      </Link>
    );
  });
  // getting all pages for navigation purpose
  let pages = [];
  let p = Object.keys(results);
  const numberOfPages = Math.ceil(p.length / limit);
  for (let i = 0; i < numberOfPages; i++) {
    pages = [...pages, i];
  }
  const displayPages = pages.map(el => {
    // adjustment since map start with 0 but counter with 1
    let myPage = el + 1;
    return (
      <div
        key={el}
        className={myPage === counter ? "selected-page" : null}
        onClick={() => setCounter(el + 1)}
      >
        {el + 1}
      </div>
    );
  });
  const handleChange = e => {
    setSearchingData(e.target.value);
    console.log(searchingData);
  };
  return (
    <div className="offers">
      <div className="orange-header" />
      <SearchBox
        changingValue={e => handleChange(e)}
        submit={e => searchingOffer(e)}
      />
      {loading ? <Spinner /> : listing}
      <div className="pages">{displayPages}</div>
    </div>
  );
};

export default Offers;
