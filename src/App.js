
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import ProductListing from './components/ProductListing';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import ProductDatail from "./components/ProductDetail"
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';



function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
    
       <Routes>
        <Route path='/' exact element={<div className="Home">
      <SideBar/>
     <ProductListing/>
     </div>}/>
        
        <Route path='/product/:productId' exact element={<ProductDatail />}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route>404 Not Found!</Route>
       </Routes>
       </Router>
      
   
     
     
      
    </div>
  );
}

export default App;
