import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getbanner } from '../../redux/banner_redux';
import Filebase from "react-file-base64";


function Banner() {
  const banners = useSelector((state) => state.banner)
  const dispatch = useDispatch()
  const [banner, setbanner] = useState({
    name: "",
    image: ""
  })



  const fatchbanner = async () => {
    const data = await axios.get("http://alter-backend.herokuapp.com/banner")
    dispatch(getbanner(data.data.data));
    ;
  }
  const changed = (e) => {
    setbanner({
      ...banner,
      name: e.target.value
    })
  }

  const submitted = async (e) => {
    e.preventDefault();
    await axios.post("http://alter-backend.herokuapp.com/banner", banner);
    setTimeout(() => {
      fatchbanner();
    }, 500);
  }

  const deleted = async (id)=>{
    await axios.delete("http://alter-backend.herokuapp.com/banner/" + id);
    setTimeout(() => {
      fatchbanner();
    }, 500);
    console.log("deleted");
  }

  useEffect(() => {
    fatchbanner();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='banner'>
      <h1>Banner Count = {banners.length}</h1>


      {/* --------------------------------form-------------------------------- */}
      <form onSubmit={submitted}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" onChange={changed} required name='name' className="form-control" id="name" placeholder="Name" />
        </div>

        <div className='form-group'>
          <label htmlFor="Image">Image</label>
          <div className="form-control file">
            <Filebase multiple={false} className='filebase' type="file" name="image" onDone={
              (base64) => {
                console.log(base64);
                setbanner({
                  ...banner,
                  image: base64.base64
                })
              }
            } />
          </div>
        </div>

        <button type='submit' className='btn btn-primary'> Submit</button>

      </form>

      {/*---------------------------------- table--------------------------- */}
      {banners.length!==0 ? (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {
            (banners.length !== 0) ?
              banners.map((banner) => {
                return (
                  <tr key={banner._id}>
                    <td>{banner.name}</td>
                    <td><img src={banner.image} alt={banner.image} /></td>
                    <td><button className='btn btn-danger' onClick={()=>{
                      deleted(banner._id);
                    }}>delete</button></td>
                  </tr>
                )
              })
              : (
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
              )
          }
        </tbody>
      </table>
      ):(
        <div className='d-flex justify-content-center mt-5'>
          <div class="spinner-border text-center text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          </div>
      )}
    </div>
  )
}

export default Banner