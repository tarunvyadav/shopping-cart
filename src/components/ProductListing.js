import React  from 'react'
import axios from "axios"
import { useEffect } from "react";
import  ProductCard from '../components/ProductCard';
import { useSelector,useDispatch } from 'react-redux';
import {setProducts} from '../redux/actions/productActions'
import '../style/ProductListing.css'



function ProductListing() {

   const products = useSelector((state)=>state);
   const dispatch = useDispatch()


     const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      
      })
    dispatch(setProducts(response.data))
    
  }





    useEffect(() => {
    fetchProducts();
    
  }, []);
   
 

  return (
    <div className="card">
         <ProductCard/>
    </div>
  )
}

export default ProductListing