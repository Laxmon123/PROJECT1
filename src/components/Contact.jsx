import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'laxmon@example.com', href: 'mailto:laxmon@example.com' },
    { icon: '📱', label: 'Phone', value: '+1 234 567 8900', href: 'tel:+12345678900' },
    { icon: '📍', label: 'Location', value: 'New York, USA', href: '#' },
  ]

  const socialLinks = [
    { icon: 'GH', name: 'GitHub', href: '#' },
    { icon: 'in', name: 'LinkedIn', href: '#' },
    { icon: '𝕏', name: 'Twitter', href: '#' },
    { icon: 'YT', name: 'YouTube', href: '#' },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's talk!</p>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3>Let's connect</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            
            <div className="contact-details">
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} className="contact-item">
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-social">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="social-link-item" title={social.name}>
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact