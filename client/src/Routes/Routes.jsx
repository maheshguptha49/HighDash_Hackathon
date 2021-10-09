import React, { useEffect } from 'react'
import {Route, Switch } from 'react-router'
import Homepage from '../pages/Homepage'
import Host from '../pages/Host'
import Signup from '../Components/Signup/Signup'
import Login from '../Components/Login/Login'
import Chat from '../Components/Chat'
import Booking from '../pages/Booking'
import { loadData } from '../utils/localSt';
import { useHistory } from "react-router-dom";


export default function Routes() {
    // const history=useHistory()
    // useEffect(() => {
    //     let user=loadData("token")
    //     if (!user) {
    //       return  history.push("/login")
    //     } else {
    //      return   history.push("/home")
    //     }
    // },[])
    return (
        <>
            <Switch>
                <Route exact path="/register">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/home">
                    <Homepage/>
                </Route>
                <Route exact path="/host">
                    <Host/>
                </Route>
                <Route exact path="/booking">
                    <Booking/>
                </Route>
                <Route exact path="/chat">
                    <Chat/>
                </Route>
            </Switch>
        </>
    )
}
