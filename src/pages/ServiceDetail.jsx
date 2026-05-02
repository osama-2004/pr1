import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ServiceDetail.css'

const products = [
  { 
    id: 1, 
    name: 'Solid Shelf Table', 
    price: 1000, 
    category: 'Furniture', 
    rating: 5, 
    reviews: 300, 
    image: '/cat_furniture_shelf.png', 
    description: 'Sleek wooden table with a functional shelf.' 
  },
  { 
    id: 2, 
    name: 'Hoodies', 
    price: 250, 
    category: 'Textile', 
    rating: 4, 
    reviews: 100, 
    image: '/cat_textile_hoodies.png', 
    description: 'Comfortable hoodies suitable for casual wear.' 
  },
  { 
    id: 3, 
    name: 'PVC Rolls', 
    price: 10, 
    category: 'Raw Material', 
    rating: 3, 
    reviews: 400, 
    image: '/cat_raw_pvc.png', 
    description: 'Flexible PVC rolls used for industrial purposes.' 
  },
  { 
    id: 4, 
    name: 'Modern Pendant Light', 
    price: 600, 
    category: 'Furniture', 
    rating: 4.8, 
    reviews: 300, 
    image: '/product_amber_pendant.png', 
    description: 'Handmade amber glass pendant light using laser-cut molds, perfect for home automation structures. Features premium quality glass, customizable, and trendy functional design.' 
  },
  { 
    id: 5, 
    name: 'Executive Leather Chair', 
    price: 890, 
    category: 'Furniture', 
    rating: 4.9, 
    reviews: 150, 
    image: '/product_leather_chair_premium.png', 
    description: 'Premium executive leather office chair with lumbar support.' 
  },
  { 
    id: 6, 
    name: 'Industrial CNC Router', 
    price: 5500, 
    category: 'Machinery', 
    rating: 4.8, 
    reviews: 12, 
    image: '/product_cnc_machine.png', 
    description: 'High precision CNC router for wood and metal.' 
  },
  { 
    id: 7, 
    name: 'Agricultural Beam', 
    price: 320, 
    category: 'Agricultural', 
    rating: 4.5, 
    reviews: 22, 
    image: '/product_agri_equipment.png', 
    description: 'High-strength agricultural beam for heavy machinery.' 
  },
  { 
    id: 8, 
    name: 'Electronics Kit', 
    price: 2100, 
    category: 'Electronics', 
    rating: 4.8, 
    reviews: 63, 
    image: '/product_electronics_kit.png', 
    description: 'Professional hardware kit for industrial control.' 
  },
]

const reviewsList = [
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', rating: 5, text: 'Excellent quality, exactly as described' },
  { name: 'Nour Yahia', email: 'nour@gmail.com', rating: 4, text: 'Durable and perfect for our projects.' },
  { name: 'Zain Adam', email: 'zain@gmail.com', rating: 5, text: 'Meets all specifications, highly recommended.' },
]

const StarRating = ({ rating }) => <span className="stars">{'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}</span>

export default function ServiceDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id)) || products[0]
  const [activeTab, setActiveTab] = useState('reviews')
  const [qty, setQty] = useState(1)

  return (
    <div className="detail-page page-enter">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/" id="breadcrumb-home">Home</Link>
        <span>/</span>
        <Link to="/services" id="breadcrumb-products">{product.category}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="detail-layout">
        {/* Images */}
        <div className="detail-images">
          <img src={product.image} alt={product.name} className="detail-main-img" id="detail-main-image" />
          <div className="detail-thumbs">
            {[product.image, product.image, product.image].map((src, i) => (
              <img key={i} src={src} alt="" className="detail-thumb" id={`detail-thumb-${i}`} />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="detail-info">
          <div className="detail-breadcrumb-tag">{product.category}</div>
          <h1 className="detail-title">{product.name}</h1>

          <div className="detail-rating">
            <StarRating rating={Math.round(product.rating)} />
            <span>Gold by: Sold at eur</span>
          </div>

          <div className="detail-pricing">
            <span className="detail-price">EGP {product.price}</span>
          </div>

          <div className="detail-info-block">
            <h4 className="info-title">What is it ?</h4>
            <p className="info-text">{product.description}</p>
          </div>

          <div className="detail-info-block">
            <h4 className="info-title">Why is it special ?</h4>
            <ul className="info-list">
              <li>Eco-friendly</li>
              <li>Customizable</li>
              <li>Trendy & Functional</li>
            </ul>
          </div>

          {/* Quantity + Buttons */}
          <div className="detail-qty">
            <label>Qty:</label>
            <div className="qty-controls">
              <button id="qty-decrease" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span id="qty-value">{qty}</span>
              <button id="qty-increase" onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <div className="detail-actions">
            <Link to="/cart" className="btn-primary" id="detail-add-to-cart">Add to Cart</Link>
            <Link to="/rfq" className="btn-outline" id="detail-rfq">RFQ</Link>
          </div>

          {/* Shipping info */}
          <div className="detail-shipping">
            <div className="shipping-item">
              <span className="ship-icon">🚚</span>
              <div>
                <strong>Fast Shipping</strong>
                <p>2-5 business days</p>
              </div>
            </div>
            <div className="shipping-item">
              <span className="ship-icon">🔄</span>
              <div>
                <strong>Easy Returns</strong>
                <p>30 day return policy</p>
              </div>
            </div>
            <div className="shipping-item">
              <span className="ship-icon">✅</span>
              <div>
                <strong>Verified Supplier</strong>
                <p>Quality guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews & Sample Request Tabs */}
      <div className="detail-tabs-section">
        <div className="detail-tabs">
          <button
            id="tab-reviews"
            className={`detail-tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button
            id="tab-sample"
            className={`detail-tab ${activeTab === 'sample' ? 'active' : ''}`}
            onClick={() => setActiveTab('sample')}
          >
            Sample Request
          </button>
        </div>

        {activeTab === 'reviews' && (
          <div className="reviews-list" id="reviews-list">
            <h3 className="reviews-list-title">Review List</h3>
            {reviewsList.map((r, i) => (
              <div className="review-item" key={i} id={`review-item-${i}`}>
                <div className="review-item-header">
                  <div className="reviewer-avatar">{r.name.charAt(0)}</div>
                  <div>
                    <div className="reviewer-name">{r.name}</div>
                    <div className="reviewer-email">{r.email}</div>
                  </div>
                  <div className="review-item-rating">
                    <StarRating rating={r.rating} />
                  </div>
                </div>
                <p className="review-item-text">{r.text}</p>
              </div>
            ))}
            <button className="btn-primary" id="more-reviews-btn" style={{ marginTop: 16 }}>
              More Reviews
            </button>
          </div>
        )}

        {activeTab === 'sample' && (
          <div className="sample-form" id="sample-form">
            <h3>Request a Sample</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your name" className="form-input" id="sample-name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your email" className="form-input" id="sample-email" />
              </div>
              <div className="form-group">
                <textarea placeholder="Additional notes..." className="form-input" rows="4" id="sample-notes" style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-primary" id="sample-submit">Send Request</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
