import { ShoppingCart } from 'lucide-react';

export default function CartIcon({ count = 0, onClick }) {
  return (
    <div 
      style={{
        position: 'relative',
        cursor: 'pointer',
        transition: 'opacity 0.2s'
      }}
      onClick={onClick}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
    >
      <ShoppingCart size={20} style={{ color: '#000' }} />
      {count > 0 && (
        <div style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          backgroundColor: '#ef4444',
          color: 'white',
          borderRadius: '50%',
          width: '18px',
          height: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {count}
        </div>
      )}
    </div>
  );
}