import { useState, useEffect } from "react";

export default function WishList() {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Unable to load wishlist", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Unable to save wishlist", error);
    }
  }, [wishlist]);

  const removeItem = (index) => {
    setWishlist((prev) => prev.filter((_, i) => i !== index));
  };

  return <h1>Wish List Page</h1>;
}