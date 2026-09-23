import { useState, useEffect } from 'react'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1526379095098-d4e7c9e55c2a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const calculateAgeDetails = (birthDate) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()
    if (days < 0) { months--; const p = new Date(today.getFullYear(), today.getMonth(), 0); days += p.getDate() }
    if (months < 0) { years--; months += 12 }
    const totalDays = Math.floor((today - birth) / 86400000)
    return { years, months, days, totalDays }
  }

  const handleAgeCalculate = (e) => {
    e.preventDefault()
    const bd = document.getElementById('birthDate').value
    if (bd) {
      const d = calculateAgeDetails(bd)
      const totalHours = d.totalDays * 24
      const totalMinutes = totalHours * 60
      document.getElementById('ageResult').innerHTML = `
        <div class="age-result-content">
          <h3>${d.years}</h3>
          <p>Years Old</p>
          <div class="age-details-grid">
            <div class="age-detail-item">
              <div class="detail-value">${d.months}</div>
              <div class="detail-label">Months</div>
            </div>
            <div class="age-detail-item">
              <div class="detail-value">${d.days}</div>
              <div class="detail-label">Days</div>
            </div>
            <div class="age-detail-item">
              <div class="detail-value">${d.totalDays.toLocaleString()}</div>
              <div class="detail-label">Total Days</div>
            </div>
          </div>
        </div>
      `
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="badge-dot"></span>Available for Freelance Work</div>
            <h1 className="hero-title">Hi, I'm<br /><span className="highlight-text">Laxmon</span></h1>
            <p className="hero-role">Full Stack Developer</p>
            <p className="hero-description">I'm a PHP & WordPress Developer. I help businesses bring their ideas to life.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Hire Me →</a>
              <a href="#portfolio" className="btn btn-secondary">View My Work →</a>
            </div>
            <div className="hero-social">
              <a href="#" className="social-link github" title="GitHub"><span>GH</span></a>
              <a href="#" className="social-link linkedin" title="LinkedIn"><span>in</span></a>
              <a href="#" className="social-link twitter" title="Twitter"><span>𝕏</span></a>
              <a href="#" className="social-link email" title="Email"><span>✉</span></a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-frame">
              <img src={images[currentImageIndex]} alt="Developer" className="hero-img" />
              <div className="image-overlay"></div>
            </div>
            <div className="image-indicators">
              {images.map((_, i) => <span key={i} className={`indicator ${i === currentImageIndex ? 'active' : ''}`} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="age-calculator-section">
        <div className="container">
          <div className="age-calculator-card">
            <div className="age-calculator-header">
              <h2>Age Calculator</h2>
              <p>Enter your birth date to calculate your exact age</p>
            </div>
            <form onSubmit={handleAgeCalculate} className="age-form">
              <input type="date" id="birthDate" className="age-input" required />
              <button type="submit" className="btn btn-primary">Calculate Age</button>
            </form>
            <div id="ageResult" className="age-result"></div>
          </div>
        </div>
      </div>
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">💼</div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">✅</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">😊</div>
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator"><div className="mouse"><div className="wheel"></div></div></div>
    </section>
  )
}

export default Home