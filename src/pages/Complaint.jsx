import { useState } from 'react'
import './Complaint.css'

export default function Complaint() {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', orderId: '', type: 'Payment Issue', description: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="complaint-page page-enter">
        <div className="complaint-inner">
          <div className="complaint-success" id="complaint-success">
            <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
            <h2>Complaint Submitted</h2>
            <p>Your complaint has been received. Our support team will investigate and contact you within 2–3 business days.</p>
            <p className="complaint-ticket">Ticket #IC-C-20268847</p>
            <button className="btn-primary" id="complaint-new" onClick={() => setSubmitted(false)}>
              Submit Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="complaint-page page-enter">
      <div className="complaint-inner">
        <div className="complaint-header">
          <h1 id="complaint-title">Submit a Complaint</h1>
          <p>We're here to help. Submit your issue and our team will resolve it promptly.</p>
        </div>

        <div className="complaint-layout">
          <form className="complaint-form" onSubmit={handleSubmit} id="complaint-form">
            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input id="complaint-name" type="text" className="form-input" placeholder="Your name"
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input id="complaint-email" type="email" className="form-input" placeholder="your@email.com"
                  value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Order ID (if applicable)</label>
                <input id="complaint-order-id" type="text" className="form-input" placeholder="IC-ORD-12345"
                  value={form.orderId} onChange={e => setForm({...form, orderId: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Complaint Type *</label>
                <select id="complaint-type" className="form-input"
                  value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                  <option>Payment Issue</option>
                  <option>Product Quality</option>
                  <option>Account Access</option>
                  <option>Delivery Problem</option>
                  <option>Supplier Conduct</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject *</label>
              <input id="complaint-subject" type="text" className="form-input"
                placeholder="Brief summary of your issue"
                value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} required />
            </div>

            <div className="form-group">
              <label className="form-label">Detailed Description *</label>
              <textarea id="complaint-description" className="form-input" rows="6"
                placeholder="Please provide as much detail as possible about your issue, including dates, amounts, and any relevant information..."
                value={form.description}
                onChange={e => setForm({...form, description: e.target.value})}
                style={{ resize: 'vertical' }}
                required />
            </div>

            <div className="form-group">
              <label className="form-label">Attach Evidence (optional)</label>
              <div className="file-drop" id="complaint-upload">
                <span>📎</span>
                <p>Drag & drop files or <strong>Browse</strong></p>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>PNG, JPG, PDF up to 10MB</p>
              </div>
            </div>

            <button type="submit" className="btn-primary complaint-submit-btn" id="complaint-submit">
              Submit Complaint
            </button>
          </form>

          {/* Info Panel */}
          <div className="complaint-info" id="complaint-info">
            <div className="complaint-info-card">
              <h3>What Happens Next?</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="process-icon">📩</div>
                  <div>
                    <strong>Received</strong>
                    <p>We receive and log your complaint immediately</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-icon">🔍</div>
                  <div>
                    <strong>Investigation</strong>
                    <p>Our team investigates within 24 hours</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-icon">📞</div>
                  <div>
                    <strong>Contact</strong>
                    <p>We contact you with resolution within 2–3 days</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-icon">✅</div>
                  <div>
                    <strong>Resolution</strong>
                    <p>Issue resolved and case closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="complaint-info-card">
              <h3>Contact Support</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                For urgent issues, reach us directly:
              </p>
              <div className="contact-links">
                <a href="mailto:support@indusconnect.com" id="support-email" className="contact-link">
                  📧 support@indusconnect.com
                </a>
                <a href="tel:+12345678900" id="support-phone" className="contact-link">
                  📞 +1 234 567 8900
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
