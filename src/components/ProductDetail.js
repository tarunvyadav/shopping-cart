import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, } from 'react-router-dom'
import {selectedProduct} from "../redux/actions/productActions";


function ProductDetail() {
  const dispatch= useDispatch()
  const {productId} = useParams()
  let product= useSelector((state)=>state.product)
   const { image, title, price, category, description,rating:{rate},rating:{count} } = product;
    const ProductDetailData= async (id)=>{
      const response=  await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
        console.log("Err: ", err);
        dispatch(selectedProduct(response.data))
    })}

    console.log(typeof(price))
  return (
    <div className="details">
      <div>
        <img src={image}/>
      </div>
      <div>
        <div className='title'>{title}</div>
        <div className=" description">{description}</div>
        <div className="category">{category}</div>
        <div className='line'>
          <div className="price">{price}</div>
          <div className="rate">{rate}</div>
        </div>
        <div className='count'>{count}</div>
      </div>
    </div>
  )
}

export default ProductDetail