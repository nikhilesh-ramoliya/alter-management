import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './component/sidebar';
import Sidebar_contant from './component/Sidebar_contant';
import Layout from './pages/layout';
import './style/main.css'


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='header'>head</div>
        <Sidebar_contant />
      </div>
    </BrowserRouter>
  );
}

export default App;
