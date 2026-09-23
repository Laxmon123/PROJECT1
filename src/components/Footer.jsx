const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Laxmon.</h3>
            <p>Full Stack Developer & WordPress Expert</p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" title="GitHub">GH</a>
              <a href="#" className="footer-social-link" title="LinkedIn">in</a>
              <a href="#" className="footer-social-link" title="Twitter">𝕏</a>
              <a href="#" className="footer-social-link" title="Email">✉</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <h4>Services</h4>
              <ul>
                <li>Web Development</li>
                <li>WordPress Development</li>
                <li>PHP Development</li>
                <li>E-Commerce Solutions</li>
                <li>Website Maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Laxmon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer