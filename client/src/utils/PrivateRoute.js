import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import authenticate from './Authenticate';

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render = {props => 
        authenticate() === true ? (
            <Component {...props}/>
        ) : (
            <Redirect to = {{
                pathname:'/', 
                pathname:'/login',
                state: {from : props.location}}}
            />

        )
        }
        />
    );
}
export default PrivateRoute;