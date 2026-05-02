import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AdminDashboard.css'

const usersData = [
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', type: 'Buyer', date: 'March 22, 2026', status: 'active' },
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', type: 'Supplier', date: 'March 22, 2026', status: 'active' },
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', type: 'Buyer', date: 'March 22, 2026', status: 'suspended' },
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', type: 'Buyer', date: 'March 22, 2026', status: 'active' },
]

const complaintsData = [
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', subject: 'Payment Issue', date: 'March 22, 2026', status: 'open' },
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', subject: 'Product Quality', date: 'March 22, 2026', status: 'under review' },
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', subject: 'Account access issue', date: 'March 22, 2026', status: 'open' },
  { name: 'Laila Hassan', email: 'nouhair11@gmail.com', subject: 'Payment Issue', date: 'March 22, 2026', status: 'open' },
]

const productsData = [
  { name: 'Modern Pendant Light', category: 'Furniture', price: 500, seller: 'LuxLighting', status: 'active' },
  { name: 'Executive Leather Chair', category: 'Furniture', price: 890, seller: 'OfficePlus', status: 'active' },
  { name: 'CNC Router Machine', category: 'Machinery', price: 5500, seller: 'PrecisionMach.', status: 'pending' },
  { name: 'Agricultural Sprayer', category: 'Agricultural', price: 1200, seller: 'AgriParts', status: 'active' },
]

const NavIcon = ({ children }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 10 }}>{children}</span>
)

const DashboardIcon = () => <span>⊞</span>
const UsersIcon = () => <span>👥</span>
const ProductsIcon = () => <span>📦</span>
const ComplaintsIcon = () => <span>💬</span>
const SettingsIcon = () => <span>⚙️</span>

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [userSearch, setUserSearch] = useState('')
  const [userTypeFilter, setUserTypeFilter] = useState('all')

  const filteredUsers = usersData.filter(u =>
    (userTypeFilter === 'all' || u.type.toLowerCase() === userTypeFilter) &&
    (u.name.toLowerCase().includes(userSearch.toLowerCase()) || u.email.toLowerCase().includes(userSearch.toLowerCase()))
  )

  return (
    <div className="admin-page">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar" id="admin-sidebar">
        <div className="admin-brand">
          <Link to="/" className="admin-logo" id="admin-logo">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              {/* <path d="M20 4L36 13V27L20 36L4 27V13L20 4Z" fill="#C64543"/>
              <path d="M20 14V36L4 27V13L20 14Z" fill="#991B1B" opacity="0.6"/>
              <path d="M20 14L36 13V27L20 36V14Z" fill="#BF3834" opacity="0.7"/> */}
            </svg>
            <span>IndusConnect</span>
          </Link>
        </div>

        <nav className="admin-nav">
          {[
            { id: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
            { id: 'users', icon: <UsersIcon />, label: 'Manage Users' },
            { id: 'products', icon: <ProductsIcon />, label: 'Manage Products' },
            { id: 'complaints', icon: <ComplaintsIcon />, label: 'Solve Complaints' },
          ].map(item => (
            <button
              key={item.id}
              id={`admin-nav-${item.id}`}
              className={`admin-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <NavIcon>{item.icon}</NavIcon>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-info">
            <div className="admin-avatar">A</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Admin</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>nouhair11@gmail.com</div>
            </div>
          </div>
          <button className="admin-nav-item" id="admin-nav-settings">
            <NavIcon><SettingsIcon /></NavIcon>
            Setting
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Top Bar */}
        <div className="admin-topbar">
          <h2 className="admin-page-title">
            {activeSection === 'dashboard' && 'Dashboard'}
            {activeSection === 'users' && 'Manage Users'}
            {activeSection === 'products' && 'Manage Products'}
            {activeSection === 'complaints' && 'Solve Complaints'}
          </h2>
          <div className="admin-topbar-icons">
            <button className="admin-icon-btn" id="admin-search-btn">🔍</button>
            <button className="admin-icon-btn" id="admin-notif-btn">🔔</button>
            <button className="admin-icon-btn" id="admin-user-btn">👤</button>
          </div>
        </div>

        {/* ===== DASHBOARD SECTION ===== */}
        {activeSection === 'dashboard' && (
          <div className="admin-section page-enter" id="admin-dashboard-section">
            <div className="admin-stats-grid">
              <div className="admin-stat-card" id="stat-total-users">
                <div className="admin-stat-label">Total Users</div>
                <div className="admin-stat-value">1,250</div>
                <div className="admin-stat-change positive">+12% this month</div>
              </div>
              <div className="admin-stat-card" id="stat-products-approved">
                <div className="admin-stat-label">Products Approved</div>
                <div className="admin-stat-value">1,650</div>
                <div className="admin-stat-change positive">+8% this month</div>
              </div>
              <div className="admin-stat-card" id="stat-products-rejected">
                <div className="admin-stat-label">Products Rejected</div>
                <div className="admin-stat-value">1,650</div>
                <div className="admin-stat-change negative">+3% this month</div>
              </div>
            </div>

            <div className="admin-recent-section">
              <h3>Recent Activity</h3>
              <div className="admin-table-wrap">
                <table className="admin-table" id="admin-recent-table">
                  <thead>
                    <tr>
                      <th>Name / Email</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.slice(0, 4).map((u, i) => (
                      <tr key={i} id={`recent-row-${i}`}>
                        <td>
                          <div className="table-user">
                            <div className="table-avatar">{u.name.charAt(0)}</div>
                            <div>
                              <div className="table-name">{u.name}</div>
                              <div className="table-email">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className={`badge badge-${u.type === 'Buyer' ? 'success' : 'warning'}`}>{u.type}</span></td>
                        <td className="table-muted">{u.date}</td>
                        <td><span className={`badge badge-${u.status === 'active' ? 'success' : 'danger'}`}>{u.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===== USERS SECTION ===== */}
        {activeSection === 'users' && (
          <div className="admin-section page-enter" id="admin-users-section">
            <div className="admin-section-toolbar">
              <div className="user-type-filters">
                {['all', 'buyer', 'supplier'].map(t => (
                  <button
                    key={t}
                    id={`user-filter-${t}`}
                    className={`user-type-btn ${userTypeFilter === t ? 'active' : ''}`}
                    onClick={() => setUserTypeFilter(t)}
                  >
                    {t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
              <div className="admin-search-bar">
                <input
                  id="admin-user-search"
                  type="text"
                  placeholder="Search users..."
                  className="form-input"
                  value={userSearch}
                  onChange={e => setUserSearch(e.target.value)}
                  style={{ padding: '8px 14px', fontSize: 14 }}
                />
              </div>
              <button className="btn-primary" id="add-user-btn" style={{ flexShrink: 0, padding: '8px 16px', fontSize: 14 }}>
                + Add New User
              </button>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table" id="admin-users-table">
                <thead>
                  <tr>
                    <th>Name / Email</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u, i) => (
                    <tr key={i} id={`user-row-${i}`}>
                      <td>
                        <div className="table-user">
                          <div className="table-avatar">{u.name.charAt(0)}</div>
                          <div>
                            <div className="table-name">{u.name}</div>
                            <div className="table-email">{u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td><span className={`badge badge-${u.type === 'Buyer' ? 'success' : 'warning'}`}>{u.type}</span></td>
                      <td className="table-muted">{u.date}</td>
                      <td><span className={`badge badge-${u.status === 'active' ? 'success' : 'danger'}`}>{u.status}</span></td>
                      <td>
                        <div className="table-actions">
                          <button className="table-action-btn" id={`edit-user-${i}`} title="Edit">✏️</button>
                          <button className="table-action-btn danger" id={`delete-user-${i}`} title="Delete">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-pagination" id="users-pagination">
              {[1,2,3,4].map(n => (
                <button key={n} className={`page-btn ${n === 1 ? 'active' : ''}`} id={`users-page-${n}`}>{n}</button>
              ))}
            </div>
          </div>
        )}

        {/* ===== PRODUCTS SECTION ===== */}
        {activeSection === 'products' && (
          <div className="admin-section page-enter" id="admin-products-section">
            <div className="admin-section-toolbar">
              <input
                id="admin-product-search"
                type="text"
                placeholder="Search products..."
                className="form-input"
                style={{ padding: '8px 14px', fontSize: 14, flex: 1 }}
              />
              <button className="btn-primary" id="add-product-btn" style={{ flexShrink: 0, padding: '8px 16px', fontSize: 14 }}>
                + Add Product
              </button>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table" id="admin-products-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Seller</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map((p, i) => (
                    <tr key={i} id={`product-row-${i}`}>
                      <td className="table-name">{p.name}</td>
                      <td className="table-muted">{p.category}</td>
                      <td>${p.price.toLocaleString()}</td>
                      <td className="table-muted">{p.seller}</td>
                      <td><span className={`badge badge-${p.status === 'active' ? 'success' : 'warning'}`}>{p.status}</span></td>
                      <td>
                        <div className="table-actions">
                          <button className="table-action-btn" id={`approve-product-${i}`} title="Approve">✅</button>
                          <button className="table-action-btn" id={`edit-product-${i}`} title="Edit">✏️</button>
                          <button className="table-action-btn danger" id={`delete-product-${i}`} title="Delete">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ===== COMPLAINTS SECTION ===== */}
        {activeSection === 'complaints' && (
          <div className="admin-section page-enter" id="admin-complaints-section">
            <div className="admin-section-toolbar">
              <input
                id="admin-complaint-search"
                type="text"
                placeholder="Search complaints..."
                className="form-input"
                style={{ padding: '8px 14px', fontSize: 14, flex: 1 }}
              />
              <div className="complaint-status-filters">
                {['open', 'under review', 'reviewed'].map(s => (
                  <button key={s} className="user-type-btn" id={`complaint-filter-${s.replace(' ','-')}`}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table" id="admin-complaints-table">
                <thead>
                  <tr>
                    <th>Name / Email</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {complaintsData.map((c, i) => (
                    <tr key={i} id={`complaint-row-${i}`}>
                      <td>
                        <div className="table-user">
                          <div className="table-avatar">{c.name.charAt(0)}</div>
                          <div>
                            <div className="table-name">{c.name}</div>
                            <div className="table-email">{c.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>{c.subject}</td>
                      <td className="table-muted">{c.date}</td>
                      <td>
                        <span className={`badge badge-${c.status === 'open' ? 'danger' : c.status === 'under review' ? 'warning' : 'success'}`}>
                          {c.status}
                        </span>
                      </td>
                      <td>
                        <div className="table-actions">
                          <button className="table-action-btn" id={`view-complaint-${i}`} title="View">👁️</button>
                          <button className="table-action-btn" id={`resolve-complaint-${i}`} title="Resolve">✅</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-pagination" id="complaints-pagination">
              {[1,2,3,4].map(n => (
                <button key={n} className={`page-btn ${n === 1 ? 'active' : ''}`} id={`complaints-page-${n}`}>{n}</button>
              ))}
            </div>
          </div>
        )}

        {/* Admin Footer */}
        <footer className="admin-footer" id="admin-footer">
          <p>Indusconnect © 2026, All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
