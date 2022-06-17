import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Banner from './smallpages/Banner';
import Contacts from './smallpages/contacts';
import Products from './smallpages/Products';



function Contant() {
    return (
        <div className='contant'>
                <Routes>
                    <Route path="/contacts" element={<Contacts/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/banner" element={<Banner/>} />
                </Routes>
        </div>
    )
}

export default Contant