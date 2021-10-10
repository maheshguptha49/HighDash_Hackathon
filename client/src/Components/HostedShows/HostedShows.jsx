import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShowCard from "../Homepage/ShowCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { backurl } from "../../utils/url";
import { Link } from "react-router-dom";
import Navbar from "../Homepage/Navbar";
export function HostedShows() {
  const { user } = useSelector((state) => state.auth);
  const [hostedShowsArray, sethostedShowsArray] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      let { data } = await axios.get(`${backurl}/api/users/${user._id}`);
      console.log(data, "data");
      sethostedShowsArray(data.hostedShows);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <Navbar />
      <Cards>
        {hostedShowsArray.map((item) => {
          return (
            <Link to={`hostedshows/${item._id}`}>
              <ShowCard {...item} />
            </Link>
          );
        })}
      </Cards>
    </div>
  );
}

const BannerCont = styled.div`
  display: flex;
  flex-direction: column;
  background: #131a27;
  height: 350px;
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
  justify-content: space-evenly;
`;
