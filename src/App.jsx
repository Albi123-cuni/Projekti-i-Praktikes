import { Routes, Route,} from "react-router-dom";
import Navbar from "./NavBar-components/NavBar";

import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Counter from "./counter";
import LoginPage from "./pages/LoginPage" 

function App() {

return (
    <>
      <Navbar />
      <Counter />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    
    </>
  );
}

export default App;