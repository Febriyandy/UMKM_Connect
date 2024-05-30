import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar';
import Dashboard from '../pages/Dashboard';
import Footer from '../components/footer';

const Routing = () => {
    return(
        <Routes>
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/Footer" element={<Footer/>} />
        </Routes>
    );

};

export default Routing