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

                    <Route path="/alter-management/contacts" element={<Contacts/>} />
                    <Route path="/alter-management/" element={
                        <h1>hello this is dashboard</h1>
                    } />
                    <Route path="/alter-management/products" element={<Products/>} />
                    <Route path="/alter-management/banner" element={<Banner/>} />
                </Routes>
        </div>
    )
}

export default Contant