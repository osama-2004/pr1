import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page page-enter">
      <div className="privacy-inner">
        <div className="privacy-header">
          <h1 id="privacy-title">Terms &amp; Privacy Policy</h1>
          <p>Last updated: May 2, 2026</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section" id="section-terms">
            <h2>Terms of Use</h2>
            <div className="privacy-box primary-box">
              <h3>Terms</h3>
              <p>
                By using IndusConnect, you agree to use the platform responsibly and professionally.
                IndusConnect is a B2B marketplace platform connecting buyers, suppliers, manufacturers,
                and traders. The platform is not responsible for the quality of goods traded between users
                but may apply a compliance framework. We reserve the right to remove content or users that
                violate our policies.
              </p>
            </div>
          </section>

          <section className="privacy-section" id="section-privacy">
            <h2>Privacy Policy</h2>
            <div className="privacy-box">
              <h3>Privacy Policy</h3>
              <p>
                We collect basic user information including name, email, and business details. This data is
                kept secure and will not be shared with third parties without your consent. By using the
                platform, you agree to our data practices.
              </p>
            </div>
          </section>

          <section className="privacy-section" id="section-data">
            <h2>Data Collection</h2>
            <p>We collect the following types of information:</p>
            <ul className="privacy-list">
              <li><strong>Account Information:</strong> Name, email address, company name, phone number</li>
              <li><strong>Business Information:</strong> Products listed, orders placed, RFQs submitted</li>
              <li><strong>Usage Data:</strong> Pages visited, search queries, time spent on platform</li>
              <li><strong>Payment Information:</strong> Transaction amounts (no card numbers stored)</li>
              <li><strong>Communications:</strong> Messages sent between buyers and suppliers</li>
            </ul>
          </section>

          <section className="privacy-section" id="section-rights">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="privacy-list">
              <li>Access and update your personal information at any time</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
          </section>

          <section className="privacy-section" id="section-cookies">
            <h2>Cookies</h2>
            <p>
              IndusConnect uses cookies to improve your browsing experience, analyze platform usage,
              and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="privacy-section" id="section-contact">
            <h2>Contact Us</h2>
            <p>
              For any privacy-related questions or requests, please contact our Data Protection Officer:
            </p>
            <div className="privacy-contact">
              <p><strong>Email:</strong> <a href="mailto:privacy@indusconnect.com" id="privacy-email">privacy@indusconnect.com</a></p>
              <p><strong>Address:</strong> IndusConnect HQ, 123 Industrial Avenue, Dubai, UAE</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
