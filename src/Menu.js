import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to='/'>About us</NavLink>
        <NavLink exact activeClassName="active_class" to='/service'>Services</NavLink>
        <NavLink exact activeClassName="active_class" to='/search'>Search</NavLink>
        <NavLink activeClassName="active_class" to='/user/Niraj/Kanot'>User</NavLink>
        <NavLink activeClassName="active_class" to='/contact'>Contact Us</NavLink>
        </div>
        </>
    );
};

export default Menu;