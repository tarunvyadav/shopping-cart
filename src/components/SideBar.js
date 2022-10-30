import React, { useEffect } from 'react';
import '../style/SideBar.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import {jeweleryProduct,menProduct,womenProduct,electronicsProduct,setProducts} from '../redux/actions/productActions'




function SideBar() {

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
         <input type='radio' id='1' value="1" name="price"  ></input>
          <label for="1">0-$100</label>
      
        <input type='radio' id='2' value="2" name="price" ></input>
          <label for="2">$100-$200</label>
      </div>
    </div>
    <div  className='brick' >
      Rating
      <div className='p' >
      {[...Array(5)].map(( _,i)=>{
        return(<span key={i}><StarBorderIcon/></span>)})}
     
      </div>
      
    </div>

    </div>
  </>
    
  )
}

export default SideBar