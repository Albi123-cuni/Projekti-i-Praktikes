import { Link } from "react-router-dom";

export default function NavLinks({ items = ['Home', 'About', 'Contact'], onLink }) {

  const getPath = (item) => {
    switch (item.toLowerCase()) {
      case "home":
        return "/";
      case "about":
        return "/about";
      case "contact":
        return "/contact";
      default:
        return "/";
    }
  };

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {items.map(item => (
        <Link
          key={item}
          to={getPath(item)}
          onClick={() => onLink?.(item)}
          style={{
            color: '#000',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.target.style.color = '#666'}
          onMouseLeave={(e) => e.target.style.color = '#000'}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}