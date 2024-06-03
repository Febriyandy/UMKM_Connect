import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar';
import Dashboard from '../pages/Dashboard';
import Footer from '../components/footer';
import Makanan from '../pages/Makanan';
import Minuman from '../pages/Minuman';
import Busana from '../pages/Busana';
import Kerajinan from '../pages/Kerajinan';
import Notfound from '../pages/Notfound';
import TentangKami from '../pages/TentangKami';
import Kemitraan from '../pages/Kemitraan';
import Artikel from '../pages/Artikel';

const Routing = () => {
    return(
        <Routes>
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/Footer" element={<Footer/>} />
            <Route path='/Makanan' element={<Makanan/>} />
            <Route path='/Minuman' element={<Minuman/>} />
            <Route path='/Busana' element={<Busana/>} />
            <Route path='/Kerajinan' element={<Kerajinan/>} />
            <Route path='/TentangKami' element={<TentangKami/>} />
            <Route path='/Kemitraan' element={<Kemitraan/>} />
            <Route path='/Artikel' element={<Artikel/>} />
            <Route path='*' element={<Notfound/>} />
        </Routes>
    );

};

export default Routing