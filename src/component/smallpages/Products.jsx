import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import Filebase from 'react-file-base64';
import { useDispatch } from 'react-redux/es/exports'
import axios from 'axios';
import { getproduct } from '../../redux/Products_actions';



function Products() {

  const [Product, SetProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: {
      wholesale: "",
      retail: "",
    },
    longDescription: ""
  });

  const onchanged = (e) => {
    if (e.target.name === "wholesale" || e.target.name === "retail") {
      SetProduct({
        ...Product,
        price: {
          ...Product.price,
          [e.target.name]: e.target.value
        }
      })
    }
    else {
      SetProduct({ ...Product, [e.target.name]: e.target.value });
    }

  }


  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  const fetchproduct = async () => {
    const a = await axios.get('http://alter-backend.herokuapp.com/product');
    console.log(a.data.data);
    dispatch(getproduct(a.data.data));
  }


  const submitted = async (e) => {
    e.preventDefault();
    if (Product._id == undefined) {
      const a = await axios.post('http://alter-backend.herokuapp.com/product', Product);
      console.log(a);
      fetchproduct();
    } else {
      const data = await axios.put("http://alter-backend.herokuapp.com/product/" + Product._id, Product);
      console.log(data.data.data);
      setTimeout(() => {
        fetchproduct();
      }, 500);
      SetProduct({
        name: "",
        image: "",
        description: "",
        price: {
          wholesale: "",
          retail: "",
        },
        longDescription: ""
      })
    }
  }

  const deleted = async (id) => {
    console.log(id);
    const a = await axios.delete("http://alter-backend.herokuapp.com/product/" + id);
    console.log(a);
    setTimeout(() => {
      fetchproduct();
    }, 500);
  }

  useEffect(() => {
    fetchproduct();
  }
    , [])

  console.log(products);
  return (
    <div className='products'>
      <h1>Products Count = {products.length}</h1>
      <form onSubmit={submitted}>
        <h1>{Product._id == undefined ? "new product" : "update"}</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" required className="form-control" id="name" name='name' value={Product.name} onChange={onchanged} placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="discription">Discription</label>
          <input type="text" required name='description' onChange={onchanged} className="form-control" value={Product.description} id="discription" placeholder="discription" />
        </div>
        <div className="form-group">
          <label htmlFor="lingdiscription">Long Discription</label>
          <input type="text" required className="form-control" name='longDescription' onChange={onchanged} value={Product.longDescription} id="longdiscription" placeholder="Long discription" />
        </div>

        <label htmlFor="discription">Price</label>
        <fieldset className='form-control'>
          <input type="number" required className='form-control' name='wholesale' onChange={onchanged} value={Product.price.wholesale} placeholder="wholesale" />
          <input type="number" required className='form-control' name='retail' onChange={onchanged} value={Product.price.retail} placeholder="retail" />
        </fieldset>

        <label htmlFor="discription">Image</label>
        <div className="form-control file">
          <Filebase multiple={false} className='filebase' type="file" name="image" onDone={
            (base64) => {
              console.log(base64);
              SetProduct({ ...Product, image: base64.base64 })
            }
          } />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {products.length !== 0 ? (<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Discription</th>
            <th>Long Discription</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td><img src={product.image} alt={product.name} height="40px" /></td>
                <td>{product.description}</td>
                <td>{product.longDescription}</td>
                <td>{product.price.wholesale}</td>
                <td>{product.price.retail}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => { deleted(product._id) }}>delete</button>
                  <button className='btn btn-danger' onClick={async () => {
                    const data = await axios.put("http://alter-backend.herokuapp.com/product/" + product._id);
                    console.log(data.data.data);
                    SetProduct(data.data.data)
                  }}>update</button>
                </td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>)
        : (
          <div className='d-flex justify-content-center mt-5'>
          <div class="spinner-border text-center text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          </div>
        )}
    </div>
  )
}

export default Products