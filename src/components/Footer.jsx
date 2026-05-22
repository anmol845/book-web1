import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Contact Info</h2>

          <p>
            
            <a href="tel:+918554687850" className="footer-link-text">
              (+91) 8554687850
            </a>
          </p>

          <p>
         
            <a
              href="mailto:Support@bookbins.in"
              className="footer-link-text"
            >
              Support@bookbins.in
            </a>
          </p>

          <p>
            SF 66, Platinum Plaza,<br />
            Navjivan Mill Compound,<br />
            Kalol, Gandhinagar, Gujarat
          </p>
          <div className="social-icons">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              IG
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              FB
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              YT
            </a>

          </div>
        </div>
        <div className="footer-section">
          <h2>Help Center</h2>

          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/publish">Publish With Us</a></li>
            <li><a href="/launch">Launch With Us</a></li>
            <li><a href="/promote">Promote With Us</a></li>
            <li><a href="/bulk-orders">Bulk Order Inquiries</a></li>
            <li><a href="/blogs">Our Blogs</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Our Policies</h2>

          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/shipping-policy">Shipping Policy</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/user-protection">User Protection</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Newsletter</h2>

          <p className="newsletter-text">
            Get latest book updates, offers and author stories.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed Successfully!");
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
            />

            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        Copyright © 2026 Bookbins Pvt Ltd. All rights reserved.
      </div>

    </footer>
  );
}