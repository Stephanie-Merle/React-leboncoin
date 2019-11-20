import React, { useState } from "react";
import axios from "axios";
import Style from "./post-offer.module.css";
import Wrapper from "../components/layout/wrapper";
import Cookies from "js-cookie";

const PostOffer = () => {
  const initState = {
    title: "",
    description: "",
    price: "",
    file: ""
  };
  const [dataState, setData] = useState(initState);

  const handlePost = async e => {
    e.preventDefault();
    const token = Cookies.get("token");
    // using FormData since uploading picture(s) as well
    const data = new FormData();
    data.append("title", dataState.title);
    data.append("description", dataState.description);
    data.append("price", dataState.price);
    data.append("files", dataState.file);
    // Sending our post with our token in headers, Bearer
    const res = await axios.post(
      "https://leboncoin-api.herokuapp.com/api/offer/publish",
      data,
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    );
    //
    console.log(res.data);
  };
  // using input type submit instead of
  return (
    <Wrapper className={Style.post}>
      <form onSubmit={e => handlePost(e)}>
        <div>
          <p>Creez une annonce</p>
          <hr />
        </div>
        <p className={Style.post}>Titre de l'annonce *</p>
        <input
          type="text"
          value={dataState.title}
          onChange={e => setData({ ...dataState, title: e.target.value })}
        />
        <p>Description de l'annonce *</p>
        <input
          type="text"
          value={dataState.description}
          onChange={e => setData({ ...dataState, description: e.target.value })}
        />
        <p>Prix *</p>
        <input
          type="text"
          value={dataState.price}
          onChange={e => setData({ ...dataState, price: e.target.value })}
        />
        <p>Photo *</p>
        <input
          type="file"
          multiple={true}
          onChange={e => setData({ ...dataState, file: e.target.files[0] })}
        />
        <input type="submit" value="Poster mon annonce" />
      </form>
    </Wrapper>
  );
};
export default PostOffer;
