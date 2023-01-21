import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
import ProductListing from './ProductListing';
import { useDispatch, useSelector } from 'react-redux'
import {showChangeAction} from '../redux/actions/productActions'
import CloseIcon from '@mui/icons-material/Close';
import '../style/home.css'


function Home() {

     const show = useSelector((state)=>state.allProducts.show)
     const dispatch= useDispatch();
     const showFunc= ()=>{
       console.log(show)
         dispatch(showChangeAction())
     }


  return (
    <div className="Home">
       {show ? <CloseIcon className='MenuIcon' onClick={showFunc} /> : <MenuIcon className='MenuIcon' onClick=    {showFunc}/>} 
        <SideBar/>
       <ProductListing/>
     </div>
  )
}

export default Home