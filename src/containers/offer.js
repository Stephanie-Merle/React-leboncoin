import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/spinner";
import CardDetail from "../components/card-detail";

const Offer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchingOfferData = async () => {
      const url = `http://localhost:4000/api/offer/?id=` + id;
      try {
        const res = await axios.get(url);
        setOffer(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchingOfferData();
  }, []);

  // TODO CSS of the cart, and get props from the page offers

  return (
    <div className="offers">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CardDetail {...offer} />{" "}
        </>
      )}
    </div>
  );
};

export default Offer;
