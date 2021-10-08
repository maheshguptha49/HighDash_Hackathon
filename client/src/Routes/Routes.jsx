import React from 'react'
import {Route, Switch } from 'react-router'
import Homepage from '../pages/Homepage'
import Host from '../pages/Host'
import Signup from '../Components/Signup/Signup'
import Login from '../Components/Login/Login'

export default function Routes() {
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
            </Switch>
        </>
    )
}
