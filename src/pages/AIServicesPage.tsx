import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Target, MessageSquare, Calendar, Bot, BarChart,
  Zap, Mic, Copy, Dna,
  Video, Newspaper, Shield, Share2,
  Mail, Search, Users2,
  ArrowRight, Globe
} from 'lucide-react'

import SEO from '../components/SEO'

const AIServicesPage = () => {
  const [activeTab, setActiveTab] = useState('lead-gen')

  const categories = [
    { id: 'lead-gen', label: 'Lead Generation', icon: <Target size={20} /> },
    { id: 'automation', label: 'Implementation & Automation', icon: <Zap size={20} /> },
    { id: 'repurposing', label: 'Content Repurposing', icon: <Share2 size={20} /> },
    { id: 'va', label: 'Virtual Assistants', icon: <Users2 size={20} /> }
  ]

  const servicesData: Record<string, any[]> = {
    'lead-gen': [
      {
        title: "AI-Driven Lead Identification",
        quote: "Identify high-value prospects with surgical precision.",
        description: "Our AI systems scour digital footprints and public data to find potential clients that match your business mission. We use advanced predictive algorithms to qualify leads, providing you with a curated list of high-intent prospects.",
        tech: "Predictive Analytics & Scraping AI",
        icon: <Target />
      },
      {
        title: "Personalized Outreach Systems",
        quote: "Scale your human touch with AI-powered messaging.",
        description: "We help you initiate engagement via personalized, automated outreach that feels individual. Our systems craft messages tailored to each lead's specific business context, ensuring higher response rates.",
        tech: "GPT-4o & Contextual Learning",
        icon: <MessageSquare />
      },
      {
        title: "Dynamic Sales Scheduling",
        quote: "Seamlessly transition leads from chat to calendar.",
        description: "Our AI assistants handle lead scheduling logistics, integrating directly with your real-time availability to secure meetings without the back-and-forth friction.",
        tech: "Calendar APIs & Scheduling Logic",
        icon: <Calendar />
      },
      {
        title: "Intelligent Lead Concierge",
        quote: "Your 24/7 gateway for instant visitor engagement.",
        description: "We deploy custom AI chatbots that instantly qualify website visitors. They guide potential leads through discovery, capturing critical data while providing instant value.",
        tech: "Natural Language Processing (NLP)",
        icon: <Bot />
      },
      {
        title: "AI Analytics & Scoring",
        quote: "Focus on the leads most likely to move the needle.",
        description: "Our machine learning models analyze behavior patterns to assign lead scores, allowing your sales team to prioritize their efforts where they matter most.",
        tech: "ML Classification Models",
        icon: <BarChart />
      }
    ],
    'automation': [
      {
        title: "Business Process Automation",
        quote: "Connect your ecosystem with intelligent workflows.",
        description: "We orchestrate complex automations between your CRMs, ERPs, and communications platforms, ensuring your business logic remains flawless and efficient.",
        tech: "No-Code/Low-Code + AI Orchestration",
        icon: <Zap />
      },
      {
        title: "Advanced Voice AI",
        quote: "A human-like voice interface for your business operations.",
        description: "Interactive voice agents that handle inbound and outbound calls with natural tonality, capable of answering queries and executing complex requests.",
        tech: "RVC & Neural Voice Synthesis",
        icon: <Mic />
      },
      {
        title: "Custom AI Knowledge Clones",
        quote: "Scale your expertise with a digital twin of your brain.",
        description: "We build secure AI instances trained on your specific documentation, articles, and methodology to handle content creation and internal support in your unique voice.",
        tech: "Fine-tuned LLMs & RAG Systems",
        icon: <Copy />
      },
      {
        title: "Corporate DNA AI Instances",
        quote: "One source of truth, accessible in milliseconds.",
        description: "Centralize your company's processes and product specs into a queryable AI brain that supports both employees and customers with instant, accurate answers.",
        tech: "Vector Databases & Semantic Search",
        icon: <Dna />
      }
    ],
    'repurposing': [
      {
        title: "AI Video Transformation",
        quote: "Maximize every minute of your high-value video content.",
        description: "We use high-fidelity AI to extract the most engaging moments from your long-form webinars and talks, transforming them into viral-ready clips for social platforms.",
        tech: "Multi-Modal AI Analysis",
        icon: <Video />
      },
      {
        title: "Multi-Channel Content Engines",
        quote: "Turn one podcast into a month of omni-channel content.",
        description: "Repurpose your master content into newsletters, LinkedIn carousels, and blog posts with AI transcription that preserves your original brand tonality.",
        tech: "Summarization AI & Whisper v3",
        icon: <Newspaper />
      },
      {
        title: "Brand Integrity Guardrails",
        quote: "Consistency at scale, guaranteed by AI.",
        description: "Custom-trained style checkers that ensure every piece of generated content matches your brand's strict tonality and vocabulary requirements.",
        tech: "NLP Sentiment & Style Matching",
        icon: <Shield />
      }
    ],
    'va': [
      {
        title: "Executive Priority Management",
        quote: "Inbox zero, maintained by digital intelligence.",
        description: "Advanced email triage that sorts priorities, handles routine replies, and keeps your schedule optimized so you can focus on core vision.",
        tech: "Intelligent Triage Algorithms",
        icon: <Mail />
      },
      {
        title: "Automated Deep Research",
        quote: "High-level market insights, delivered on-demand.",
        description: "Research agents that scour deep web sources and credible databases to package comprehensive market reports and competitive analysis.",
        tech: "Browsing-enabled Research Agents",
        icon: <Search />
      },
      {
        title: "Intelligent Logistics Planning",
        quote: "Global mobility, handled with surgical precision.",
        description: "Automated travel and logistics management that cross-references your preferences with global data to build the ultimate itinerary.",
        tech: "Logistics Optimization AI",
        icon: <Globe />
      }
    ]
  }

  return (
    <div className="ai-services-page" style={{ paddingTop: '140px' }}>
      <SEO
        title="Advanced AI Agent Solutions"
        description="Transform your business with custom-trained AI agents. Automate lead generation, content creation, and market analysis with Nextminds."
      />
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="service-tag" style={{ margin: '0 auto 1.5rem', background: 'var(--primary)15', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', width: 'fit-content' }}>Registered Since 2001</div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1 }}>
            Advanced <span className="gradient-text">AI Agents</span> <br />
            for Modern Enterprises
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '850px', margin: '0 auto' }}>
            Since 2001, Nextminds has been at the forefront of digital excellence. Today, we blend 20+ years of agency experience with cutting-edge AI Agent development to scale your impact.
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
                  Inquire Now <ArrowRight size={18} />
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
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Have a <span className="gradient-text">Custom AI Use Case?</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3.5rem', maxWidth: '700px', margin: '0 auto' }}>
              We build tailored mini-tools and complex enterprise-grade AI agents to solve your specific digital bottlenecks.
            </p>
            <button className="btn-primary" style={{ padding: '1.2rem 3.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', margin: '0 auto' }}>
              Start Your AI Journey <ArrowRight size={20} />
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
          margin-bottom: 5rem;
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
          justify-content: center;
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

        .tech-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
          border: 1px solid var(--border);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 184, 230, 0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(0, 184, 230, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 184, 230, 0); }
        }

        .learn-more-btn {
          background: transparent;
          border: none;
          color: var(--text-main);
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
          font-size: 1rem;
        }

        .learn-more-btn:hover {
          color: var(--accent);
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .services-content-grid {
            grid-template-columns: 1fr;
          }
          .ai-card-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .ai-card-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}

export default AIServicesPage
