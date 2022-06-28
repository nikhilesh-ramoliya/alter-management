import React from 'react'
import {Link} from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <Link className='container' to='/alter-management/'>Home</Link>
        <Link className="link" to={"/alter-management/contacts"}><li>Contacts</li></Link>
        <Link className="link" to={"/alter-management/products"}><li>Products</li></Link>
        <Link className="link" to={"/alter-management/banner"}>  <li>Banner</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar