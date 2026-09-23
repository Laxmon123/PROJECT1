import { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showLightbox, setShowLightbox] = useState(null)

  const projects = [
    { id: 1, title: 'E-Commerce Store', category: 'ecommerce', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop', tags: ['WordPress', 'WooCommerce', 'PHP'], description: 'Full-featured online store with payment integration', link: '#', color: '#4f46e5' },
    { id: 2, title: 'Business Website', category: 'website', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', tags: ['HTML/CSS', 'JavaScript', 'PHP'], description: 'Professional business website with contact form', link: '#', color: '#059669' },
    { id: 3, title: 'Portfolio Site', category: 'website', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop', tags: ['React', 'CSS3', 'API'], description: 'Modern portfolio with interactive elements', link: '#', color: '#dc2626' },
    { id: 4, title: 'Restaurant Website', category: 'website', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop', tags: ['WordPress', 'Custom Theme', 'PHP'], description: 'Food ordering and reservation system', link: '#', color: '#ea580c' },
    { id: 5, title: 'Blog Platform', category: 'webapp', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop', tags: ['Laravel', 'MySQL', 'Vue.js'], description: 'Blog platform with admin panel', link: '#', color: '#7c3aed' },
    { id: 6, title: 'Real Estate Portal', category: 'webapp', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop', tags: ['PHP', 'MySQL', 'JavaScript'], description: 'Property listing and search platform', link: '#', color: '#0891b2' },
    { id: 7, title: 'The Blog', category: 'website', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop', tags: ['WordPress', 'Custom Plugin', 'SEO'], description: 'Content-rich blog with custom features', link: '#', color: '#db2777' },
    { id: 8, title: 'Corporate Site', category: 'website', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', tags: ['HTML5', 'CSS3', 'jQuery'], description: 'Corporate website with animations', link: '#', color: '#ca8a04' },
  ]

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        <div className="portfolio-filters">
          {['all', 'website', 'ecommerce', 'webapp'].map(cat => (
            <button key={cat} className={`filter-btn ${activeFilter === cat ? 'active' : ''}`} onClick={() => setActiveFilter(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item" onClick={() => setShowLightbox(project)}>
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <span className="view-project">View Project</span>
                    {project.tags.map((tag, i) => <span key={i} className="overlay-tag">{tag}</span>)}
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                {project.tags.map((tag, i) => <span key={i} className="project-tag" style={{ backgroundColor: project.color + '20', color: project.color }}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showLightbox && (
        <div className="lightbox" onClick={() => setShowLightbox(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setShowLightbox(null)}>×</button>
            <img src={showLightbox.image} alt={showLightbox.title} className="lightbox-image" />
            <div className="lightbox-info">
              <h3>{showLightbox.title}</h3>
              <p>{showLightbox.description}</p>
              {showLightbox.tags.map((tag, i) => <span key={i} className="lightbox-tag">{tag}</span>)}
              <a href={showLightbox.link} className="btn btn-primary">View Live →</a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio