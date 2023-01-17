
import React, { useEffect,useState } from 'react'
import '../style/Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"

import { useSelector } from 'react-redux';


function Header() {  const cart = useSelector((state)=>state.rcart.cart)

const [set, setSet] = useState(0)

 useEffect(()=>{
   setSet(cart.reduce((acc, curr) => acc +curr.qyt,0));
      },[cart])

console.log(set)


  return (<><nav><div className='headerText'>
  <Link to="/">
 <h1 className='myShop'>𝕸𝖞𝕾𝖍𝖔𝖕</h1>
   </Link>
 <div className='cartBox'>
 <b>Cart</b>
 <Link to="/cart"><div className='cartHeader'><ShoppingCartIcon /><p>{set}</p></div></Link></div>
</div>
  </nav>
    
  </>
   
  )
}

export default Header