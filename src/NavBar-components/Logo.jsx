import { Link } from "react-router-dom";

export default function Logo({ text = "Store" }) {
  return (
    <Link
      to="/store"
      style={{
        fontSize: '20px',
        fontWeight: '500',
        color: '#000',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.2s'
      }}
      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
      onMouseLeave={(e) => e.target.style.opacity = '1'}
    >
      {text}
    </Link>
  );
}