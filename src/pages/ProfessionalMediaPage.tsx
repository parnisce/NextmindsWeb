import { Link } from 'react-router-dom'
import {
    Camera,
    Mic2,
    BookOpen,
    ArrowRight,
    CheckCircle2,
    Users,
    Clapperboard,
    Sparkles,
    Play
} from 'lucide-react'

import SEO from '../components/SEO'

const ProfessionalMediaPage = () => {
    const services = [
        {
            title: "Photo & Video Portraiture",
            quote: "Capturing the authentic essence of your professional identity.",
            description: "From corporate headshots to personal branding videos, we create high-end visual portraits that communicate confidence and authority. Perfect for executives, entrepreneurs, and public figures.",
            features: ["On-location or Studio", "Expert Lighting Setup", "Professional Retouching", "Branding Consultation"],
            icon: <Camera size={30} />,
            image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Commercial Storytelling",
            quote: "High-impact narratives that elevate your brand voice.",
            description: "We produce high-quality commercials and brand documentaries that tell your story. Our team handles everything from scriptwriting and storyboarding to post-production and motion graphics.",
            features: ["Script Development", "Multi-camera Shoots", "Professional Scripting", "Cinematic Sound Design"],
            icon: <Clapperboard size={30} />,
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "E-Learning Platforms",
            quote: "Transforming knowledge into immersive digital experiences.",
            description: "Complete production solutions for online courses and educational content. We build professional-grade video modules combined with clear audio and clear visual aids for maximum retention.",
            features: ["Modular Course Structure", "Studio Quality Audio", "Interactive Graphics", "LMS Integration Advice"],
            icon: <BookOpen size={30} />,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Post-Production Excellence",
            quote: "Where raw footage becomes a polished masterpiece.",
            description: "Our dedicated editing suite handles color grading, sound mixing, and visual effects. We refine every frame to ensure your final product meets the highest industry standards.",
            features: ["Cinematic Color Grading", "Audio Noise Reduction", "Custom Visual Effects", "Fast Turnaround Time"],
            icon: <Sparkles size={30} />,
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200"
        }
    ]

    return (
        <div className="professional-media-page" style={{ paddingTop: '140px' }}>
            <SEO
                title="Professional Media Production"
                description="High-end visual storytelling, corporate portraiture, and e-learning content production. Cinematic quality since 2001."
            />
            <section className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="service-tag" style={{ margin: '0 auto 1.5rem', background: 'var(--primary)15', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', width: 'fit-content' }}>Premium Production Hub</div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
                        Professional <br />
                        <span className="gradient-text">Media Production</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '850px', margin: '0 auto' }}>
                        High-end visual storytelling and immersive educational content since 2001. We combine cinematic technology with strategic narratives to amplify your vision.
                    </p>
                </div>

                <div style={{ display: 'grid', gap: '4rem', marginBottom: '100px' }}>
                    {services.map((service, i) => (
                        <div key={i} className={`glass service-detail-card ${i % 2 !== 0 ? 'row-reverse' : ''}`} style={{
                            display: 'grid',
                            gridTemplateColumns: '1.1fr 1fr',
                            gap: '4rem',
                            padding: '3rem',
                            borderRadius: '3rem',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}>
                            <div className="card-visual glass" style={{
                                height: '450px',
                                borderRadius: '2rem',
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                <div className="visual-overlay" style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                                    borderRadius: '2rem'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    top: '2rem',
                                    right: '2rem',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '0.8rem',
                                    borderRadius: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Play size={24} fill="white" />
                                </div>
                            </div>
                            <div className="card-info">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ color: 'var(--accent)' }}>{service.icon}</div>
                                    <h2 style={{ fontSize: '2.5rem', margin: 0 }}>{service.title}</h2>
                                </div>
                                <p style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '2rem' }}>"{service.quote}"</p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>{service.description}</p>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '3rem' }}>
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600 }}>
                                            <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="btn-primary" style={{ width: 'fit-content' }}>
                                    Start Production Inquiry <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section style={{ padding: '100px 0', background: 'rgba(29, 78, 99, 0.03)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Trusted by Industry <span className="gradient-text">Experts & Brands</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '4rem' }}>
                            With over two decades in media production, our team brings Hollywood-calibre techniques to every project.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)' }}>2M+</div>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Combined Views</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)' }}>500+</div>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Commercial Projects</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)' }}>2001</div>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Registered Milestone</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section" style={{ padding: '120px 0' }}>
                <div className="container">
                    <div className="glass" style={{
                        padding: '6rem 4rem',
                        borderRadius: '4rem',
                        background: 'linear-gradient(135deg, rgba(29, 78, 99, 0.1), rgba(0, 184, 230, 0.1))',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>Have a <span className="gradient-text">Story to Tell?</span></h2>
                        <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
                            Whether it's a corporate project or an immersive course, we're ready to bring your vision to life with world-class quality.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                            <Link to="/contact" className="btn-primary" style={{ padding: '1.2rem 3rem' }}>
                                Book a Consultation <Mic2 size={20} />
                            </Link>
                            <Link to="/services" className="btn-secondary" style={{ padding: '1.2rem 3rem' }}>
                                <Users size={20} /> View Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .row-reverse {
                    direction: rtl;
                }
                .row-reverse .card-info {
                    direction: ltr;
                    text-align: left;
                }
                .row-reverse .card-visual {
                    direction: ltr;
                }

                @media (max-width: 1024px) {
                    .service-detail-card {
                        grid-template-columns: 1fr !important;
                        direction: ltr !important;
                        padding: 2rem !important;
                    }
                    .service-detail-card .card-visual {
                        height: 350px !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default ProfessionalMediaPage
