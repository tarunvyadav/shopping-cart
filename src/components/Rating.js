import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {useSelector,useDispatch} from 'react-redux';
import {ratingProduct} from '../redux/actions/productActions'

function Rating() {
 const products = useSelector((state)=>state);
  const dispatch= useDispatch()
  // const onClick = (i)=>{dispatch(ratingProduct(i))
  console.log(`he+${products.allProducts.rating}`)
  return (
    <div>
      {
        [...Array(5)].map((_,i)=>{
            const onClick = async()=>{dispatch(ratingProduct(i))
          console.log(i)}
          return(<span key={i} onClick={(i)=>{onClick(i)}}>
            {
              products.allProducts.rating>i?(<StarIcon/>):(<StarBorderIcon/>)
            }
          </span>)
        })
      }
    </div>
  )
}

export default Rating