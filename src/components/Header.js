import React from 'react'
import '../style/Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {
  return (<><nav>
 <div className='myshop'>myShop</div>
 <div className='cart'><ShoppingCartIcon /><p>7</p></div>

  </nav>
    
  </>
   
  )
}

export default Header