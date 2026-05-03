function ProductCard({
  id,
  name,
  price,
  image,
  badge,
  description,
  onAddToCart,
  onAddToWishlist,
}) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  return (
    <article className="product-card">
      {badge ? <span className="product-badge">{badge}</span> : null}

      <div className="product-image-wrapper">
        <img
          src={image || "https://via.placeholder.com/400x220?text=No+Image"}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="product-details">
        <h3>{name}</h3>
        <p>${Number(price).toFixed(2)}</p>
        {description ? (
          <p
            style={{
              fontSize: "0.9rem",
              color: "#64748b",
              marginTop: "8px",
              lineHeight: "1.4",
              flex: 1,
            }}
          >
            {description}
          </p>
        ) : null}
      </div>

      <div className="product-actions">
        {onAddToCart ? (
          <button
            type="button"
            className="button button-primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        ) : null}
        {onAddToWishlist ? (
          <button
            type="button"
            className="button button-secondary"
            onClick={onAddToWishlist}
          >
            Add to Wishlist
          </button>
        ) : null}
      </div>
    </article>
  );
}

export default ProductCard;
