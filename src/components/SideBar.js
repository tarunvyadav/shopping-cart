import React, { useEffect, useState } from 'react';
import '../style/SideBar.css';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import {jeweleryProduct,menProduct,womenProduct,electronicsProduct,setProducts,ratingProduct,priceFilter1,priceFilter2} from '../redux/actions/productActions'
// import { Rating } from '@mui/material';
import Rating  from './Rating'




function SideBar() {
  //  const [rate,setRate]= useState(3)
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

    const fetchMen= async(c)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`).catch((err)=>{
      console.log("Err: ", err)
    })
    dispatch(menProduct(response.data))
  }

  

  const fetchWomen= async()=>{
    const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing").catch((err)=>{
      console.log("Err: ", err)
    })
    dispatch(womenProduct(response.data))
  }

  const fetchJewelery= async()=>{
    const response = await axios.get('https://fakestoreapi.com/products/category/jewelery').catch((err)=>{
      console.log("Err: ", err)
    })
    dispatch(jeweleryProduct(response.data))
  }

  const fetchElectronics= async()=>{
    const response = await axios.get('https://fakestoreapi.com/products/category/electronics').catch((err)=>{
      console.log("Err: ", err)
    })
    dispatch(electronicsProduct(response.data))
  }

  console.log(products)
  
 const radioFunc1= ()=>{
       return dispatch(priceFilter1());
  }


 const radioFunc2= ()=>{
       return dispatch(priceFilter2())
  }

 const ratingDispatch=()=>{
       return dispatch(ratingProduct())
 }
  

  return (<>
    <div className='containerBar'>
      <button className='brick' onClick={fetchProducts}>
      Home
    </button>
    <button className='brick' onClick={fetchMen}>
      men's clothing
    </button>
    <button  className='brick' onClick={fetchWomen}>
      women's clothing
    </button>
    <button  className='brick' onClick={fetchJewelery}>
      jewelery
    </button>
    <button  className='brick' onClick={fetchElectronics} >
      electronics
    </button>
    <div  className='brick' id="tick" >
      Price
      <div className="circle">
         <input type='radio' id='1' value="ASC" name="price" onClick={radioFunc1}  ></input>
          <label for="1">Low-High</label>
      
        <input type='radio' id='2' value="DSC" name="price"  onClick={radioFunc2} ></input>
          <label for="2">High-Low</label>
      </div>
    </div>
 
    <button  className='brick' onClick={fetchProducts}>
      No Filter
    </button>
    </div>
  </>
    
  )
}

export default SideBar