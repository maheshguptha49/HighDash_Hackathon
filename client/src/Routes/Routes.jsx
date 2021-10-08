import React from 'react'
import {Route, Switch } from 'react-router'
import Homepage from '../pages/Homepage'
import Host from '../pages/Host'
import Dummy from '../pages/Dummy'

export default function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Dummy/>
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
