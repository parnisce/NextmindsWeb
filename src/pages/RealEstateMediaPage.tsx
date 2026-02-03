import { Link } from 'react-router-dom'
import {
    Camera,
    Video,
    Box,
    Home,
    Plane,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Users,
    Maximize2
} from 'lucide-react'

import SEO from '../components/SEO'

const RealEstateMediaPage = () => {
    const services = [
        {
            title: "Cinematic Video Tours",
            quote: "Storytelling that sells the lifestyle, not just the square footage.",
            description: "Our high-definition cinematic tours used stabilized 4K footage combined with professional color grading and music selection to create an emotional connection with potential buyers.",
            features: ["4K Stabilized Footage", "Brand Intro/Outro", "Professional Color Grading", "Licensed Music"],
            icon: <Video size={30} />,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "HDR Property Photography",
            quote: "Flawless lighting and composition in every frame.",
            description: "We use advanced High Dynamic Range (HDR) techniques to capture vivid details in both highlights and shadows. Our editing process includes sky replacement and vertical alignment for a magazine-quality finish.",
            features: ["Multi-Exposure Blending", "Blue Sky Guarantee", "Vertical Correction", "Next-Day Delivery"],
            icon: <Camera size={30} />,
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Matterport 3D Virtual Tours",
            quote: "Open your doors for 24/7 walkthroughs anywhere in the world.",
            description: "Immersive 3D tours that allow prospective buyers to explore every corner of a property at their own pace. Includes high-resolution dollhouse views and accurate floor plans.",
            features: ["Full 3D Dollhouse View", "Interactive Floor Plans", "Measurement Tool", "Mobile Friendly"],
            icon: <Box size={30} />,
            image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Professional Drone Media",
            quote: "Perspectives that highlight the property and its surroundings.",
            description: "Advanced aerial photography and videography that showcasing neighborhood context, property boundaries, and nearby amenities from breathtaking heights.",
            features: ["FAA Certified Pilots", "4K Aerial Video", "Site Boundary Marking", "Amenity Highlights"],
            icon: <Plane size={30} />,
            image: "https://images.unsplash.com/photo-1473960104312-d2e1774212ba?auto=format&fit=crop&q=80&w=1200"
        }
    ]

    return (
        <div className="real-estate-page" style={{ paddingTop: '140px' }}>
            <SEO
                title="Cinematic Real Estate Media"
                description="Elevate your property listings with high-end cinematic tours, HDR photography, and immersive 3D walkthroughs from Nextminds."
            />
            <section className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="service-tag" style={{ margin: '0 auto 1.5rem', background: 'var(--primary)15', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', width: 'fit-content' }}>Premium Visual Assets</div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
                        Next-Generation <br />
                        <span className="gradient-text">Real Estate Media</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '850px', margin: '0 auto' }}>
                        Elevation your listings with high-end cinematic tours, HDR photography, and immersive 3D technology. We help you sell faster and at higher price points.
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
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                                    borderRadius: '2rem'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '2rem',
                                    left: '2rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '50px',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    {service.icon} <span style={{ fontWeight: 700 }}>Exclusive Tech</span>
                                </div>
                            </div>
                            <div className="card-info">
                                <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>{service.title}</h2>
                                <p style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '2rem' }}>"{service.quote}"</p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>{service.description}</p>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: 600 }}>
                                            <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="btn-primary" style={{ width: 'fit-content' }}>
                                    Book This Service <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '100px 0', background: 'rgba(0, 184, 230, 0.03)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem' }}>30%</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>Faster Sale Cycles</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '0.5rem' }}>403%</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>Higher Listing Inquiries</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem' }}>82%</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>Sellers Prefer 3D Tours</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section" style={{ padding: '120px 0' }}>
                <div className="container">
                    <div className="glass" style={{
                        padding: '6rem 4rem',
                        borderRadius: '4rem',
                        background: 'linear-gradient(135deg, rgba(29, 78, 99, 0.15), rgba(0, 184, 230, 0.15))',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <Home size={150} style={{ position: 'absolute', top: '-30px', left: '-30px', opacity: 0.05, transform: 'rotate(-15deg)' }} />
                        <Maximize2 size={150} style={{ position: 'absolute', bottom: '-30px', right: '-30px', opacity: 0.05, transform: 'rotate(15deg)' }} />

                        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>Ready to Make Your <br /> <span className="gradient-text">Listing Shine?</span></h2>
                        <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
                            We offer bundled packages that cover everything from photography to social media reels. Let's showcase your property the way it deserves.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                            <Link to="/contact" className="btn-primary" style={{ padding: '1.2rem 3rem' }}>
                                <Calendar size={20} /> Schedule a Shoot
                            </Link>
                            <Link to="/services" className="btn-secondary" style={{ padding: '1.2rem 3rem' }}>
                                <Users size={20} /> View Packages
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

export default RealEstateMediaPage
