import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const initialItems = [
  { id: 1, name: 'Modern Pendant Light', price: 500, qty: 1, image: '/product_pendant.png', seller: 'LuxLighting Co.' },
  { id: 3, name: 'Executive Leather Chair', price: 890, qty: 2, image: '/product_leather.png', seller: 'OfficePlus' },
  { id: 4, name: 'Industrial Vacuum', price: 1250, qty: 1, image: '/product_pendant.png', seller: 'CleanTech Ind.' },
]

export default function Cart() {
  const [items, setItems] = useState(initialItems)

  const updateQty = (id, delta) => {
    setItems(items.map(it =>
      it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
    ))
  }

  const remove = (id) => setItems(items.filter(it => it.id !== id))

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0)
  const shipping = 45
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + shipping + tax

  return (
    <div className="cart-page page-enter">
      <div className="cart-inner">
        <h1 className="cart-title" id="cart-heading">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="cart-empty" id="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Start adding products from our marketplace</p>
            <Link to="/services" className="btn-primary" id="cart-browse-btn">Browse Products</Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Items */}
            <div className="cart-items" id="cart-items">
              {items.map(item => (
                <div className="cart-item" key={item.id} id={`cart-item-${item.id}`}>
                  <div className="cart-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p className="cart-item-seller">Seller: {item.seller}</p>
                    <div className="cart-item-controls">
                      <div className="qty-controls">
                        <button id={`decrease-${item.id}`} onClick={() => updateQty(item.id, -1)}>−</button>
                        <span>{item.qty}</span>
                        <button id={`increase-${item.id}`} onClick={() => updateQty(item.id, 1)}>+</button>
                      </div>
                      <button className="remove-btn" id={`remove-${item.id}`} onClick={() => remove(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price">
                    ${(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="cart-summary" id="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="summary-line">
                <span>Tax (5%)</span>
                <span>${tax.toLocaleString()}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <Link to="/checkout" className="btn-primary checkout-btn" id="proceed-checkout">
                Proceed to Checkout
              </Link>
              <Link to="/services" className="continue-shopping" id="continue-shopping">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
