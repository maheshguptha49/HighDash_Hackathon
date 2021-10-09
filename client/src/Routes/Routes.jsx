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

export default function Routes() {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    let user = token;
    if (!user) {
      return history.push("/login");
    }
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/register">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/host">
          <Host />
        </Route>
        <Route exact path="/booking/:id">
          <Booking />
          <Chat />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
      </Switch>
    </>
  );
}
