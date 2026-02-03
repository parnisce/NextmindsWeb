import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    Play,
    Brain,
    Code,
    Home,
    Video,
    Mail,
    Phone,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Quote
} from 'lucide-react'

import SEO from '../components/SEO'

const HomePage = () => {
    const services = [
        {
            title: "AI Agent Development",
            icon: <Brain size={32} />,
            image: "/ai-service.png",
            description: "Custom AI agents trained on your business DNA. We automate complex tasks, generate unique content, and provide real-time business intelligence.",
            accent: "#00b8e6",
            link: "/ai-services"
        },
        {
            title: "Full-Stack Web Agency",
            icon: <Code size={32} />,
            image: "/web-agency.png",
            description: "Expert web design, development, and digital marketing. Elevating your brand's online image with a unique digital experience since 2001.",
            accent: "#1d4e63",
            link: "/digital-agency"
        },
        {
            title: "Real Estate Media",
            icon: <Home size={32} />,
            image: "/real-estate.png",
            description: "High-end cinematic property tours, HDR photography, and Matterport 3D walkthroughs that sell listings 30% faster.",
            accent: "#00b8e6",
            link: "/real-estate-media"
        },
        {
            title: "Professional Media Production",
            icon: <Video size={32} />,
            image: "/media-production.png",
            description: "Photo and video portraiture, commercial storytelling, and immersive e-learning platforms for the modern age.",
            accent: "#1d4e63",
            link: "/professional-media"
        }
    ]

    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Marketing Director @ TechFlow",
            text: "Nextminds transformed our lead generation process. Their AI agents are more accurate than any humans we've hired, and the integration was seamless.",
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            role: "Founder of Urban Real Estate",
            text: "The cinematic property tours they produced for our luxury listings were game-changers. We sold three properties within a week of posting the videos.",
            avatar: "MC"
        },
        {
            name: "Elena Rodriguez",
            role: "CEO of Visionary Media",
            text: "20 years of experience really shows. Their strategic approach to our digital transformation saved us months of trial and error.",
            avatar: "ER"
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="homepage-original" >
            <SEO
                title="Unlock Digital Success"
                description="Nextminds Business Solutions bridge the gap between AI and human logic. Expert web design, development, and custom AI agent solutions."
            />
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: -1,
                            opacity: 0.4
                        }}
                    >
                        <source src="/ai-digital-background-2026-01-28-03-08-33-utc.mov" type="video/quicktime" />
                        <source src="/ai-digital-background-2026-01-28-03-08-33-utc.mov" type="video/mp4" />
                    </video>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at center, transparent, var(--bg-dark)), rgba(10, 11, 16, 0.4)',
                        zIndex: 0
                    }}></div>
                </div>
                <div className="container">
                    <div className="hero-content animate-fade-in" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <div className="service-tag" style={{ margin: '0 auto 1.5rem', background: 'var(--primary)15', color: 'var(--primary)' }}>Empowering Prosperity Since 2001</div>
                        <h1 className="hero-title" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Unlock your Business Potential with <span className="gradient-text">Next-Gen Intelligence</span>
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem' }}>
                            Nextminds bridge the gap between AI and regular human logic. We build the future of digital presence with 20+ years of proven expertise.
                        </p>
                        <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Start Your Journey <ArrowRight size={20} />
                            </button>
                            <button className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', background: 'transparent', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Play size={20} /> View Our Work
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Social Proof */}
            <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>20+</div>
                            <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Years Excellence</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent)' }}>1,000+</div>
                            <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Projects Delivered</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>24/7</div>
                            <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>AI Performance</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Core <span className="gradient-text">Competencies</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            From custom AI development to high-end media production, we provide full-spectrum digital acceleration.
                        </p>
                    </div>

                    {/* Featured AI Service (1 Column) */}
                    <div className="featured-service-row animate-fade-in" style={{ marginBottom: '3rem' }}>
                        <div className="service-card glass featured" style={{
                            padding: '4rem',
                            borderRadius: '3rem',
                            display: 'grid',
                            gridTemplateColumns: '1.2fr 1fr',
                            gap: '5rem',
                            alignItems: 'center',
                            background: 'linear-gradient(135deg, rgba(29, 78, 99, 0.05), rgba(255, 107, 0, 0.05))',
                            border: '1px solid var(--border)',
                            overflow: 'hidden'
                        }}>
                            <div className="service-visual glass" style={{
                                height: '400px',
                                width: '100%',
                                borderRadius: '2.5rem',
                                backgroundImage: `url(${services[0].image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '1px solid var(--border)'
                            }}></div>
                            <div className="service-info">
                                <div className="service-tag" style={{
                                    display: 'inline-block',
                                    padding: '0.5rem 1rem',
                                    background: 'var(--primary)15',
                                    color: 'var(--primary)',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    textTransform: 'uppercase'
                                }}>Flagship Intelligence</div>
                                <h3 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{services[0].title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>{services[0].description}</p>
                                <Link to={services[0].link} className="btn-primary" style={{ width: 'fit-content' }}>
                                    Learn About AI Agents <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="services-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2.5rem'
                    }}>
                        {services.slice(1).map((service, i) => (
                            <div key={i} className="service-card glass animate-fade-in" style={{
                                borderRadius: '2.5rem',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                animationDelay: `${0.1 * (i + 1)}s`,
                                overflow: 'hidden'
                            }}>
                                <div className="service-image" style={{
                                    backgroundImage: `url(${service.image})`,
                                    height: '220px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>
                                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                                    <div className="service-icon" style={{
                                        width: '60px',
                                        height: '60px',
                                        background: `${service.accent}15`,
                                        color: service.accent,
                                        borderRadius: '1.2rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {service.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.7rem' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{service.description}</p>
                                    <Link to={service.link} className="btn-secondary" style={{
                                        marginTop: 'auto',
                                        padding: '1rem 1.8rem',
                                        fontSize: '1rem',
                                        justifyContent: 'center',
                                        borderRadius: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        Explore <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Slider */}
            <section style={{ padding: '100px 0', background: 'rgba(29, 78, 99, 0.02)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="service-tag" style={{ margin: '0 auto 1rem', background: 'var(--primary)15', color: 'var(--primary)' }}>Testimonials</div>
                        <h2 style={{ fontSize: '3rem' }}>Client <span className="gradient-text">Success Stories</span></h2>
                    </div>

                    <div className="testimonials-slider">
                        <div className="slider-wrapper">
                            <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {testimonials.map((t, i) => (
                                    <div key={i} className="slider-slide">
                                        <div className="glass" style={{ padding: '4rem', borderRadius: '3rem', position: 'relative' }}>
                                            <Quote size={60} style={{ position: 'absolute', top: '2rem', right: '3rem', opacity: 0.1, color: 'var(--primary)' }} />
                                            <p style={{ fontSize: '1.8rem', lineHeight: 1.6, marginBottom: '3rem', fontStyle: 'italic', fontWeight: 500 }}>
                                                "{t.text}"
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                                <div style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.5rem',
                                                    fontWeight: 900,
                                                    color: 'white'
                                                }}>
                                                    {t.avatar}
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t.name}</div>
                                                    <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="slider-nav">
                            <button onClick={prevSlide} className="slider-arrow">
                                <ChevronLeft size={24} />
                            </button>
                            <div style={{ display: 'flex', gap: '0.8rem' }}>
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`nav-dot ${currentSlide === i ? 'active' : ''}`}
                                    ></button>
                                ))}
                            </div>
                            <button onClick={nextSlide} className="slider-arrow">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="contact-card glass" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '5rem',
                        padding: '5rem',
                        borderRadius: '4rem'
                    }}>
                        <div className="contact-left">
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>Let's Build Your <br /> <span className="gradient-text">Future Together.</span></h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3.5rem' }}>
                                Reach out to discuss your custom AI needs or multimedia production project.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: 'var(--primary)15', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800 }}>Email Our Team</div>
                                        <div style={{ color: 'var(--text-muted)' }}>info@nextminds.com</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: 'var(--primary)15', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800 }}>Call Our Office</div>
                                        <div style={{ color: 'var(--text-muted)' }}>(289) 690-1777</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: 'var(--primary)15', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800 }}>Primary Location</div>
                                        <div style={{ color: 'var(--text-muted)' }}>Thorold, ON, Canada</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-right">
                            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div className="form-group">
                                        <label style={{ fontWeight: 700, marginBottom: '0.8rem', display: 'block' }}>Name</label>
                                        <input type="text" className="form-input" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: 700, marginBottom: '0.8rem', display: 'block' }}>Email</label>
                                        <input type="email" className="form-input" placeholder="email@company.com" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 700, marginBottom: '0.8rem', display: 'block' }}>Service</label>
                                    <select className="form-input" style={{ appearance: 'auto' }}>
                                        <option>AI Services</option>
                                        <option>Web Agency</option>
                                        <option>Real Estate</option>
                                        <option>Media Production</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 700, marginBottom: '0.8rem', display: 'block' }}>How can we help?</label>
                                    <textarea className="form-input" placeholder="Tell us about your project..." style={{ height: '150px', resize: 'none' }}></textarea>
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }}>
                                    Send Inquiry <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomePage
