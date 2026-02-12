import { Link } from 'react-router-dom'
import {
    Zap, Mic, Copy, Dna,
    ArrowRight
} from 'lucide-react'
import SEO from '../components/SEO'

const AIImplementationPage = () => {
    const services = [
        {
            title: "Business Process Automation",
            quote: "Connect your ecosystem with intelligent workflows.",
            description: "We orchestrate complex automations between your CRMs, ERPs, and communications platforms, ensuring your business logic remains flawless and efficient.",
            tech: "No-Code/Low-Code + AI Orchestration",
            icon: <Zap size={30} />
        },
        {
            title: "Advanced Voice AI",
            quote: "A human-like voice interface for your business operations.",
            description: "Interactive voice agents that handle inbound and outbound calls with natural tonality, capable of answering queries and executing complex requests.",
            tech: "RVC & Neural Voice Synthesis",
            icon: <Mic size={30} />
        },
        {
            title: "Custom AI Knowledge Clones",
            quote: "Scale your expertise with a digital twin of your brain.",
            description: "We build secure AI instances trained on your specific documentation, articles, and methodology to handle content creation and internal support in your unique voice.",
            tech: "Fine-tuned LLMs & RAG Systems",
            icon: <Copy size={30} />
        },
        {
            title: "Corporate DNA AI Instances",
            quote: "One source of truth, accessible in milliseconds.",
            description: "Centralize your company's processes and product specs into a queryable AI brain that supports both employees and customers with instant, accurate answers.",
            tech: "Vector Databases & Semantic Search",
            icon: <Dna size={30} />
        }
    ]

    return (
        <div className="service-page">
            <SEO
                title="AI Implementation & Automation Services | Nextminds"
                description="Streamline your workflows with AI-driven automation. Discover our implementation services for voice AI, knowledge clones, and process automation."
            />

            <section className="hero-section text-center container">
                <div className="pill-badge">AI Implementation & Automation</div>
                <h1>
                    Seamless Integration for <br />
                    <span className="gradient-text">Hyper-Efficient Operations</span>
                </h1>
                <p className="hero-subtitle">
                    Unlock new levels of productivity by automating repetitive tasks and integrating intelligent agents into your core business processes.
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
                    <h2>Ready add AI to your Business?</h2>
                    <p>Automate your workflow and save hours of manual work.</p>
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

export default AIImplementationPage
