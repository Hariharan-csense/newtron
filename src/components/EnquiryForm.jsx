import { useState } from 'react';
import { colors, fonts } from '../styles/theme';

const SERVICE_OPTIONS = [
  'Contingency Hiring',
  'Executive Search',
  // 'Volume Hiring',
  // 'Recruitment Process Outsourcing (RPO)',
  // 'Blue-Collar Staffing',
  // 'Talent Mapping & Advisory',
  // 'Careers at Newtron',
];

const INITIAL_FORM = { name: '', company: '', email: '', phone: '', service: '', teamSize: '', urgency: '', message: '' };
const ACCESS_KEY = '036d1200-1e03-4ea3-bd5b-5e5805e5ead3';

const Field = ({ label, children, required }) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display: 'block', marginBottom: 8, fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 'bold', color: '#333' }}>
      {label} {required && <span style={{ color: 'red' }}>*</span>}
    </label>
    {children}
  </div>
);

export default function EnquiryForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    // Clear field error when user starts typing
    if (fieldErrors[key]) {
      setFieldErrors((prev) => ({ ...prev, [key]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.company.trim()) errors.company = 'Company name is required';
    if (!form.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(form.phone) || form.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!form.service) errors.service = 'Please select a service';
    if (!form.teamSize) errors.teamSize = 'Please select team size';
    if (!form.urgency) errors.urgency = 'Please select urgency';
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (submitting) return;
    
    // Validate form before submission
    if (!validateForm()) {
      setError('Please fill in all required fields correctly.');
      return;
    }
    
    setError('');
    setSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'Newtron Website Contact Enquiry',
          from_name: 'Newtron Contact Form',
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          service: form.service,
          team_size: form.teamSize,
          urgency: form.urgency,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      setSubmitted(true);
      setForm(INITIAL_FORM);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (e) {
      setError('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 8, padding: 24, width: '100%', margin: '0 auto' }}>
      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, alignItems: 'start' }}>
        <Field label="Your Name" required>
          <input type="text" placeholder="Rajesh Kumar" value={form.name} onChange={set('name')} style={{ fontSize: 16, padding: 16, fontFamily: 'Inter, sans-serif', border: fieldErrors.name ? '1px solid #d11a2a' : '1px solid #e5e7eb', borderRadius: 8, width: '100%', backgroundColor: '#f9fafb', outline: 'none', transition: 'border-color 0.2s' }} />
          {fieldErrors.name && <p style={{ color: '#d11a2a', fontSize: 12, marginTop: 4, margin: 0 }}>{fieldErrors.name}</p>}
        </Field>
        <Field label="Company Name" required>
          <input type="text" placeholder="Acme Pvt. Ltd." value={form.company} onChange={set('company')} style={{ fontSize: 16, padding: 16, fontFamily: 'Inter, sans-serif', border: fieldErrors.company ? '1px solid #d11a2a' : '1px solid #e5e7eb', borderRadius: 8, width: '100%', backgroundColor: '#f9fafb', outline: 'none', transition: 'border-color 0.2s' }} />
          {fieldErrors.company && <p style={{ color: '#d11a2a', fontSize: 12, marginTop: 4, margin: 0 }}>{fieldErrors.company}</p>}
        </Field>
      </div>

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, alignItems: 'start' }}>
        <Field label="Work Email" required>
          <input type="email" placeholder="raj@acme.com" value={form.email} onChange={set('email')} style={{ fontSize: 16, padding: 16, fontFamily: 'Inter, sans-serif', border: fieldErrors.email ? '1px solid #d11a2a' : '1px solid #e5e7eb', borderRadius: 8, width: '100%', backgroundColor: '#f9fafb', outline: 'none', transition: 'border-color 0.2s' }} />
          {fieldErrors.email && <p style={{ color: '#d11a2a', fontSize: 12, marginTop: 4, margin: 0 }}>{fieldErrors.email}</p>}
        </Field>
        <Field label="Phone" required>
          <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} style={{ fontSize: 16, padding: 16, fontFamily: 'Inter, sans-serif', border: fieldErrors.phone ? '1px solid #d11a2a' : '1px solid #e5e7eb', borderRadius: 8, width: '100%', backgroundColor: '#f9fafb', outline: 'none', transition: 'border-color 0.2s' }} />
          {fieldErrors.phone && <p style={{ color: '#d11a2a', fontSize: 12, marginTop: 4, margin: 0 }}>{fieldErrors.phone}</p>}
        </Field>
      </div>

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, alignItems: 'start' }}>
        <Field label="What Are You Looking For?" required>
          <select value={form.service} onChange={set('service')} style={{ fontSize: 16, padding: 16, fontFamily: 'Inter, sans-serif', border: fieldErrors.service ? '1px solid #d11a2a' : '1px solid #e5e7eb', borderRadius: 8, width: '100%', backgroundColor: '#f9fafb', outline: 'none', transition: 'border-color 0.2s' }}>
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
          {fieldErrors.service && <p style={{ color: '#d11a2a', fontSize: 12, marginTop: 4, margin: 0 }}>{fieldErrors.service}</p>}
        </Field>
        <Field label="Team Size" required>
          <select value={form.teamSize} onChange={set('teamSize')} style={{ fontSize: 16, padding: 16, fontFamily: 'Inter, sans-serif', border: fieldErrors.teamSize ? '1px solid #d11a2a' : '1px solid #e5e7eb', borderRadius: 8, width: '100%', backgroundColor: '#f9fafb', outline: 'none', transition: 'border-color 0.2s' }}>
            {['1-20 employees', '21-100 employees', '101-500 employees', '500+ employees'].map((o) => <option key={o}>{o}</option>)}
          </select>
          {fieldErrors.teamSize && <p style={{ color: '#d11a2a', fontSize: 12, marginTop: 4, margin: 0 }}>{fieldErrors.teamSize}</p>}
        </Field>
      </div>

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, alignItems: 'start' }}>
        <Field label="Urgency" required>
          <select value={form.urgency} onChange={set('urgency')} style={{ fontSize: 16, padding: 16, fontFamily: 'Inter, sans-serif', border: fieldErrors.urgency ? '1px solid #d11a2a' : '1px solid #e5e7eb', borderRadius: 8, width: '100%', backgroundColor: '#f9fafb', outline: 'none', transition: 'border-color 0.2s' }}>
            {['Within 2 weeks', 'Within a month', '1-3 months', 'Planning ahead'].map((o) => <option key={o}>{o}</option>)}
          </select>
          {fieldErrors.urgency && <p style={{ color: '#d11a2a', fontSize: 12, marginTop: 4, margin: 0 }}>{fieldErrors.urgency}</p>}
        </Field>
        <div></div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>

      <Field label="Tell Us More">
        <textarea
          placeholder="Describe your hiring challenge..."
          value={form.message}
          onChange={set('message')}
          rows={4}
          style={{ fontSize: 16, padding: 16, fontFamily: 'Inter, sans-serif', border: '1px solid #e5e7eb', borderRadius: 8, resize: 'vertical', width: '100%', backgroundColor: '#f9fafb', outline: 'none', transition: 'border-color 0.2s' }}
        />
      </Field>

      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          maxWidth: 240,
          background: submitted ? '#00c080' : colors.electric,
          color: colors.black,
          padding: 14,
          fontFamily: fonts.body,
          fontSize: 16,
          letterSpacing: 0,
          fontWeight: 600,
          border: 'none',
          cursor: submitting ? 'not-allowed' : 'pointer',
          borderRadius: 2,
          transition: 'all .2s',
          marginTop: 8,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          opacity: submitting ? 0.85 : 1,
        }}
        disabled={submitting}
      >
        {submitting ? 'SENDING...' : submitted ? 'ENQUIRY SENT' : 'Send Message'}
      </button>

      {error ? (
        <p style={{ fontFamily: 'Times New Roman, serif', fontSize: 12, color: '#d11a2a', textAlign: 'center', marginTop: 16, letterSpacing: 1 }}>
          {error}
        </p>
      ) : null}

     
    </div>
  );
}
