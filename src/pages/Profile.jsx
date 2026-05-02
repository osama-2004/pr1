import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const orders = [
  { id: 'IC-ORD-8841', product: 'Modern Pendant Light', date: 'April 15, 2026', status: 'delivered', total: 500 },
  { id: 'IC-ORD-8820', product: 'Executive Leather Chair × 2', date: 'April 8, 2026', status: 'shipped', total: 1780 },
  { id: 'IC-ORD-8799', product: 'Industrial Vacuum', date: 'March 28, 2026', status: 'processing', total: 1250 },
]

const statusColor = {
  delivered: 'badge-success',
  shipped: 'badge-warning',
  processing: 'badge-danger',
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile')
  const [profile, setProfile] = useState({
    name: 'osama Doe', email: 'john@company.com', phone: '+01151145743',
    company: 'Acme Industries', country: 'United States', role: 'Buyer'
  })
  const [editing, setEditing] = useState(false)

  return (
    <div className="profile-page page-enter">
      {/* Profile Header */}
      <div className="profile-hero" id="profile-hero">
        <div className="profile-avatar-big">
          {profile.name.charAt(0)}
        </div>
        <div className="profile-hero-info">
          <h1 id="profile-name">{profile.name}</h1>
          <p id="profile-role">{profile.role} · {profile.company}</p>
          <span className="badge badge-success" id="profile-verified">✓ Verified Account</span>
        </div>
      </div>

      <div className="profile-layout">
        {/* Tabs */}
        <div className="profile-tabs" id="profile-tabs">
          {[
            { id: 'profile', label: '👤 My Profile' },
            { id: 'orders', label: '📦 My Orders' },
            { id: 'rfqs', label: '📋 My RFQs' },
            { id: 'settings', label: '⚙️ Settings' },
          ].map(t => (
            <button
              key={t.id}
              id={`profile-tab-${t.id}`}
              className={`profile-tab-btn ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Profile Info Tab */}
        {activeTab === 'profile' && (
          <div className="profile-content page-enter" id="profile-info-panel">
            <div className="profile-card">
              <div className="profile-card-header">
                <h3>Personal Information</h3>
                <button
                  className="btn-outline"
                  id="profile-edit-btn"
                  onClick={() => setEditing(!editing)}
                  style={{ padding: '6px 16px', fontSize: 13 }}
                >
                  {editing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              {editing ? (
                <div className="profile-edit-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input id="profile-edit-name" type="text" className="form-input"
                        value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input id="profile-edit-email" type="email" className="form-input"
                        value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input id="profile-edit-phone" type="tel" className="form-input"
                        value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input id="profile-edit-company" type="text" className="form-input"
                        value={profile.company} onChange={e => setProfile({...profile, company: e.target.value})} />
                    </div>
                  </div>
                  <button className="btn-primary" id="profile-save-btn" onClick={() => setEditing(false)}>
                    Save Changes
                  </button>
                </div>
              ) : (
                <div className="profile-info-grid">
                  {[
                    { label: 'Full Name', value: profile.name },
                    { label: 'Email', value: profile.email },
                    { label: 'Phone', value: profile.phone },
                    { label: 'Company', value: profile.company },
                    { label: 'Country', value: profile.country },
                    { label: 'Account Type', value: profile.role },
                  ].map((item, i) => (
                    <div className="profile-info-item" key={i} id={`profile-field-${i}`}>
                      <span className="info-label">{item.label}</span>
                      <span className="info-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="profile-content page-enter" id="profile-orders-panel">
            <div className="profile-card">
              <h3 style={{ marginBottom: 20 }}>My Orders</h3>
              <div className="orders-list">
                {orders.map((order, i) => (
                  <div className="order-item" key={i} id={`order-item-${i}`}>
                    <div className="order-info">
                      <div className="order-id">{order.id}</div>
                      <div className="order-product">{order.product}</div>
                      <div className="order-date">{order.date}</div>
                    </div>
                    <div className="order-right">
                      <div className="order-total">${order.total.toLocaleString()}</div>
                      <span className={`badge ${statusColor[order.status]}`}>{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RFQs Tab */}
        {activeTab === 'rfqs' && (
          <div className="profile-content page-enter" id="profile-rfqs-panel">
            <div className="profile-card">
              <div style={{ textAlign: 'center', padding: '60px 24px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
                <h3 style={{ marginBottom: 8 }}>No RFQs yet</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Submit your first Request for Quotation</p>
                <Link to="/rfq" className="btn-primary" id="profile-rfq-link">Submit RFQ</Link>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="profile-content page-enter" id="profile-settings-panel">
            <div className="profile-card">
              <h3 style={{ marginBottom: 20 }}>Account Settings</h3>

              <div className="settings-section">
                <h4>Change Password</h4>
                <div className="form-group">
                  <label className="form-label">Current Password</label>
                  <input id="settings-current-pwd" type="password" className="form-input" placeholder="••••••••" />
                </div>
                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <input id="settings-new-pwd" type="password" className="form-input" placeholder="••••••••" />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm New Password</label>
                  <input id="settings-confirm-pwd" type="password" className="form-input" placeholder="••••••••" />
                </div>
                <button className="btn-primary" id="settings-change-pwd-btn">Update Password</button>
              </div>

              <div className="settings-section" style={{ marginTop: 32, borderTop: '1.5px solid var(--border)', paddingTop: 28 }}>
                <h4 style={{ color: 'var(--primary)' }}>Danger Zone</h4>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>
                  Once you delete your account, there is no going back.
                </p>
                <button className="btn-outline" id="settings-delete-account-btn" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
