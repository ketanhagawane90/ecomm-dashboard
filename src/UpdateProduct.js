import Header from './Header';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateProduct()
{
    const { id } = useParams();
    //console.warn(id)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch existing product data based on the provided productId
        axios.get('http://localhost:8000/api/product/'+id)
          .then(response => {
            setProducts(response.data);
            //console.warn(response.data);
          })
          .catch(error => {
            console.error('Error fetching product data:', error);
          });
      }, [id]);


    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">            
            <h1>Update Product Page</h1>
            <input type="text" className="form-control" defaultValue={products.name} /> <br />
            <input type="text" className="form-control" defaultValue={products.description} /> <br />
            <input type="text" className="form-control" defaultValue={products.price} /> <br />
            <input type="file" className="form-control" defaultValue={products.file_path} /> <br />
            <img style={{width:100}} src={"http://localhost:8000/"+products.file_path} /> <br />
            <button>Update</button>           
        </div>
        </>
    )
}

export default UpdateProduct