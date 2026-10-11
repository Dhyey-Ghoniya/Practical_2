import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="page-card">
      <div className="page-header">
        <span className="page-badge">Controlled Components</span>
        <h1 className="page-title">Contact Form</h1>
        <p className="page-subtitle">Demonstrating controlled inputs and state synchronization.</p>
      </div>

      {submitted ? (
        <div className="success-banner">
          <h3>✅ Thank you, {formData.name}!</h3>
          <p>Your message has been successfully captured into local state.</p>
          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: '1rem' }}
            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
          >
            Submit Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ghoniya Dhyey"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. 24cs024@charusat.edu.in"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;