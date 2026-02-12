import { Link } from 'react-router-dom'
import {
    Target, MessageSquare, Calendar, Bot, BarChart,
    ArrowRight
} from 'lucide-react'
import SEO from '../components/SEO'

const AILeadGenerationPage = () => {
    const services = [
        {
            title: "AI-Driven Lead Identification",
            quote: "Identify high-value prospects with surgical precision.",
            description: "Our AI systems scour digital footprints and public data to find potential clients that match your business mission. We use advanced predictive algorithms to qualify leads, providing you with a curated list of high-intent prospects.",
            tech: "Predictive Analytics & Scraping AI",
            icon: <Target size={30} />
        },
        {
            title: "Personalized Outreach Systems",
            quote: "Scale your human touch with AI-powered messaging.",
            description: "We help you initiate engagement via personalized, automated outreach that feels individual. Our systems craft messages tailored to each lead's specific business context, ensuring higher response rates.",
            tech: "GPT-4o & Contextual Learning",
            icon: <MessageSquare size={30} />
        },
        {
            title: "Dynamic Sales Scheduling",
            quote: "Seamlessly transition leads from chat to calendar.",
            description: "Our AI assistants handle lead scheduling logistics, integrating directly with your real-time availability to secure meetings without the back-and-forth friction.",
            tech: "Calendar APIs & Scheduling Logic",
            icon: <Calendar size={30} />
        },
        {
            title: "Intelligent Lead Concierge",
            quote: "Your 24/7 gateway for instant visitor engagement.",
            description: "We deploy custom AI chatbots that instantly qualify website visitors. They guide potential leads through discovery, capturing critical data while providing instant value.",
            tech: "Natural Language Processing (NLP)",
            icon: <Bot size={30} />
        },
        {
            title: "AI Analytics & Scoring",
            quote: "Focus on the leads most likely to move the needle.",
            description: "Our machine learning models analyze behavior patterns to assign lead scores, allowing your sales team to prioritize their efforts where they matter most.",
            tech: "ML Classification Models",
            icon: <BarChart size={30} />
        }
    ]

    return (
        <div className="service-page">
            <SEO
                title="AI Lead Generation Services | Nextminds"
                description="Supercharge your sales pipeline with AI-driven lead identification, outreach, and scoring. Discover our advanced lead generation services."
            />

            <section className="hero-section text-center container">
                <div className="pill-badge">AI Lead Generation</div>
                <h1>
                    Supercharge Your Pipeline with <br />
                    <span className="gradient-text">Intelligent Targeting</span>
                </h1>
                <p className="hero-subtitle">
                    Stop chasing cold leads. Let our AI systems identify, qualify, and engage your perfect customers with surgical precision.
                </p>
            </section>

            <section className="container content-section">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="glass-card service-card">
                            <div className="card-header">
                                <div className="icon-box">{service.icon}</div>
                                <div>
                                    <h3>{service.title}</h3>
                                    <p className="quote">"{service.quote}"</p>
                                </div>
                            </div>
                            <p className="description">{service.description}</p>
                            <div className="tech-stack">
                                <span className="tech-label">Technology:</span> {service.tech}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section container">
                <div className="glass-panel cta-box">
                    <h2>Ready to Fill Your Pipeline?</h2>
                    <p>Start generating high-quality leads on autopilot today.</p>
                    <Link to="/contact" className="btn-primary">
                        Get Started <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <style>{`
        .service-page {
          padding-top: 140px;
          min-height: 100vh;
          padding-bottom: 5rem;
        }
        
        .hero-section {
          margin-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pill-badge {
          background: rgba(0, 184, 230, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(0, 184, 230, 0.2);
        }

        h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .hero-subtitle {
          color: var(--text-muted);
          font-size: 1.25rem;
          max-width: 700px;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2.5rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .card-header {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .icon-box {
          min-width: 60px;
          height: 60px;
          border-radius: 16px;
          background: rgba(0, 184, 230, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glass-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .quote {
          font-style: italic;
          color: var(--primary);
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .description {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .tech-stack {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .tech-label {
          color: var(--text-main);
          font-weight: 600;
        }

        .cta-box {
          text-align: center;
          padding: 4rem 2rem;
          border-radius: 30px;
          margin-top: 4rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 184, 230, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cta-box h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-box p {
          color: var(--text-muted);
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          background: var(--primary);
          color: #000;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .btn-primary:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          h1 { font-size: 2.5rem; }
          .card-header { flex-direction: column; }
          .icon-box { margin-bottom: 0.5rem; }
        }
      `}</style>
        </div>
    )
}

export default AILeadGenerationPage
