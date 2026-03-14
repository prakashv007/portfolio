import { useState } from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) {
            errs.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errs.email = 'Email is invalid';
        }
        if (!form.message.trim()) errs.message = 'Message is required';
        return errs;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: undefined });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        );
        window.open(`mailto:prakashvengatesan0119@gmail.com?subject=${subject}&body=${body}`, '_blank');
        setForm(initialForm);
    };

    return (
        <section id="contact" className="section section--alt">
            <Container>
                <SectionTitle
                    title="Contact"
                    subtitle="I am actively seeking Data Analyst internship and entry-level opportunities. Let's connect and build data-driven solutions."
                />
                <div className="contact__grid">
                    {/* Info side */}
                    <div>
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <p className="contact__info-text">
                            I'm always open to discussing new opportunities, interesting projects, or just having
                            a chat about tech and data.
                        </p>
                        <div className="contact__info-items">
                            <div className="contact__info-item">
                                <div className="contact__info-item-icon">📧</div>
                                <div>
                                    <strong>Email</strong>
                                    <br />
                                    <a href="mailto:prakashvengatesan0119@gmail.com" style={{ color: 'inherit' }}>
                                        prakashvengatesan0119@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact__info-item">
                                <div className="contact__info-item-icon">📍</div>
                                <div>
                                    <strong>Location</strong>
                                    <br />
                                    India
                                </div>
                            </div>
                            <div className="contact__info-item">
                                <div className="contact__info-item-icon">🔗</div>
                                <div>
                                    <strong>Socials</strong>
                                    <br />
                                    <a href="https://github.com/prakashv007" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>GitHub</a>
                                    {' · '}
                                    <a href="https://www.linkedin.com/in/prakash-v22" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form side */}
                    <form className="contact__form" onSubmit={handleSubmit} noValidate>


                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="contact-name">
                                Name
                            </label>
                            <input
                                id="contact-name"
                                className="contact__form-input"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                            />
                            {errors.name && <p className="contact__form-error">{errors.name}</p>}
                        </div>

                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="contact-email">
                                Email
                            </label>
                            <input
                                id="contact-email"
                                className="contact__form-input"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                            />
                            {errors.email && <p className="contact__form-error">{errors.email}</p>}
                        </div>

                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="contact-subject">
                                Subject
                            </label>
                            <input
                                id="contact-subject"
                                className="contact__form-input"
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject (optional)"
                            />
                        </div>

                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="contact-message">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                className="contact__form-textarea"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows="5"
                            />
                            {errors.message && <p className="contact__form-error">{errors.message}</p>}
                        </div>

                        <Button variant="primary" onClick={handleSubmit}>
                            Send Message
                        </Button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
