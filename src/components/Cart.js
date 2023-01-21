import React, { useEffect,useState } from 'react'
import  {useDispatch, useSelector} from "react-redux"
import "../style/cart.css"
import '../style/Header.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {increaseQtyAction,decreaseQtyAction,RemoveFromCart} from '../redux/actions/productActions'
import DeleteIcon from '@mui/icons-material/Delete';


function Cart() {
  
   const cart= useSelector((state)=>state.rcart.cart)
   const [total, setTotal] = useState(0)
   const dispatch= useDispatch();
  
   


   useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc +curr.cart.price*curr.qyt,0));
   
   },[cart])

 


  return (
    <>
    {!cart.length ? <div className='emptyCart'>Cart Is Empty!!!</div>: 
    <div className='cart'>
       {cart.map((item)=>{
       const { title,image, price, category,}= item.cart;
       const IncreseQyt=()=>{
              return dispatch(increaseQtyAction(item))
        }
         
       const decreseQyt=()=>{
            return dispatch(decreaseQtyAction(item))
       }

       const remove= async()=>{
             return dispatch(RemoveFromCart(item))
       }

       return(
        <>
          <div key={item.id} className='cartCard'>
            <div className='imgDiv'><img src={image}/></div>
            <div className='textDiv' >
               <h2>{title}</h2>
               <p>{category}</p>
               <div className='money'>
            
                 <div className='qyt'><div className='qytText'>{item.qyt}</div>
                   <div className='arrow'>
                    <ArrowDropUpIcon className='ArrowDropUpIcon' onClick={IncreseQyt} /> 
                    <ArrowDropDownIcon className='ArrowDropDownIcon' onClick={decreseQyt} />
                   </div>
                 </div>
                 <h4>${price}</h4>
                 <DeleteIcon onClick={remove}/>
               </div>
            </div>
          </div>
        </>
       )
     })}
        <div className='total'>
          <div className='text'>Total Numbers of Items</div>
          <div className='totalNo'>${total}</div>
        </div>
    </div>}
 </>
  )
}

export default Cart
