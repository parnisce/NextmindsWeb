import { Link } from 'react-router-dom'
import {
    Brain,
    Code,
    Home,
    Video,
    ChevronRight,
    ArrowRight
} from 'lucide-react'

import SEO from '../components/SEO'

const ServicesPage = () => {
    const allServices = [
        {
            title: "AI Agents Development",
            icon: <Brain size={48} />,
            description: "Custom AI agents tailored to your business operations. Our AI-tool trained experts automate complex tasks and generate unique content, with a dedicated quality assurance team reviewing every result.",
            features: ["Custom AI Agent Training", "Automated Task Management", "AI Content Strategy", "Performance Optimization"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            accent: "#00b8e6",
            link: "/ai-services",
            btnText: "Explore AI Solutions",
            isAnchor: false
        },
        {
            title: "Digital Agency Services",
            icon: <Code size={48} />,
            description: "Over 20 years of expertise in web design, full-stack development, and digital marketing. We take the time to understand your unique objectives and develop customized strategies for your brand.",
            features: ["Expert Web Design", "Full-stack Development", "E-commerce Solutions", "Digital Marketing Strategy"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            accent: "#1d4e63",
            link: "/digital-agency",
            btnText: "Explore Agency Services",
            isAnchor: false
        },
        {
            title: "Real Estate Media",
            icon: <Home size={48} />,
            description: "Cinematic property tours and HDR photography that elevate your listings. Immersive Matterport 3D walkthroughs and professional drone aerial media.",
            features: ["Cinematic Video Tours", "HDR Photography", "Matterport 3D Tours", "Drone Aerial Media"],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
            accent: "#00b8e6",
            link: "/real-estate-media",
            btnText: "Explore Real Estate Media",
            isAnchor: false
        },
        {
            title: "Professional Media Production",
            icon: <Video size={48} />,
            description: "Specialized photo and video portraiture, commercial storytelling, and immersive e-learning platforms. We provide high-quality media for brands and individuals.",
            features: ["Photo & Video Portraiture", "Commercial Storytelling", "E-Learning Platforms", "Professional Editing"],
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
            accent: "#1d4e63",
            link: "/professional-media",
            btnText: "Explore Production Services",
            isAnchor: false
        }
    ]

    return (
        <div className="services-page" style={{ paddingTop: '120px', position: 'relative', overflow: 'hidden' }}>
            <SEO
                title="Our Expertise"
                description="Explore Nextminds' full range of services including AI Agent Development, Digital Marketing, Real Estate Media, and Professional Production."
            />
            <section className="services-hero">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem' }}>
                            Our <span className="gradient-text">Expertise</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '850px', margin: '0 auto', lineHeight: 1.6 }}>
                            Nextminds offers a unique blend of <strong>AI technology</strong> and <strong>human quality assurance</strong> to provide the best possible products and services for your thriving enterprise.
                        </p>
                    </div>
                </div>
            </section>

            <section className="services-list" style={{ padding: '40px 0 100px' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                        {allServices.map((service, i) => (
                            <div key={i} className="service-detail-row" style={{
                                display: 'grid',
                                gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                                gap: '5rem',
                                alignItems: 'center'
                            }}>
                                {i % 2 === 0 ? (
                                    <>
                                        <div className="glass overflow-hidden" style={{ height: '550px' }}>
                                            <div style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${service.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}></div>
                                        </div>
                                        <div className="service-info">
                                            <div className="service-icon" style={{
                                                width: '90px',
                                                height: '90px',
                                                background: `${service.accent}15`,
                                                color: service.accent,
                                                borderRadius: '1.8rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '2.5rem'
                                            }}>
                                                {service.icon}
                                            </div>
                                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.1 }}>{service.title}</h2>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>{service.description}</p>
                                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '3rem' }}>
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: 600 }}>
                                                        <ChevronRight size={20} style={{ color: service.accent }} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            {service.isAnchor ? (
                                                <a href={service.link} className="btn-primary" style={{ width: 'fit-content' }}>
                                                    {service.btnText} <ArrowRight size={20} />
                                                </a>
                                            ) : (
                                                <Link to={service.link} className="btn-primary" style={{ width: 'fit-content' }}>
                                                    {service.btnText} <ArrowRight size={20} />
                                                </Link>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="service-info">
                                            <div className="service-icon" style={{
                                                width: '90px',
                                                height: '90px',
                                                background: `${service.accent}15`,
                                                color: service.accent,
                                                borderRadius: '1.8rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '2.5rem'
                                            }}>
                                                {service.icon}
                                            </div>
                                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.1 }}>{service.title}</h2>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>{service.description}</p>
                                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '3rem' }}>
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: 600 }}>
                                                        <ChevronRight size={20} style={{ color: service.accent }} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            {service.isAnchor ? (
                                                <a href={service.link} className="btn-primary" style={{ width: 'fit-content' }}>
                                                    {service.btnText} <ArrowRight size={20} />
                                                </a>
                                            ) : (
                                                <Link to={service.link} className="btn-primary" style={{ width: 'fit-content' }}>
                                                    {service.btnText} <ArrowRight size={20} />
                                                </Link>
                                            )}
                                        </div>
                                        <div className="glass overflow-hidden" style={{ height: '550px' }}>
                                            <div style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${service.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}></div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section" style={{ padding: '120px 0' }}>
                <div className="container">
                    <div className="glass" style={{
                        padding: '5rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(29, 78, 99, 0.1), rgba(0, 184, 230, 0.1))',
                    }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Ready to <span className="gradient-text">Elevate</span> Your Operations?</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3.5rem', maxWidth: '700px', margin: '0 auto' }}>
                            Experience the balance of cutting-edge technology and human expertise. Let us help you unlock your full potential.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                            <button className="btn-primary" style={{ padding: '1.2rem 3.5rem' }}>Book a Strategy Session</button>
                            <Link to="/#contact" className="btn-secondary" style={{ padding: '1.2rem 3.5rem' }}>View Portfolio</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ServicesPage
