import WishlistIcon from "./WishlistIcon";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
export default function DesktopIcons({
  cartCount = 0,
  wishlistCount = 0,
  onCart,
  onWishlist,
}) {
  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      <Link to="/wishlist">
        <WishlistIcon count={wishlistCount} onClick={onWishlist} />
      </Link>
      <Link to="/cart">
        <CartIcon count={cartCount} onClick={onCart} />
      </Link>
    </div>
  );
}
