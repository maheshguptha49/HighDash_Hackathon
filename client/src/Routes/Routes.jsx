import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Homepage from "../pages/Homepage";
import Host from "../pages/Host";
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import Booking from "../pages/Booking";
import { loadData } from "../utils/localSt";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Payment } from "../Components/Payment/Payment";
import Chat from "../Components/StreamChat/Chat";
import { BookedShows } from "../Components/BookedShows/BookedShows";
import { useParams } from "react-router-dom";
import BookedShowComponent from "../Components/BookedShows/BookedShowComponent";
import { HostedShows } from "../Components/HostedShows/HostedShows";
import HostedShowComponent from "../Components/HostedShows/HostedShowComponent";
import { useQuery } from "../Hooks/useQuery";

export default function Routes() {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  console.log("token:", token);

  let user = token;
  let query = useQuery();
  console.log("query:", query);
  if (!user) {
    if (query?.queriesObj?.register) return <Signup />;
    console.log("user", user);
    return <Login />;
  }
  console.log("came in routes");
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/register">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/host">
          <Host />
        </Route>
        <Route exact path="/booking/:id">
          <Booking />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/bookedshows">
          <BookedShows />
        </Route>
        <Route exact path="/bookedshows/:id">
          <BookedShowComponent />
        </Route>
        <Route exact path="/hostedshows">
          <HostedShows />
        </Route>
        <Route exact path="/hostedshows/:id">
          <HostedShowComponent />
        </Route>
      </Switch>
    </>
  );
}
