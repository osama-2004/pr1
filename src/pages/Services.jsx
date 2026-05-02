import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './Services.css'

const products = [
  { 
    id: 1, 
    name: 'Solid Shelf Table', 
    price: 1000, 
    category: 'Furniture', 
    rating: 5, 
    reviews: 300, 
    image: '/cat_furniture_shelf.png', 
    description: 'Sleek wooden table with a functional shelf.',
    viewedCount: '200+',
    moq: '12pcs',
    unitPrice: '1000EGP'
  },
  { 
    id: 2, 
    name: 'Hoodies', 
    price: 250, 
    category: 'Textile', 
    rating: 4, 
    reviews: 100, 
    image: '/cat_textile_hoodies.png', 
    description: 'Comfortable hoodies suitable for casual wear.',
    viewedCount: '500+',
    moq: '50pcs',
    unitPrice: '250EGP'
  },
  { 
    id: 3, 
    name: 'PVC Rolls', 
    price: 10, 
    category: 'Raw Material', 
    rating: 3, 
    reviews: 400, 
    image: '/cat_raw_pvc.png', 
    description: 'Flexible PVC rolls used for industrial purposes.',
    viewedCount: '600+',
    moq: '10pcs',
    unitPrice: '10EGP'
  },
  { 
    id: 4, 
    name: 'Modern Pendant Light', 
    price: 600, 
    category: 'Furniture', 
    rating: 4.8, 
    reviews: 300, 
    image: '/product_amber_pendant.png', 
    description: 'Handmade amber glass pendant light using laser-cut molds.',
    viewedCount: '250+',
    moq: '5pcs',
    unitPrice: '600EGP'
  },
  { 
    id: 5, 
    name: 'Executive Leather Chair', 
    price: 890, 
    category: 'Furniture', 
    rating: 4.9, 
    reviews: 150, 
    image: '/product_leather_chair_premium.png', 
    description: 'Premium executive leather office chair with lumbar support.',
    viewedCount: '120+',
    moq: '2pcs',
    unitPrice: '890EGP'
  },
  { 
    id: 6, 
    name: 'Industrial CNC Router', 
    price: 5500, 
    category: 'Machinery', 
    rating: 4.8, 
    reviews: 12, 
    image: '/product_cnc_machine.png', 
    description: 'High precision CNC router for wood and metal.',
    viewedCount: '150+',
    moq: '1pc',
    unitPrice: '5500EGP'
  },
  { 
    id: 7, 
    name: 'Agricultural Beam', 
    price: 320, 
    category: 'Agricultural', 
    rating: 4.5, 
    reviews: 22, 
    image: '/product_agri_equipment.png', 
    description: 'High-strength agricultural beam for heavy machinery.',
    viewedCount: '80+',
    moq: '10pcs',
    unitPrice: '320EGP'
  },
  { 
    id: 8, 
    name: 'Electronics Kit', 
    price: 2100, 
    category: 'Electronics', 
    rating: 4.8, 
    reviews: 63, 
    image: '/product_electronics_kit.png', 
    description: 'Professional hardware kit for industrial control.',
    viewedCount: '300+',
    moq: '5pcs',
    unitPrice: '2100EGP'
  },
]

const categories = ['All', 'Furniture', 'Textile', 'Raw Material', 'Machinery', 'Construction', 'Electronics']

const StarRating = ({ rating, reviews }) => (
  <div className="stars-sm">
    <span className="stars-icons">{'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}</span>
    <span className="rating-val">{rating} ({reviews})</span>
  </div>
)

export default function Services() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [activeCategory, setActiveCategory] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sort, setSort] = useState('default')

  const filtered = products
    .filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory
      const matchQ = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1]
      return matchCat && matchQ && matchPrice
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <div className="services-page page-enter">
      {/* Mini Hero */}
      <div className="services-hero" style={{ backgroundImage: 'url(/hero_industrial.png)' }}>
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <h1>Browse Products</h1>
          <p>Find quality industrial products from verified suppliers</p>
          <div className="services-hero-btns">
            <button className="btn-primary" id="services-shop-now">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="services-layout">
        {/* ===== SIDEBAR FILTERS ===== */}
        <aside className="services-sidebar" id="services-sidebar">
          <h3 className="filter-heading">Filter Options</h3>

          <div className="filter-group">
            <h4>By Category</h4>
            <ul className="filter-list">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    id={`filter-cat-${cat.toLowerCase()}`}
                    className={`filter-item ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="price-inputs">
              <input
                id="filter-price-min"
                type="number"
                value={priceRange[0]}
                onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                min={0}
                placeholder="Min"
                className="form-input"
              />
              <span>–</span>
              <input
                id="filter-price-max"
                type="number"
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                max={20000}
                placeholder="Max"
                className="form-input"
              />
            </div>
          </div>

          <div className="filter-group">
            <h4>Sort By</h4>
            <select
              id="filter-sort"
              className="form-input"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Rating</h4>
            <ul className="filter-list">
              {[5,4,3,2,1].map(r => (
                <li key={r}>
                  <button className="filter-item" id={`filter-rating-${r}`}>
                    <span style={{ color: '#F59E0B' }}>{'★'.repeat(r)}{'☆'.repeat(5-r)}</span>
                    <span style={{ marginLeft: 8 }}>{r} stars &amp; up</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ===== PRODUCT GRID ===== */}
        <main className="services-main">
          <div className="services-header">
            <p className="results-count">{filtered.length} products found{query ? ` for "${query}"` : ''}</p>
          </div>

          <div className="products-grid">
            {filtered.map(product => (
              <Link to={`/services/${product.id}`} className="product-card" key={product.id} id={`product-${product.id}`}>
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.name} />
                  <div className="product-heart-icon">♡</div>
                  <div className="product-cart-icon">🛒</div>
                </div>
                <div className="product-info">
                  <div className="product-cat-tag">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-short-desc">{product.description}</p>
                  
                  <div className="product-viewed-info">
                    <span className="eye-icon">👁</span>
                    <span>{product.viewedCount} viewed in past week</span>
                  </div>

                  <StarRating rating={product.rating} reviews={product.reviews} />

                  <div className="product-b2b-info">
                    <div className="b2b-stat">
                      <span className="b2b-label">MOQ</span>
                      <span className="b2b-value">{product.moq}</span>
                    </div>
                    <div className="b2b-stat">
                      <span className="b2b-label">Unit Price</span>
                      <span className="b2b-value highlighted">EGP {product.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination" id="products-pagination">
            {[1,2,3,4].map(n => (
              <button key={n} className={`page-btn ${n === 1 ? 'active' : ''}`} id={`page-${n}`}>{n}</button>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
