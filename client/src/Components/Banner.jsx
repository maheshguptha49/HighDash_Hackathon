import React, { useEffect, useState } from "react";
import ShowCard from "../Components/Homepage/ShowCard";
import styled from "styled-components";
import axios from "axios";
import { backurl } from "../utils/url";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Banner() {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let { data } = await axios.get(`${backurl}/api/show`);
    data = data.show;
    //data[0].category="dance"
    const categories2 = {};
    data.map((item) => {
      categories2[item.category] = [];
    });
    for (let key in categories2) {
      categories2[key] = data.filter((item) => item.category === key);
    }
    // console.log(categories2)
    setCategories(categories2);
  }
  return (
    <div>
      {Object.keys(categories).map((item, i) => {
        return (
          <BannerCont key={uuid()}>
            <BannerName>{item}</BannerName>
            <Cards>
              {categories[item].map((item) => {
                return (
                  <Link key={item._id} to={`booking/${item._id}`}>
                    <ShowCard {...item} />
                  </Link>
                );
              })}
            </Cards>
          </BannerCont>
        );
      })}
    </div>
  );
}

const BannerCont = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background: #131a27;
  padding: 0 1rem;
`;
const BannerName = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 1rem;
  padding-left: 5rem;
`;
const Cards = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
