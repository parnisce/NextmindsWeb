import { Link } from 'react-router-dom'
import {
  Target, Zap, Share2, Users2,
  ArrowRight
} from 'lucide-react'
import SEO from '../components/SEO'

const AIServicesPage = () => {
  const services = [
    {
      id: 'lead-gen',
      title: 'AI Lead Generation',
      description: 'Identify high-value prospects and automate outreach with surgical precision.',
      icon: <Target size={40} />,
      link: '/ai-lead-generation',
      color: 'var(--primary)'
    },
    {
      id: 'automation',
      title: 'Implementation & Automation',
      description: 'Streamline operations with custom AI workflows, voice agents, and knowledge clones.',
      icon: <Zap size={40} />,
      link: '/ai-implementation',
      color: '#a855f7' // Purple accent
    },
    {
      id: 'repurposing',
      title: 'Content Repurposing',
      description: 'Turn single assets into omni-channel campaigns with multi-modal AI analysis.',
      icon: <Share2 size={40} />,
      link: '/ai-content-repurposing',
      color: '#f59e0b' // Amber/Orange accent
    },
    {
      id: 'va',
      title: 'Virtual Assistants',
      description: 'Augment your workforce with intelligent, 24/7 digital assistants for research and logistics.',
      icon: <Users2 size={40} />,
      link: '/ai-virtual-assistants',
      color: '#10b981' // Emerald accent
    }
  ]

  return (
    <div className="ai-services-page">
      <SEO
        title="Advanced AI Agent Solutions | Nextminds"
        description="Transform your business with custom-trained AI agents. Automate lead generation, content creation, and market analysis with Nextminds."
      />

      <section className="container hero-container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="service-tag">Registered Since 2001</div>
          <h1 className="hero-title">
            Advanced <span className="gradient-text">AI Agents</span> <br />
            for Modern Enterprises
          </h1>
          <p className="hero-description">
            We blend 20+ years of agency experience with cutting-edge AI development to build intelligent systems that scale your impact.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <Link to={service.link} key={i} className="service-card glass">
              <div className="card-icon" style={{ color: service.color, background: `${service.color}15` }}>
                {service.icon}
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-link">
                  Explore Service <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="glass cta-card">
            <h2>Have a <span className="gradient-text">Custom AI Use Case?</span></h2>
            <p>
              We build tailored mini-tools and complex enterprise-grade AI agents to solve your specific digital bottlenecks.
            </p>
            <Link to="/contact" className="btn-primary cta-btn">
              Start Your AI Journey <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .ai-services-page {
          padding-top: 140px;
          min-height: 100vh;
        }

        .hero-container {
          padding-bottom: 5rem;
        }

        .service-tag {
          margin: 0 auto 1.5rem;
          background: rgba(0, 184, 230, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          width: fit-content;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid rgba(0, 184, 230, 0.2);
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          margin-bottom: 2rem;
          line-height: 1.1;
        }

        .hero-description {
          color: var(--text-muted);
          font-size: 1.25rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .service-card {
          padding: 3rem;
          border-radius: 2rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .service-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .card-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .card-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .card-link {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-main);
          font-weight: 700;
          transition: gap 0.3s ease;
        }

        .service-card:hover .card-link {
          gap: 1.2rem;
          color: var(--primary);
        }

        .cta-section {
          padding: 5rem 0 8rem;
        }

        .cta-card {
          padding: 5rem;
          border-radius: 4rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(29, 78, 99, 0.1), rgba(0, 184, 230, 0.05));
          border: 1px solid var(--border);
        }

        .cta-card h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .cta-card p {
          color: var(--text-muted);
          font-size: 1.2rem;
          margin-bottom: 3.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-btn {
          padding: 1.2rem 3.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .cta-card { padding: 3rem 1.5rem; border-radius: 2rem; }
          .cta-card h2 { font-size: 2.2rem; }
        }
      `}</style>
    </div>
  )
}

export default AIServicesPage
