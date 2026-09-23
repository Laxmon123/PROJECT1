import { useState, useEffect } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('bio')
  const [visibleSkills, setVisibleSkills] = useState([])

  const skills = [
    { name: 'PHP', level: 92, icon: '🐘' },
    { name: 'WordPress', level: 96, icon: '🔵' },
    { name: 'JavaScript', level: 88, icon: '📜' },
    { name: 'HTML/CSS', level: 97, icon: '🌐' },
    { name: 'MySQL', level: 88, icon: '🗄️' },
    { name: 'Laravel', level: 82, icon: '⚡' },
    { name: 'jQuery', level: 88, icon: '💚' },
    { name: 'React', level: 78, icon: '⚛️' }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skills.map((_, i) => i))
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="about-content">
          <div className="about-image">
            <div className="about-img-wrapper">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face=1" alt="About Me" className="about-img" />
              <div className="about-img-overlay"></div>
            </div>
            <div className="about-quote">
              <p>Code is like humor. When you have to explain it, it's bad.</p>
              <span className="quote-author">- Cory House</span>
            </div>
          </div>

          <div className="about-text">
            <div className="about-tabs">
              <button className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`} onClick={() => setActiveTab('bio')}>
                <span>👤</span> Bio
              </button>
              <button className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
                <span>⚡</span> Skills
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'bio' && (
                <div className="bio-content">
                  <h3>Hello, I'm Laxmon!</h3>
                  <p>I'm a passionate Full Stack Developer with over 5 years of experience in web development. I specialize in PHP, WordPress, and modern web technologies.</p>
                  <p>My journey in web development started in 2016. Since then, I've worked on numerous projects ranging from simple websites to complex web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
                  <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through blog posts and tutorials.</p>
                  <div className="about-bio-stats">
                    <div className="bio-stat">
                      <div className="bio-stat-number">5+</div>
                      <div className="bio-stat-label">Years Experience</div>
                    </div>
                    <div className="bio-stat">
                      <div className="bio-stat-number">50+</div>
                      <div className="bio-stat-label">Projects</div>
                    </div>
                    <div className="bio-stat">
                      <div className="bio-stat-number">30+</div>
                      <div className="bio-stat-label">Happy Clients</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="skills-content">
                  <h3>Technical Skills</h3>
                  <p style={{ color: '#64748b', marginBottom: '25px' }}>Here are the technologies I work with daily:</p>
                  <div className="skills-list">
                    {skills.map((skill, i) => (
                      <div key={i} className="skill-item" style={{ opacity: visibleSkills.includes(i) ? 1 : 0, transform: visibleSkills.includes(i) ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.5s ease', transitionDelay: `${i * 100}ms` }}>
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: visibleSkills.includes(i) ? `${skill.level}%` : '0%' }}></div>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About