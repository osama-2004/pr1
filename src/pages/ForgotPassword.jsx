import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="auth-page">
      <div className="auth-image">
        <img src="/story_handshake.png" alt="Business partnership" />
        <div className="auth-image-overlay" />
      </div>
      <div className="auth-form-panel">
        <div className="auth-form-inner">
          <Link to="/" className="auth-logo" id="forgot-logo">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              {/* <path d="M20 4L36 13V27L20 36L4 27V13L20 4Z" fill="#C64543"/>
              <path d="M20 14V36L4 27V13L20 14Z" fill="#991B1B" opacity="0.6"/>
              <path d="M20 14L36 13V27L20 36V14Z" fill="#BF3834" opacity="0.7"/> */}
            </svg>
            <span>IndusConnect</span>
          </Link>

          <h1 className="auth-title">Reset Password</h1>
          <p className="auth-subtitle">Enter your email to receive reset instructions</p>

          {sent ? (
            <div style={{ background: '#D1FAE5', padding: 20, borderRadius: 8, color: '#065F46', fontSize: 15, lineHeight: 1.7 }}>
              ✅ If an account exists with that email, you'll receive password reset instructions shortly. Check your inbox.
            </div>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit} id="forgot-form">
              <div className="form-group">
                <input
                  id="forgot-email"
                  type="email"
                  placeholder="Email address"
                  className="form-input"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary auth-btn" id="forgot-submit">
                Send Reset Link
              </button>
            </form>
          )}

          <p className="auth-switch" style={{ marginTop: 24 }}>
            Remembered? <Link to="/login" id="forgot-back-login">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
