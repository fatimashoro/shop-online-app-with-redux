import  Navbar  from './Components/Navbar';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import {WishList} from './Pages/WishList';
import Cart from './Pages/Cart';
import SelectedProductDetails from './Components/SelectedProductDetails';

function App() {
  return (
    <BrowserRouter>
    < Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
       <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<SelectedProductDetails />} />
   </Routes>
    </BrowserRouter>
  );
}

export default App;


