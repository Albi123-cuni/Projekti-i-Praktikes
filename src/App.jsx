import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar-components/NavBar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
   const isLoggedIn = localStorage.getItem("user");
  return (
    <>
      <Navbar />

      <main
        style={{
          flex: 1,
          width: "100%",
          padding: "24px 16px",
          boxSizing: "border-box",
          maxWidth: "1200px",
          margin: "0 auto",
          minHeight: "calc(100vh - 88px)",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <LoginPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
