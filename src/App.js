

import Header from './components/Header';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import ProductDatail from "./components/ProductDetail"
import Home from './components/Home'
import Cart from './components/Cart';



function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
    
       <Routes>
        <Route path='/' exact element={<Home/>}/>
        
        <Route path='/product/:productId' exact element={<ProductDatail />}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route>404 Not Found!</Route>
       </Routes>
       </Router>
      
   
     
     
      
    </div>
  );
}

export default App;

