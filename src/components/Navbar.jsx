import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
)
const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
)
const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
)
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/services?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Hamburger */}
        <button className="nav-menu-btn" onClick={() => setMenuOpen(!menuOpen)} id="nav-menu-toggle">
          <MenuIcon />
        </button>

        {/* Logo */}
        <Link to="/" className="nav-logo" id="nav-logo">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            {/* <path d="M20 4L36 13V27L20 36L4 27V13L20 4Z" fill="#C64543"/>
            <path d="M20 4L28 9L20 14L12 9L20 4Z" fill="#BF3834" opacity="0.8"/>
            <path d="M20 14V36L4 27V13L20 14Z" fill="#991B1B" opacity="0.6"/>
            <path d="M20 14L36 13V27L20 36V14Z" fill="#BF3834" opacity="0.7"/> */}
          </svg>
          <span>IndusConnect</span>
        </Link>

        {/* Search Bar */}
        <form className="nav-search" onSubmit={handleSearch} id="nav-search-form">
          <SearchIcon />
          <input
            id="nav-search-input"
            type="text"
            placeholder="Search products, suppliers..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Right Icons */}
        <div className="nav-icons">
          <button className="nav-icon-btn" title="Search" id="nav-search-btn">
            <SearchIcon />
          </button>
          <button className="nav-icon-btn" title="Wishlist" id="nav-wishlist-btn">
            <HeartIcon />
          </button>
          <Link to="/profile" className="nav-icon-btn" title="Profile" id="nav-profile-btn">
            <UserIcon />
          </Link>
          <Link to="/cart" className="nav-icon-btn nav-cart-btn" title="Cart" id="nav-cart-btn">
            <CartIcon />
            <span className="cart-badge">3</span>
          </Link>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div className="nav-mobile-menu" id="nav-mobile-menu">
          <nav>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/rfq" onClick={() => setMenuOpen(false)}>RFQ</Link>
            <Link to="/complaint" onClick={() => setMenuOpen(false)}>Support</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Log In</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
