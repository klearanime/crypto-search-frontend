import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home"

import Login from "./component/Login/Login"
import SignUp from "./component/SignUp/SignUp"
import HomeAuth from "./component/HomeCryptoAuth/HomeAuth"
import Crypto from "./component/Cryptos/Cryptos"

const MainRouter = (props) => {
    return (
        <Router>
            <Navbar user={props.user} />
            <Switch>
                <Route path="/crypto-home" component={Crypto} />
                <Route path="/sign-up" component={SignUp} />
                <Route 
                    path="/login" 
                    render={(routerProps) => (
                    <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
                    )}    
                />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}


export default MainRouter
