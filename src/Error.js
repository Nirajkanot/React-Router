import React from 'react';
import { NavLink } from "react-router-dom"

const Error = () => {
    return (
    <>
    <h1> Error 404! Page Not Found...</h1>
    <p> Sorry, This page doesn't exist</p>
    <NavLink to="/"> Go Back </NavLink>
    </>
    );
};

export default Error;