import React from 'react'
import {Link} from "react-router-dom"
import  {useSelector} from "react-redux"
import '../style/ProductCard.css'
// import cart from "./cart"

function ProductCard() {
    const products = useSelector((state)=>state.allProducts.products)

     console.log(products)

    const renderList = products.map((product)=>{
        const { id, title,image, price, category} = product;
        return(
           <div key={id} className="outerSquare">
           <Link to={`/product/${id}`}>
            <div className="middleSquare">
                <div className="innerSquare">
                    <img src={image} alt="pic"/>
                </div>
                <div className="text">
                    <div className='title'>{title}</div>
                    <div className="price">${price}</div>
                    <div className="category">{category}</div>
                </div>
            </div>
           </Link>
           </div> 
           
        )
    })
  return <><div className="productCard">{renderList}</div></>
    
    

        
    
  
}


export default ProductCard