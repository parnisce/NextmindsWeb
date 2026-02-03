import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from 'lucide-react'

import SEO from '../components/SEO'

const ContactPage = () => {
    return (
        <div className="contact-page" style={{ paddingTop: '140px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            <SEO
                title="Contact Us"
                description="Get in touch with Nextminds Business Solutions. Let's discuss your next project in AI, web development, or media production."
            />
            <section className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="service-tag" style={{ margin: '0 auto 1.5rem', background: 'var(--primary)15', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', width: 'fit-content' }}>Get In Touch</div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
                        Let's Start a <span className="gradient-text">Conversation</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                        Whether you have a specific AI use case or need a full digital transformation, our team is ready to help you thrive.
                    </p>
                </div>

                <div className="contact-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '4rem',
                    marginBottom: '100px'
                }}>
                    {/* Left: Contact Info */}
                    <div className="contact-info-column" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '3rem' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Contact Details</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '55px', height: '55px', borderRadius: '1.2rem', background: 'var(--primary)15', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--primary)30' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.3rem' }}>Email Us</div>
                                        <div style={{ color: 'var(--text-muted)' }}>info@nextminds.com</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Response within 24 hours</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '55px', height: '55px', borderRadius: '1.2rem', background: 'var(--primary)15', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--primary)30' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.3rem' }}>Call Our Office</div>
                                        <div style={{ color: 'var(--text-muted)' }}>(289) 690-1777</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mon - Fri, 9am - 5pm EST</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '55px', height: '55px', borderRadius: '1.2rem', background: 'var(--primary)15', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--primary)30' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.3rem' }}>Location</div>
                                        <div style={{ color: 'var(--text-muted)' }}>Thorold, ON, Canada</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Serving Niagara & GTA Agencies</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, rgba(29, 78, 99, 0.1), rgba(0, 184, 230, 0.05))' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                <MessageSquare size={20} style={{ color: 'var(--primary)' }} />
                                <h4 style={{ margin: 0 }}>Live Strategy Session</h4>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Prefer a face-to-face meet? Book a 15-minute discovery call to discuss your objectives.
                            </p>
                            <button className="btn-secondary" style={{ width: '100%', padding: '0.8rem', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                Check Availability <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-form-column glass" style={{ padding: '4rem' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontWeight: 700, fontSize: '0.95rem' }}>First Name</label>
                                    <input type="text" className="form-input" placeholder="Enter your first name" style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)' }} />
                                </div>
                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontWeight: 700, fontSize: '0.95rem' }}>Last Name</label>
                                    <input type="text" className="form-input" placeholder="Enter your last name" style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)' }} />
                                </div>
                            </div>

                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.95rem' }}>Company Email</label>
                                <input type="email" className="form-input" placeholder="email@company.com" style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)' }} />
                            </div>

                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.95rem' }}>Interested Service</label>
                                <select className="form-input" style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', appearance: 'auto' }}>
                                    <option>AI Agent Development</option>
                                    <option>Web Agency Services</option>
                                    <option>Real Estate Media</option>
                                    <option>Media Production</option>
                                    <option>Other / Custom Inquiry</option>
                                </select>
                            </div>

                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.95rem' }}>Message</label>
                                <textarea className="form-input" placeholder="Tell us about your project or goal..." style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', height: '160px', resize: 'none' }}></textarea>
                            </div>

                            <button type="submit" className="btn-primary" style={{ padding: '1.5rem', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                                Send Inquiry <ArrowRight size={22} />
                            </button>

                            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                By submitting this form, you agree to our privacy policy.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactPage
