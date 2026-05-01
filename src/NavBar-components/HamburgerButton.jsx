import { Menu, X } from 'lucide-react';

export default function HamburgerButton({ isOpen = false, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
        color: '#000',
        transition: 'opacity 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}