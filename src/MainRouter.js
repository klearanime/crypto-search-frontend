import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home"
import Missing from "./component/Missing/Missing"
import Login from "./component/Login/Login"
import SignUp from "./component/SignUp/SignUp"
import Cryptos from "./component/Cryptos/Cryptos"
import PrivateRoute from "./component/PrivateRoute/PrivateRoute"
// import AuthHome from "./component/AuthHome/AuthHome"




const MainRouter = (props) => {
    return (
        <Router>
            <Navbar user={props.user} handleUserLogout={props.handleUserLogout} />
            <Switch>

                {/* <Route exact path="/crypto-home" component={Crypto} /> */}
                <PrivateRoute exact path="/crypto-home" user={props.user} component={Cryptos} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route 
                    exact path="/login" 
                    render={(routerProps) => (
                    <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
                    )}    
                />
                <Route exact path="/" component={Home} />
                <Route path="*" component={Missing} />
            </Switch>
        </Router>
    )
}



export default MainRouter
