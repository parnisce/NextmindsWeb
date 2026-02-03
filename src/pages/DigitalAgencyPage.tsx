import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Layout,
    Code2,
    BarChart3,
    Search,
    Globe,
    Smartphone,
    Layers,
    MousePointerClick,
    ArrowRight,
    Palette,
    Zap,
    ShieldCheck,
    Users
} from 'lucide-react'

import SEO from '../components/SEO'

const DigitalAgencyPage = () => {
    const [activeTab, setActiveTab] = useState('web-design')

    const categories = [
        { id: 'web-design', label: 'Web Design & UX', icon: <Layout size={20} /> },
        { id: 'development', label: 'Development', icon: <Code2 size={20} /> },
        { id: 'marketing', label: 'Digital Marketing', icon: <BarChart3 size={20} /> },
        { id: 'seo', label: 'SEO & Strategy', icon: <Search size={20} /> }
    ]

    const servicesData: Record<string, any[]> = {
        'web-design': [
            {
                title: "UI/UX Design",
                quote: "Where aesthetics meet effortless functionality.",
                description: "We create user-centric interfaces that aren't just beautiful—they're engineered to convert. Our design process focuses on user psychology and brand storytelling.",
                tech: "Figma, Adobe XD, ProtoPie",
                icon: <Palette />
            },
            {
                title: "Responsive Web Design",
                quote: "Flawless experiences on every single screen.",
                description: "Your site will look and perform beautifully whether it's on a 30-inch monitor or a 5-inch smartphone. We prioritize mobile-first architecture for the modern web.",
                tech: "Fluid Grids, Flexbox, CSS Grid",
                icon: <Smartphone />
            },
            {
                title: "Brand Identity Design",
                quote: "Defining the visual soul of your company.",
                description: "Beyond just a logo, we build comprehensive visual systems including typography, color palettes, and brand guidelines that resonate with your audience.",
                tech: "Visual Branding, Identity Systems",
                icon: <Layers />
            }
        ],
        'development': [
            {
                title: "Custom Web Applications",
                quote: "Scalable solutions built for your unique logic.",
                description: "From complex SaaS platforms to bespoke internal tools, we build high-performance web applications using the most modern tech stacks available.",
                tech: "React, Next.js, Node.js, TypeScript",
                icon: <Code2 />
            },
            {
                title: "E-Commerce Solutions",
                quote: "Turning visitors into loyal customers at scale.",
                description: "We build secure, high-speed online stores that provide frictionless shopping experiences and robust backend management for your inventory.",
                tech: "Shopify, WooCommerce, Custom Cart",
                icon: <Globe />
            },
            {
                title: "Performance Optimization",
                quote: "Lightning speed is no longer optional.",
                description: "We audit and optimize your codebase to ensure sub-second load times, improving both user retention and your organic search rankings.",
                tech: "Core Web Vitals, Edge Caching",
                icon: <Zap />
            }
        ],
        'marketing': [
            {
                title: "Pay-Per-Click (PPC)",
                quote: "Instant visibility where your customers are looking.",
                description: "Data-driven advertising campaigns that maximize your ROI. We manage everything from keyword research to creative A/B testing.",
                tech: "Google Ads, Meta Ads, LinkedIn Ads",
                icon: <MousePointerClick />
            },
            {
                title: "Social Media Strategy",
                quote: "Building community and brand authority.",
                description: "We don't just post content; we create narratives that engage your target demographic and build a loyal following across social ecosystems.",
                tech: "Content Strategy, Community Management",
                icon: <Users size={24} />
            },
            {
                title: "Conversion Rate Optimization",
                quote: "Optimize what you already have for better results.",
                description: "We use heatmaps and user recordings to identify bottlenecks in your funnel, then implement data-backed changes to boost your conversion floor.",
                tech: "Hotjar, Google Optimize, VWO",
                icon: <BarChart3 />
            }
        ],
        'seo': [
            {
                title: "Technical SEO",
                quote: "Make sure search engines love your architecture.",
                description: "We deep-dive into your site's structure, ensuring crawlability, schema markup, and site speed are perfectly aligned with Google's latest algorithms.",
                tech: "Schema, XML Sitemaps, Crawl Budget",
                icon: <ShieldCheck />
            },
            {
                title: "Content Strategy & SEO",
                quote: "Content that ranks and converts.",
                description: "Search intent is everything. We produce high-quality, SEO-optimized content that answers your customers' questions and establishes your domain authority.",
                tech: "Keyword Research, Content Silos",
                icon: <Search />
            }
        ]
    }

    return (
        <div className="digital-agency-page" style={{ paddingTop: '140px' }}>
            <SEO
                title="Full-Stack Digital Agency"
                description="Over 20 years of expertise in web design, development, and digital marketing. We build custom strategies that elevate your brand and drive results."
            />
            <section className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="service-tag" style={{ margin: '0 auto 1.5rem', background: 'var(--primary)15', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', width: 'fit-content' }}>Full-Stack Excellence</div>
                    <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
                        Premium <span className="gradient-text">Digital Agency</span> <br />
                        Services Since 2001
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '850px', margin: '0 auto' }}>
                        Transforming your digital presence with over two decades of design and development expertise. We build high-performance websites and marketing engines that drive growth.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="category-nav glass">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`cat-tab ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            <span className="cat-icon">{cat.icon}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="services-content-grid animate-fade-in" key={activeTab}>
                    {servicesData[activeTab].map((service, i) => (
                        <div key={i} className="ai-detail-card glass">
                            <div className="ai-card-header">
                                <div className="ai-card-icon">{service.icon}</div>
                                <div className="ai-card-titles">
                                    <h3>{service.title}</h3>
                                    <p className="ai-quote">"{service.quote}"</p>
                                </div>
                            </div>
                            <div className="ai-card-body">
                                <p>{service.description}</p>
                            </div>
                            <div className="ai-card-footer">
                                <Link to="/#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    Launch Your Project <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="glass" style={{
                        padding: '5rem',
                        borderRadius: '4rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(29, 78, 99, 0.1), rgba(0, 184, 230, 0.1))',
                        border: '1px solid var(--border)'
                    }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Ready to <span className="gradient-text">Elevate Your Brand?</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3.5rem', maxWidth: '700px', margin: '0 auto' }}>
                            Whether it's a new landing page or a full e-commerce migration, our veteran team is ready to deliver excellence.
                        </p>
                        <button className="btn-primary" style={{ padding: '1.2rem 3.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', margin: '0 auto' }}>
                            Get a Free Audit <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>


            <style>{`
        .category-nav {
          display: flex;
          gap: 1rem;
          padding: 0.8rem;
          border-radius: 100px;
          width: fit-content;
          margin: 0 auto 4rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cat-tab {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cat-tab:hover {
          color: var(--text-main);
        }

        .cat-tab.active {
          background: var(--bg-card-hover);
          color: var(--text-main);
          box-shadow: 0 4px 15px rgba(0, 184, 230, 0.1);
        }

        .cat-icon {
          color: var(--accent);
        }

        .services-content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 50px;
        }

        .ai-detail-card {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          border-radius: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border);
        }

        .ai-detail-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
        }

        .ai-card-header {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .ai-card-icon {
          width: 70px;
          height: 70px;
          background: rgba(0, 184, 230, 0.08);
          color: var(--accent);
          border-radius: 1.2rem;
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        .ai-card-titles h3 {
          font-size: 1.6rem;
          margin-bottom: 0.3rem;
        }

        .ai-quote {
          font-style: italic;
          color: var(--accent);
          font-weight: 600;
          font-size: 1rem;
        }

        .ai-card-body p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .ai-card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding-top: 1.8rem;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 768px) {
          .services-content-grid {
            grid-template-columns: 1fr;
          }
          .ai-card-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
        </div>
    )
}

export default DigitalAgencyPage
