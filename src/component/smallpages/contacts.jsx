import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { getcontacts } from '../../redux/contact_redux';


function Contacts() {

  const [address, setAddress] = useState("");


  const fetchuser = async () => {
    const user = await axios.get("http://alter-backend.herokuapp.com/contact")
    console.log(user.data.data)
    dispatch(getcontacts(user.data.data))
  }

  useEffect(() => {
    fetchuser()
  }
    , [])

  const deleted = async (id) => {
    console.log(id);
    const data = {
      _id: id
    }
    const response = await axios.delete("http://alter-backend.herokuapp.com/contact/" + id)
    console.log(response);
    fetchuser();
  }
  const updated = async (id) => {
    console.log(id);
    const data = {
      address: address
    }
    const response = await axios.put("http://alter-backend.herokuapp.com/contact/" + id, data)
    fetchuser();
  }



  const submitted = async () => {

  }

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact);

  const changed = (e) => {
    setAddress(e.target.value);
    console.log(address);
  }


  return (
    <div>
      <h1>Contacts Count = {contacts.length}</h1>
      {contacts.length!==0 ? (
        <div className="table">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>image</th>
              <th>email</th>
              <th>address</th>
              <th>delete</th>

            </tr>
          </thead>
          <tbody>
            {contacts.length !== 0 ? (
              contacts.map((contact, index) => {
                return (
                  <tr key={index} className="">
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td className='contact_address'>{contact.address}</td>
                    <td>
                      <button className='btn btn-danger' onClick={() => {
                        deleted(contact._id);
                      }}>delete</button>
                      <input type="text" name='address' onChange={changed} placeholder='enter new address' />
                      <button className='btn btn-danger' onClick={() => {
                        updated(contact._id);
                      }}>update</button>

                    </td>
                  </tr>
                )
              })
            ) : ""}
          </tbody>
        </table>
      </div>
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

export default Contacts