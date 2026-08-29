import React, { useState } from 'react';
import { submitLead } from '../../utils/submitLead';

const DEPARTMENTS = ['Research', 'Content & Editorial', 'Inside Sales', 'Training', 'Client Relations', 'B2B Sales', 'Operations'];

const CareerForm = () => {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const fd = new FormData(e.target);
    const experience = fd.get('user_experience') || '';
    const department = fd.get('user_department') || '';
    const city = fd.get('user_city') || '';
    const address = fd.get('user_address') || '';
    try {
      // Reuses the existing lead integration — no backend added.
      await submitLead({
        name: fd.get('user_name') || '',
        phone: fd.get('user_phone') || '',
        email: fd.get('user_email') || '',
        service: `Career Application${department ? ` — ${department}` : ''}`,
        message: `Experience: ${experience}\nDepartment: ${department}\nCity: ${city}\nAddress: ${address}`,
      });
    } catch (err) {
      console.error('submitLead error:', err);
    }
    e.target.reset();
    setSubmitting(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="es-contact-form__success" role="status">
        <p>Thank you for applying! Our team will review your details and revert soon.</p>
      </div>
    );
  }

  return (
    <form className="es-contact-form" onSubmit={handleSubmit} noValidate>
      <div className="es-contact-form__row">
        <div className="es-contact-form__field">
          <label htmlFor="ca-name" className="es-contact-form__label">Your Name</label>
          <input id="ca-name" type="text" name="user_name" required placeholder="Your full name" className="es-contact-form__input" />
        </div>
        <div className="es-contact-form__field">
          <label htmlFor="ca-email" className="es-contact-form__label">Your Email</label>
          <input id="ca-email" type="email" name="user_email" required placeholder="your@email.com" className="es-contact-form__input" />
        </div>
      </div>

      <div className="es-contact-form__row">
        <div className="es-contact-form__field">
          <label htmlFor="ca-phone" className="es-contact-form__label">Mobile Number</label>
          <input id="ca-phone" type="text" name="user_phone" required placeholder="+91 XXXXX XXXXX" className="es-contact-form__input" />
        </div>
        <div className="es-contact-form__field">
          <label htmlFor="ca-exp" className="es-contact-form__label">Work Experience</label>
          <input id="ca-exp" type="text" name="user_experience" required placeholder="e.g. 3 years" className="es-contact-form__input" />
        </div>
      </div>

      <div className="es-contact-form__row">
        <div className="es-contact-form__field">
          <label htmlFor="ca-dept" className="es-contact-form__label">Select Department</label>
          <select id="ca-dept" name="user_department" required className="es-contact-form__input">
            <option value="">Choose a department</option>
            {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div className="es-contact-form__field">
          <label htmlFor="ca-city" className="es-contact-form__label">City</label>
          <input id="ca-city" type="text" name="user_city" placeholder="Your city" className="es-contact-form__input" />
        </div>
      </div>

      <div className="es-contact-form__field es-contact-form__field--full">
        <label htmlFor="ca-address" className="es-contact-form__label">Type Your Address</label>
        <textarea id="ca-address" name="user_address" placeholder="Your address" className="es-contact-form__textarea" rows="3" />
      </div>

      <div className="es-contact-form__footer">
        <button type="submit" disabled={submitting} className="es-btn es-btn--primary es-contact-form__submit">
          {submitting ? 'Submitting\u2026' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default CareerForm;
