import { Link } from 'react-router-dom'
import './Home.css'

const reviews = [
  { name: 'Laila Hassan', role: 'Verified Buyer', rating: 5, text: 'IndusConnect has completely transformed how we source raw materials. The verified suppliers provide consistent quality every time.' },
  { name: 'Nour Yahia', role: 'Wholesaler', rating: 5, text: 'The RFQ process is seamless. I received 5 competitive quotes within 24 hours of my first request.' },
  { name: 'Zain Adam', role: 'Supplier', rating: 5, text: 'As a supplier, this platform has given us access to global buyers we couldn\'t reach before. The payment security is excellent.' },
]

const categories = [
  { image: '/cat_furniture_shelf.png', name: 'Furniture', count: '4.6k+ products' },
  { image: '/cat_textile_hoodies.png', name: 'Textile', count: '12k+ products' },
  { image: '/cat_raw_pvc.png', name: 'Raw Material', count: '8.4k+ products' },
]

const partners = [
  { name: 'Siemens', logo: '/logo_industrial_1.png' },
  { name: 'Bosch', logo: '/logo_industrial_2.png' },
  { name: 'Caterpillar', logo: '/logo_industrial_3.png' },
  { name: 'ABB Group', logo: '/logo_industrial_1.png' },
  { name: 'Honeywell', logo: '/logo_industrial_2.png' },
  { name: '3M', logo: '/logo_industrial_3.png' },
]

const StarRating = ({ rating }) => (
  <div className="stars">
    {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
  </div>
)

export default function Home() {
  return (
    <div className="home page-enter">
      {/* ===== HERO SECTION ===== */}
      <section
        className="hero"
        style={{ backgroundImage: 'url(/hero_men_warehouse.png)' }}
        id="hero-section"
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            All Suppliers, Traders &amp; Manufacturers<br />in One Place
          </h1>
          <p className="hero-subtitle">
            Find the right supplier, get the best price, and manage your orders.
          </p>
          
          {/* Search Bar in Hero */}
          <div className="hero-search-container">
            <div className="hero-search-bar">
              <span className="hero-search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="What are you looking for ?" 
                className="hero-search-input"
                id="hero-search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="our-story section" id="our-story">
        <div className="container-wide">
          <div className="story-grid">
            <div className="story-image">
              <img src="/story_handshake.png" alt="Our Story - Business Partnership" />
            </div>
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-desc">
                IndusConnect is a B2B platform connecting startups, manufacturers,
                suppliers, and traders in one trusted network.
              </p>
              <p className="story-desc" style={{ marginTop: 16 }}>
                We believe in transparent, efficient global trade. Our platform bridges
                the gap between buyers and sellers worldwide, enabling seamless
                procurement, competitive pricing, and long-lasting business relationships.
              </p>
              <Link to="/services" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }} id="story-explore-btn">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE HAVE ===== */}
      <section className="what-we-have section" id="what-we-have">
        <div className="container-wide">
          <h2 className="section-title text-center">What we have</h2>
          <p className="section-subtitle text-center">
            Browse thousands of industrial products across every category
          </p>
          <div className="categories-grid-new">
            {categories.map((cat, i) => (
              <Link to="/services" className="category-card-new" key={i} id={`category-${i}`}>
                <div className="category-image-wrap">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="category-info-new">
                  <span className="category-tag">{cat.name}</span>
                  <h3>{cat.name} products</h3>
                  <span className="category-count-new">{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BUILT ON TRUST ===== */}
      <section className="built-on-trust section" id="built-on-trust">
        <div className="container-wide">
          <h2 className="section-title text-center">Built on Trust</h2>
          <div className="stats-grid">
            <div className="stat-card" id="stat-suppliers">
              <div className="stat-number">11k+</div>
              <div className="stat-label">Verified Suppliers</div>
            </div>
            <div className="stat-card" id="stat-categories">
              <div className="stat-number">110+</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card" id="stat-industries">
              <div className="stat-number">14+</div>
              <div className="stat-label">Industries</div>
            </div>
            <div className="stat-card" id="stat-volume">
              <div className="stat-number">$1.5B+</div>
              <div className="stat-label">Transaction Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="reviews-section section" id="reviews">
        <div className="container-wide">
          <h2 className="section-title text-center">Satisfied Clients Speaks</h2>
          <p className="section-subtitle text-center">What our customers say about us</p>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div className="review-card" key={i} id={`review-${i}`}>
                <div className="review-header">
                  <div className="reviewer-avatar">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="reviewer-name">{r.name}</div>
                    <div className="reviewer-role">{r.role}</div>
                  </div>
                </div>
                <StarRating rating={r.rating} />
                <p className="review-text">"{r.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}>
            <button className="btn-primary" id="view-more-reviews">More Reviews</button>
          </div>
        </div>
      </section>

      {/* ===== COLLABORATION / PARTNERS ===== */}
      <section className="collaboration section" id="collaboration">
        <div className="container-wide">
          <h2 className="section-title text-center">Collaboration and Partners</h2>
          <p className="section-subtitle text-center">Trusted by leading industrial companies worldwide</p>
          <div className="partners-grid">
            {partners.map((p, i) => (
              <div className="partner-card" key={i} id={`partner-${i}`}>
                <div className="partner-logo-wrap">
                  <img src={p.logo} alt={p.name} />
                </div>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
