import { Link } from 'react-scroll'

const Services = () => {
  const services = [
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Custom online stores with payment gateways, inventory management, and seamless shopping experience.',
      features: ['WooCommerce', 'Shopify', 'Magento', 'Custom Solutions']
    },
    {
      icon: '🔧',
      title: 'WordPress Development',
      description: 'Custom themes, plugins, and full WordPress solutions tailored to your business needs.',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Speed Optimization']
    },
    {
      icon: '⚡',
      title: 'PHP Development',
      description: 'Robust backend solutions with clean, maintainable PHP code for web applications.',
      features: ['Laravel', 'CodeIgniter', 'Custom APIs', 'Database Design']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-friendly interfaces with modern design trends that engage your audience.',
      features: ['Wireframing', 'Prototyping', 'Responsive Design', 'User Testing']
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks great on all devices.',
      features: ['Mobile-First', 'Cross-Browser', 'Touch Optimization', 'Fast Loading']
    },
    {
      icon: '🔒',
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, security patches, and performance monitoring.',
      features: ['Security Updates', 'Backup & Restore', 'Performance Monitoring', 'Content Updates']
    }
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">Comprehensive web solutions to help your business grow online</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Need a custom solution?</h3>
          <p>Let's discuss your project requirements</p>
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
        </div>
      </div>
    </section>
  )
}

export default Services