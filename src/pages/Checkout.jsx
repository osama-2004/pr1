import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

export default function Checkout() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', country: '', zip: '',
    cardNum: '', cardName: '', expiry: '', cvv: ''
  })

  const handleOrder = (e) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <div className="checkout-page page-enter">
      <div className="checkout-inner">
        <h1 className="checkout-title" id="checkout-heading">Checkout</h1>

        {/* Steps */}
        <div className="checkout-steps" id="checkout-steps">
          {['Shipping', 'Payment', 'Confirmation'].map((s, i) => (
            <div key={i} className={`checkout-step ${step >= i+1 ? 'active' : ''} ${step > i+1 ? 'done' : ''}`} id={`step-${i+1}`}>
              <div className="step-circle">{step > i+1 ? '✓' : i+1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        {step === 3 ? (
          <div className="checkout-success" id="checkout-success">
            <div className="success-icon">✅</div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your order. You will receive a confirmation email shortly.</p>
            <p className="order-num">Order #IC-2026-8847</p>
            <button className="btn-primary" id="back-home-btn" onClick={() => navigate('/')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="checkout-layout">
            <div className="checkout-form-panel">
              {step === 1 && (
                <form id="shipping-form" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                  <h2>Shipping Information</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input id="checkout-firstname" type="text" className="form-input" placeholder="John" required
                        value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input id="checkout-lastname" type="text" className="form-input" placeholder="Doe" required
                        value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input id="checkout-email" type="email" className="form-input" placeholder="john@company.com" required
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input id="checkout-phone" type="tel" className="form-input" placeholder="+1 234 567 8900" required
                      value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <input id="checkout-address" type="text" className="form-input" placeholder="123 Industrial Ave" required
                      value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input id="checkout-city" type="text" className="form-input" placeholder="New York" required
                        value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <select id="checkout-country" className="form-input" required
                        value={form.country} onChange={e => setForm({...form, country: e.target.value})}>
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="UAE">United Arab Emirates</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="DE">Germany</option>
                        <option value="CN">China</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary checkout-next-btn" id="step1-next">
                    Continue to Payment →
                  </button>
                </form>
              )}

              {step === 2 && (
                <form id="payment-form" onSubmit={handleOrder}>
                  <h2>Payment Details</h2>
                  <div className="form-group">
                    <label className="form-label">Card Number</label>
                    <input id="checkout-card-num" type="text" className="form-input" placeholder="1234 5678 9012 3456" required
                      value={form.cardNum} onChange={e => setForm({...form, cardNum: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Cardholder Name</label>
                    <input id="checkout-card-name" type="text" className="form-input" placeholder="John Doe" required
                      value={form.cardName} onChange={e => setForm({...form, cardName: e.target.value})} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Expiry Date</label>
                      <input id="checkout-expiry" type="text" className="form-input" placeholder="MM/YY" required
                        value={form.expiry} onChange={e => setForm({...form, expiry: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">CVV</label>
                      <input id="checkout-cvv" type="text" className="form-input" placeholder="123" required
                        value={form.cvv} onChange={e => setForm({...form, cvv: e.target.value})} />
                    </div>
                  </div>
                  <div className="checkout-pay-btns">
                    <button type="button" className="btn-outline" id="step2-back" onClick={() => setStep(1)}>← Back</button>
                    <button type="submit" className="btn-primary" id="place-order-btn">Place Order</button>
                  </div>
                </form>
              )}
            </div>

            {/* Order Summary */}
            <div className="checkout-summary" id="checkout-summary">
              <h3>Order Summary</h3>
              <div className="summary-line"><span>2x Pendant Light</span><span>$1,000</span></div>
              <div className="summary-line"><span>1x Leather Chair</span><span>$890</span></div>
              <div className="summary-line"><span>Shipping</span><span>$45</span></div>
              <div className="summary-line"><span>Tax</span><span>$97</span></div>
              <div className="summary-total"><span>Total</span><span>$2,032</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
