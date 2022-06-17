import React from 'react'
import {Link} from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <Link className="link" to={"/contacts"}><li>Contacts</li></Link>
        <Link className="link" to={"/products"}><li>Products</li></Link>
        <Link className="link" to={"/banner"}>  <li>Banner</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar