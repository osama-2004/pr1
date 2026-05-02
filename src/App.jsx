import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import RFQ from './pages/RFQ'
import Complaint from './pages/Complaint'
import AdminDashboard from './pages/AdminDashboard'
import ForgotPassword from './pages/ForgotPassword'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages - no navbar/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Admin - no regular footer */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        {/* Main pages with Navbar + Footer */}
        <Route path="/*" element={
          <div className="app-layout">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/rfq" element={<RFQ />} />
                <Route path="/complaint" element={<Complaint />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
