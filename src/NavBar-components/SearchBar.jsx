import { useId, useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

// ─── Site-wide search index ───────────────────────────────────────────────────
// Add or edit entries here to make any page/section searchable.
const SITE_INDEX = [
  // Pages
  { type: "page", label: "Home", description: "Back to the main page", path: "/" },
  { type: "page", label: "Store", description: "Browse all products", path: "/store" },
  { type: "page", label: "About", description: "Learn about us", path: "/about" },
  { type: "page", label: "Contact", description: "Get in touch with us", path: "/contact" },
  { type: "page", label: "Login", description: "Sign in to your account", path: "/login" },
  { type: "page", label: "Profile", description: "Manage your account", path: "/profile" },
  { type: "page", label: "Cart", description: "View your shopping cart", path: "/cart" },
  { type: "page", label: "Wishlist", description: "Your saved items", path: "/wishlist" },

  // Store categories
  { type: "category", label: "New Arrivals", description: "Freshly added products", path: "/store?category=new" },
  { type: "category", label: "Sale Items", description: "Discounted products", path: "/store?category=sale" },
  { type: "category", label: "Best Sellers", description: "Our most popular products", path: "/store?category=bestsellers" },

  // About sections
  { type: "section", label: "Our Story", description: "How we got started", path: "/about#our-story" },
  { type: "section", label: "Our Team", description: "Meet the people behind the store", path: "/about#team" },
  { type: "section", label: "Mission & Values", description: "What we stand for", path: "/about#mission" },

  // Contact options
  { type: "section", label: "Support", description: "Get help with an order", path: "/contact#support" },
  { type: "section", label: "FAQ", description: "Frequently asked questions", path: "/contact#faq" },
  { type: "section", label: "Returns & Refunds", description: "Return policy and process", path: "/contact#returns" },

  // Account
  { type: "section", label: "Order History", description: "View your past orders", path: "/profile#orders" },
  { type: "section", label: "Account Settings", description: "Update your personal info", path: "/profile#settings" },
  { type: "section", label: "Addresses", description: "Manage shipping addresses", path: "/profile#addresses" },
];

const TYPE_LABELS = { page: "Page", category: "Category", section: "Section" };

function scoreMatch(entry, query) {
  const q = query.toLowerCase();
  const label = entry.label.toLowerCase();
  const desc = entry.description.toLowerCase();
  if (label === q) return 3;
  if (label.startsWith(q)) return 2;
  if (label.includes(q) || desc.includes(q)) return 1;
  return 0;
}

export default function SearchBar({
  value: controlledValue,
  onSearch,
  placeholder = "Search pages, products…",
  style,
  className,
}) {
  const id = useId();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const [internalQuery, setInternalQuery] = useState(controlledValue ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const query = controlledValue !== undefined ? controlledValue : internalQuery;

  const results =
    query.trim().length === 0
      ? []
      : SITE_INDEX.map((entry) => ({ entry, score: scoreMatch(entry, query.trim()) }))
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 7)
          .map(({ entry }) => entry);

  const handleChange = (val) => {
    setInternalQuery(val);
    onSearch?.(val);
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const handleSelect = useCallback(
    (entry) => {
      setInternalQuery("");
      onSearch?.("");
      setIsOpen(false);
      setActiveIndex(-1);
      navigate(entry.path);
    },
    [navigate, onSearch]
  );

  const handleKeyDown = (e) => {
    if (!isOpen || results.length === 0) {
      if (e.key === "Enter" && query.trim()) {
        navigate(`/store?search=${encodeURIComponent(query.trim())}`);
        setIsOpen(false);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) {
        handleSelect(results[activeIndex]);
      } else {
        navigate(`/store?search=${encodeURIComponent(query.trim())}`);
        setIsOpen(false);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div style={{ position: "relative", minWidth: 0, ...style }} className={className}>
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Search
      </label>

      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <Search
          size={16}
          style={{ position: "absolute", left: "14px", color: "#888", pointerEvents: "none" }}
        />
        <input
          ref={inputRef}
          id={id}
          type="search"
          placeholder={placeholder}
          value={query}
          autoComplete="off"
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          aria-autocomplete="list"
          aria-controls={`${id}-listbox`}
          aria-activedescendant={activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
          style={{
            width: "100%",
            minWidth: 0,
            height: "48px",
            padding: "0 36px 0 40px",
            borderRadius: showDropdown ? "10px 10px 0 0" : "10px",
            border: "1px solid #ccc",
            borderBottom: showDropdown ? "1px solid #e5e5e5" : "1px solid #ccc",
            fontSize: "15px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
        {query.length > 0 && (
          <button
            onClick={() => handleChange("")}
            tabIndex={-1}
            aria-label="Clear search"
            style={{
              position: "absolute",
              right: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#aaa",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {showDropdown && (
        <div
          ref={dropdownRef}
          id={`${id}-listbox`}
          role="listbox"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderTop: "none",
            borderRadius: "0 0 10px 10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {results.length === 0 ? (
            <div style={{ padding: "14px 16px", fontSize: "14px", color: "#888" }}>
              No results for "{query}" — press Enter to search the store
            </div>
          ) : (
            <>
              {results.map((entry, i) => (
                <div
                  key={entry.path}
                  id={`${id}-option-${i}`}
                  role="option"
                  aria-selected={i === activeIndex}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseDown={(e) => { e.preventDefault(); handleSelect(entry); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 16px",
                    cursor: "pointer",
                    backgroundColor: i === activeIndex ? "#f5f5f5" : "#fff",
                    borderBottom: i < results.length - 1 ? "1px solid #f0f0f0" : "none",
                    transition: "background-color 0.1s",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#111",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {entry.label}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#777",
                        marginTop: "1px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {entry.description}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#aaa",
                      backgroundColor: "#f0f0f0",
                      padding: "2px 7px",
                      borderRadius: "20px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {TYPE_LABELS[entry.type]}
                  </span>
                </div>
              ))}
              <div
                onMouseDown={(e) => {
                  e.preventDefault();
                  navigate(`/store?search=${encodeURIComponent(query.trim())}`);
                  setIsOpen(false);
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fafafa")}
                style={{
                  padding: "10px 16px",
                  fontSize: "13px",
                  color: "#555",
                  cursor: "pointer",
                  backgroundColor: "#fafafa",
                  borderTop: "1px solid #f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Search size={13} />
                Search "<strong>{query}</strong>" in the store
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}