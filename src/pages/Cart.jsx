import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import products from '../data/products'

import Footer from '../components/Footer'

export default function Cart () {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      return []
    }
  })
  const navigate = useNavigate()

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart))
    } catch (error) {
      console.error('Unable to save cart to localStorage', error)
    }
  }, [cart])

  const addToCart = id => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id)
      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prev, { id, quantity: 1 }]
      }
    })
  }

  const removeFromCart = id => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const getCartItem = id => cart.find(item => item.id === id) || { quantity: 0 }

  const getProduct = id => products.find(p => p.id === id)

  const total = cart.reduce((sum, item) => {
    const prod = getProduct(item.id)
    return sum + prod.price * item.quantity
  }, 0)

  const totalOld = cart.reduce((sum, item) => {
    const prod = getProduct(item.id)
    return sum + prod.oldPrice * item.quantity
  }, 0)

  const totalSaved = totalOld - total

  const totalSavedPercent = totalOld
    ? Math.round((totalSaved / totalOld) * 100)
    : 0

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cart</h1>
      <h2>Products</h2>

      <div style={styles.productsGrid}>
        {products.map(product => {
          const quantity = getCartItem(product.id).quantity
          const isMax = quantity >= product.stock

          return (
            <div key={product.id} style={styles.card}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%' }}
              />
              <h3>{product.name}</h3>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>
                  <span
                    style={{ textDecoration: 'line-through', color: 'red' }}
                  >
                    ${product.oldPrice}
                  </span>{' '}
                  / ${product.price}
                </span>

                {product.oldPrice > product.price && (
                  <span style={{ color: 'green', fontWeight: '600' }}>
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100
                    )}
                    % save
                  </span>
                )}
              </p>
              <p>Stock: {product.stock}</p>

              <div style={styles.controls}>
                <div>
                  <button
                    style={{
                      ...styles.button,
                      ...(quantity === 0 ? styles.buttonDisabled : {})
                    }}
                    onClick={() => removeFromCart(product.id)}
                    disabled={quantity === 0}
                  >
                    -
                  </button>

                  <button
                    style={{
                      ...styles.button,
                      ...(isMax ? styles.buttonDisabled : {})
                    }}
                    onClick={() => addToCart(product.id)}
                    disabled={isMax}
                  >
                    +
                  </button>
                </div>

                <span>added: {quantity}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div style={styles.cartBox}>
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map(item => {
              const prod = getProduct(item.id)
              return (
                <li
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                    justifyContent: 'space-between'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'cover',
                        borderRadius: '6px'
                      }}
                    />

                    <span>
                      {item.quantity}x {prod.name}
                    </span>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div>${prod.price * item.quantity}</div>

                    <div
                      style={{
                        fontSize: '12px',
                        color: 'green',
                        fontWeight: '600'
                      }}
                    >
                      Saved: ${(prod.oldPrice - prod.price) * item.quantity} (
                      {Math.round(
                        ((prod.oldPrice - prod.price) / prod.oldPrice) * 100
                      )}
                      %)
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}

        <p
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>
            <span style={{ textDecoration: 'line-through', color: 'red' }}>
              ${totalOld}
            </span>{' '}
            / <strong>${total}</strong>
          </span>

          <span style={{ color: 'green', fontWeight: '700' }}>
            You save ${totalSaved} ({totalSavedPercent}%)
          </span>
        </p>

        <button
          style={{
            ...styles.checkoutBtn,
            ...(cart.length === 0 ? styles.buttonDisabled : {})
          }}
          onClick={() => navigate('/checkout', { state: total })}
          disabled={cart.length === 0}
        >
          Continue Checkout
        </button>
      </div>
      <Footer />
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#fafafa'
  },

  productsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px'
  },

  card: {
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: '12px',
    padding: '12px',
    width: '200px'
  },

  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px'
  },

  button: {
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    padding: '4px 8px',
    margin: '0 2px',
    cursor: 'pointer',
    borderRadius: '10px'
  },

  buttonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  cartBox: {
    marginTop: '25px',
    padding: '15px',
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: '6px'
  },

  checkoutBtn: {
    marginTop: '10px',
    padding: '6px 12px',
    border: '1px solid #333',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '4px'
  }
}
