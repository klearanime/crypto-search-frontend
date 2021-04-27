import React from 'react'
import { Route, Redirect } from "react-router-dom"



const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route
    {...rest}
        render={(routerProps) => 
            user ? <Component {...routerProps} /> : <Redirect to="/sign-up" />
        }
    />
)



export default PrivateRoute