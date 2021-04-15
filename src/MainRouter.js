import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home"
import Login from "./component/Login"
import SignUp from "./component/SignUp/SignUp"


const MainRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/sign-up" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}


export default MainRouter
