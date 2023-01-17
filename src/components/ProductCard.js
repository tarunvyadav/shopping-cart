import React, { useEffect,useState } from 'react'
import  {useDispatch, useSelector} from "react-redux"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import '../style/ProductCard.css'
import { addToCart, RemoveFromCart } from '../redux/actions/productActions'
// import cart from "./cart"

function ProductCard() {
    const products = useSelector((state)=>state.allProducts.products)
     const tcart = useSelector((state)=>state.rcart.cart)

    const [total, setTotal] = useState(0)
    const [set, setSet] = useState(0)

     const dispatch= useDispatch();

      const items =  localStorage.getItem('cartItem')!=null?JSON.parse(localStorage.getItem('cartItem')) : []

      const totalAmount = localStorage.getItem('totalAmount')!=null?JSON.parse(localStorage.getItem('totalAmount')) : 0

       const totalQuantity = localStorage.getItem('totalQuantity')!=null?JSON.parse(localStorage.getItem('totalQuantity')) : 0

    useEffect(()=>{
      setTotal(tcart.reduce((acc, curr) => acc +curr.cart.price*curr.qyt,0));
      setSet(tcart.reduce((acc, curr) => acc +curr.qyt,0));
      console.log(items) 
      
      
      setTotal(totalAmount)
     setSet(totalQuantity)

    },[tcart])

      useEffect(()=>{
         dispatch(addToCart(items))

    },[tcart])

   // dispatch(addToCart(items))

    localStorage.setItem("cartItem", JSON.stringify(tcart));

    localStorage.setItem("totalAmount", JSON.stringify(total));

    localStorage.setItem("totalQuantity", JSON.stringify(set));
     
    
    // console.log()
    const renderList = products.map((product)=>{
        const { id, title,image, price, category, rating} = product;
         const add = async()=>{
    dispatch(addToCart(product))
  }
    const remove= async()=>{
   
    dispatch(RemoveFromCart(product))
  }
   console.log(typeof(price))
        return(
           <div key={id} className="outerSquare">
           
            <div className="middleSquare">
                <div className="innerSquare">
                    <img src={image} alt="pic"/>
                </div>
                <div className="text">
                    <div className='title'>{title}</div>
                    <div className="category">{category}</div>
                    <div className='show'>
                    <div className="rate">  {
        [...Array(5)].map((_,i)=>{
            
          
          return(<span key={i}  >
            {
              rating.rate>i?(<StarIcon className='StarIcon'/>):(<StarBorderIcon className='StarBorderIcon'/>)
            }
          </span>)
        })
      }</div>
      <b className="price">${price}</b>
      </div>
               
                </div>
             </div>
                {tcart.some(p=>p.cart.id===product.id)?( <button className="remove" onClickCapture={remove}>remove from cart</button>):( <button className="add" onClickCapture={add} >Add to cart</button>)}
           
           </div> 
           
        )
    })
  return <><div className="productCard">{renderList}</div></>
    
    

        
    
  
}


export default ProductCard