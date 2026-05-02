import { useState } from 'react'
import './RFQ.css'

export default function RFQ() {
  const [form, setForm] = useState({
    productName: '', category: '', quantity: '', unit: '', targetPrice: '',
    description: '', deliveryDate: '', country: '', name: '', email: '', phone: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rfq-page page-enter">
        <div className="rfq-inner">
          <div className="rfq-success" id="rfq-success">
            <div style={{ fontSize: 64, marginBottom: 20 }}>📋</div>
            <h2>RFQ Submitted!</h2>
            <p>Your Request for Quotation has been sent. Verified suppliers will respond within 24–48 hours.</p>
            <button className="btn-primary" id="rfq-new" onClick={() => setSubmitted(false)}>Submit Another RFQ</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rfq-page page-enter">
      <div className="rfq-inner">
        <div className="rfq-header">
          <h1 id="rfq-title">Request for Quotation</h1>
          <p>Tell us what you need and get competitive quotes from verified suppliers</p>
        </div>

        <div className="rfq-layout">
          {/* Form */}
          <form className="rfq-form" onSubmit={handleSubmit} id="rfq-form">
            <div className="rfq-section">
              <h3>Product Information</h3>
              <div className="form-group">
                <label className="form-label">Product Name *</label>
                <input id="rfq-product-name" type="text" className="form-input"
                  placeholder="e.g. Industrial CNC Router Machine"
                  value={form.productName}
                  onChange={e => setForm({...form, productName: e.target.value})}
                  required />
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select id="rfq-category" className="form-input"
                    value={form.category}
                    onChange={e => setForm({...form, category: e.target.value})}>
                    <option value="">Select Category</option>
                    <option>Industrial Machinery</option>
                    <option>Electronics & Parts</option>
                    <option>Hardware & Tools</option>
                    <option>Agricultural Equipment</option>
                    <option>Furniture & Fixtures</option>
                    <option>Construction Materials</option>
                    <option>Auto Parts</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Quantity *</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input id="rfq-quantity" type="number" className="form-input" placeholder="100"
                      value={form.quantity} onChange={e => setForm({...form, quantity: e.target.value})} required />
                    <select id="rfq-unit" className="form-input" style={{ width: 100, flexShrink: 0 }}
                      value={form.unit} onChange={e => setForm({...form, unit: e.target.value})}>
                      <option>Units</option>
                      <option>Kg</option>
                      <option>Tons</option>
                      <option>Sets</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Target Price (USD)</label>
                  <input id="rfq-price" type="number" className="form-input" placeholder="500"
                    value={form.targetPrice} onChange={e => setForm({...form, targetPrice: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Required Delivery Date</label>
                  <input id="rfq-date" type="date" className="form-input"
                    value={form.deliveryDate} onChange={e => setForm({...form, deliveryDate: e.target.value})} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Detailed Description *</label>
                <textarea id="rfq-description" className="form-input" rows="5"
                  placeholder="Describe your requirements, specifications, material preferences, certifications needed..."
                  value={form.description}
                  onChange={e => setForm({...form, description: e.target.value})}
                  style={{ resize: 'vertical' }}
                  required />
              </div>
            </div>

            <div className="rfq-section">
              <h3>Buyer Information</h3>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input id="rfq-name" type="text" className="form-input" placeholder="John Doe"
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input id="rfq-email" type="email" className="form-input" placeholder="john@company.com"
                    value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input id="rfq-phone" type="tel" className="form-input" placeholder="+1 234 567 8900"
                    value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Country</label>
                <select id="rfq-country" className="form-input"
                  value={form.country} onChange={e => setForm({...form, country: e.target.value})}>
                  <option value="">Select Country</option>
                  <option>United States</option>
                  <option>United Arab Emirates</option>
                  <option>Saudi Arabia</option>
                  <option>Germany</option>
                  <option>China</option>
                  <option>India</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-primary rfq-submit-btn" id="rfq-submit">
              Submit RFQ
            </button>
          </form>

          {/* Info Panel */}
          <div className="rfq-info-panel" id="rfq-info-panel">
            <div className="rfq-info-card">
              <h3>How RFQ Works</h3>
              <div className="rfq-steps-list">
                <div className="rfq-step-item">
                  <div className="rfq-step-num">1</div>
                  <div>
                    <strong>Submit Your RFQ</strong>
                    <p>Fill in your product requirements</p>
                  </div>
                </div>
                <div className="rfq-step-item">
                  <div className="rfq-step-num">2</div>
                  <div>
                    <strong>Receive Quotes</strong>
                    <p>Get competitive offers within 24-48h</p>
                  </div>
                </div>
                <div className="rfq-step-item">
                  <div className="rfq-step-num">3</div>
                  <div>
                    <strong>Compare & Choose</strong>
                    <p>Select the best supplier for your needs</p>
                  </div>
                </div>
                <div className="rfq-step-item">
                  <div className="rfq-step-num">4</div>
                  <div>
                    <strong>Place Your Order</strong>
                    <p>Finalize the deal securely on platform</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rfq-info-card rfq-benefits">
              <h3>Benefits</h3>
              <ul>
                <li>✓ 100% Free to submit</li>
                <li>✓ Reach 11,000+ verified suppliers</li>
                <li>✓ Competitive pricing</li>
                <li>✓ Quality guaranteed</li>
                <li>✓ Secure transactions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
