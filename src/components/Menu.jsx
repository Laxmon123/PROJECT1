import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleTheme, isDarkMode } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '⚙️' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'portfolio', label: 'Portfolio', icon: '📁' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ]

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <Link to="home" smooth={true} duration={800} spy={true} activeClass="active" className="logo" onClick={scrollToTop}>
            <span className="logo-text">Laxmon</span>
            <span className="logo-highlight">.</span>
          </Link>

          <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link to={item.id} smooth={true} duration={800} spy={true} activeClass="active" className="nav-link" onClick={closeMobileMenu}>
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="actions">
            <button onClick={toggleTheme} className="icon-button">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu