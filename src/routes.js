import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route 
        {...rest} 
        render={props => 
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname:'/', state:{from:props.location}}} />
        )
    } 
    />
)

const Routes =  () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <h2>Hello!</h2>}/>
            <PrivateRoute path='/map' component = {()=> <h2>Show! You are Authenticated!</h2>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;


