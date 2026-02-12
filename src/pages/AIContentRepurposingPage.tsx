import { Link } from 'react-router-dom'
import {
    Video, Newspaper, Shield,
    ArrowRight
} from 'lucide-react'
import SEO from '../components/SEO'

const AIContentRepurposingPage = () => {
    const services = [
        {
            title: "AI Video Transformation",
            quote: "Maximize every minute of your high-value video content.",
            description: "We use high-fidelity AI to extract the most engaging moments from your long-form webinars and talks, transforming them into viral-ready clips for social platforms.",
            tech: "Multi-Modal AI Analysis",
            icon: <Video size={30} />
        },
        {
            title: "Multi-Channel Content Engines",
            quote: "Turn one podcast into a month of omni-channel content.",
            description: "Repurpose your master content into newsletters, LinkedIn carousels, and blog posts with AI transcription that preserves your original brand tonality.",
            tech: "Summarization AI & Whisper v3",
            icon: <Newspaper size={30} />
        },
        {
            title: "Brand Integrity Guardrails",
            quote: "Consistency at scale, guaranteed by AI.",
            description: "Custom-trained style checkers that ensure every piece of generated content matches your brand's strict tonality and vocabulary requirements.",
            tech: "NLP Sentiment & Style Matching",
            icon: <Shield size={30} />
        }
    ]

    return (
        <div className="service-page">
            <SEO
                title="AI Content Repurposing Services | Nextminds"
                description="Amplify your content reach. Repurpose videos, podcasts, and articles into multi-channel assets with AI-driven content engines."
            />

            <section className="hero-section text-center container">
                <div className="pill-badge">AI Content Repurposing</div>
                <h1>
                    One Idea, <br />
                    <span className="gradient-text">Infinite Reach</span>
                </h1>
                <p className="hero-subtitle">
                    Transform a single piece of content into a month's worth of viral assets. Our AI engines handle the heavy lifting while you focus on the message.
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
                    <h2>Ready to Scale Your Content?</h2>
                    <p>Get consistency at scale, guaranteed by AI.</p>
                    <Link to="/contact" className="btn-primary">
                        Start Repurposing <ArrowRight size={20} />
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

export default AIContentRepurposingPage
