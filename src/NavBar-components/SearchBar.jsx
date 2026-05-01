import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ placeholder = "Search products...", onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch?.(query);
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '6px',
      padding: '0.5rem 0.75rem',
      border: '1px solid #ccc',
      maxWidth: '300px',
      transition: 'border-color 0.2s'
    }}
    onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
    onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'}
    >
      <input 
        type="text" 
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleSearch}
        style={{
          border: 'none',
          backgroundColor: 'transparent',
          outline: 'none',
          flex: 1,
          fontSize: '14px',
          color: '#000'
        }}
      />
      <Search size={16} style={{ color: '#666' }} />
    </div>
  );
}