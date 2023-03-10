import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from "react-redux";

const PrivateOrederList = () => {
    
const isLog =  useSelector((state)=>state.users.isLog);
const orders =  useSelector((state)=>state.orders);

    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLog   ? <Outlet /> : <Navigate  to="/login" />;
}




export default PrivateOrederList 



