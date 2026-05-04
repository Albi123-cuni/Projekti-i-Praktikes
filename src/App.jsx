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
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
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
          <Route path="/login" element={<LoginPage />} />

          
          <Route path="/wishlist" element={
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />

          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;