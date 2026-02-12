import { Link } from 'react-router-dom'
import {
  Target, MessageSquare, Calendar, Bot, BarChart, Star,
  ArrowRight, CheckCircle
} from 'lucide-react'
import SEO from '../components/SEO'

const AILeadGenerationPage = () => {
  const services = [
    {
      title: "Lead Identification & Qualification",
      tagline: "Find your next customers while you sleep.",
      description: "Our AI-driven lead identification service scours public data and online sources to find potential clients that match your ideal customer profile. We don't just gather a list of names – we use advanced AI analytics (the same kind of intelligent algorithms big companies use) to qualify these prospects, so you get a curated list of genuinely interested leads. By leveraging cutting-edge AI models to research and vet prospects, we save you countless hours and ensure your sales team focuses on leads that are most likely to convert. It's like having a 24/7 research team, powered by AI, bringing new opportunities right to your doorstep.",
      icon: <Target size={32} />,
      highlights: ["Ideal customer profile matching", "AI-powered prospect vetting", "24/7 automated research", "Curated high-intent lead lists"]
    },
    {
      title: "Automated Outreach Messaging",
      tagline: "Never miss a follow-up – let AI start the conversation for you.",
      description: "We help you initiate and maintain engagement with leads through personalized, automated outreach. Using a powerful AI language model (similar to ChatGPT), our system crafts customized emails and messages that sound warm, natural, and tailored to each recipient. Whether it's a cold email campaign or follow-ups to an event, the AI adapts the tone and content to match your voice and the prospect's interests. All you need to do is review and approve – the AI takes care of the rest, sending messages on schedule and even handling simple replies. This service means no more staring at blank drafts or forgetting to follow up. Every outreach is timely, on-message, and designed to open doors to new business.",
      icon: <MessageSquare size={32} />,
      highlights: ["Personalized AI-crafted emails", "Scheduled follow-ups", "Tone & voice matching", "Automated reply handling"]
    },
    {
      title: "Booking Sales Meetings",
      tagline: "Fill your calendar with qualified meetings without lifting a finger.",
      description: "Once a lead shows interest, our AI assistant steps in to handle the scheduling logistics seamlessly. It can email or message your prospect to share available times (integrating with your real-time calendar), and confirm appointments without back-and-forth. We utilize smart scheduling AI tools that consider time zones, preferred meeting lengths, and even find the best slot when everyone is free. The experience feels personal – clients often think a real assistant set up the meeting. As a result, you can wake up to a calendar full of confirmed sales calls and demos with qualified leads, all arranged politely and efficiently by AI. This service is especially useful for busy sales teams: you focus on the meeting itself, and let our system handle the who/when/where details to get it booked.",
      icon: <Calendar size={32} />,
      highlights: ["Real-time calendar integration", "Time zone awareness", "Zero back-and-forth", "Confirmed meetings on autopilot"]
    },
    {
      title: "AI Chatbot Lead Engagement",
      tagline: "Your always-on greeter that turns website visitors into leads.",
      description: "With this service, we install and customize an AI-powered chatbot on your website (or Facebook page) that instantly engages visitors in friendly conversation. No code or technical fuss on your part – we handle everything. The chatbot can answer common questions about your services, and cleverly guide the chat toward collecting contact information or booking a consultation. It's like having a top salesperson staffing your booth online 24/7. Importantly, our chatbot uses one of the best conversational AI models available (the same tech behind today's smartest virtual assistants), so interactions feel genuine and helpful. For example, a visitor might type, \"I'm interested in your software, but have pricing questions,\" and the AI can respond with a warm greeting, provide a quick answer, and then ask if they'd like to schedule a call or get a detailed quote – capturing their email and scheduling that meeting on the spot. This service shines for businesses who get web traffic after hours – you'll never lose a potential lead just because it's 9 PM or a weekend. The AI chatbot is always on, always friendly, and always ready to turn curiosity into genuine leads.",
      icon: <Bot size={32} />,
      highlights: ["24/7 website engagement", "Natural conversation AI", "Contact info capture", "Instant consultation booking"]
    },
    {
      title: "AI Lead Scoring & Analytics",
      tagline: "Prioritize the leads that matter most, with insights only AI can deliver.",
      description: "If you have a large list of prospects or incoming inquiries, this service will be your game-changer. We deploy an AI system that analyzes each lead's data and behavior – from the pages they've visited on your site to their responses in emails – and assigns an easy-to-understand score (or grade). Think of it like a crystal ball for sales: the higher the score, the more likely that lead will convert into a customer. How do we know? The AI model looks at patterns of your past successful customers and finds which new leads look similar. We'll set up a simple dashboard for you to see these scores and the reasoning behind them (for example: Lead A is \"hot\" because they've visited your pricing page 3 times and match your target industry). Armed with this insight, you or your sales team can focus energy on the leads with the highest potential, and nurture the others accordingly. Our AI lead scoring isn't a black box – we'll brief you on the key factors it uses, and we fine-tune it to your business. The result: you spend time on the right leads, shorten your sales cycles, and boost your win rate.",
      icon: <BarChart size={32} />,
      highlights: ["Behavior-based scoring", "Visual analytics dashboard", "Pattern recognition AI", "Shortened sales cycles"]
    },
    {
      title: "AI Reputation & Social Proof Outreach",
      tagline: "Turn happy customers into reviews and referrals.",
      description: "After a sale or successful project, our AI contacts customers automatically and asks for feedback at the right time. Satisfied clients are guided toward leaving reviews on platforms important to your business, while concerns are routed back to your team for follow up. The system personalizes each request, includes direct links, and sends reminders when needed. Your team sees who responded, who left a review, and who might be open to referring others. Stronger ratings build trust with future prospects, improve response rates, and help new leads feel confident about booking a meeting.",
      icon: <Star size={32} />,
      highlights: ["Automated review requests", "Personalized timing", "Concern routing", "Referral identification"]
    }
  ]

  return (
    <div className="lead-gen-page">
      <SEO
        title="AI Lead Generation Services | Nextminds"
        description="Supercharge your sales pipeline with AI-driven lead identification, automated outreach, chatbot engagement, and lead scoring. Built for businesses ready to grow."
      />

      {/* Hero */}
      <section className="lg-hero container">
        <div className="lg-hero-badge">AI Lead Generation Services</div>
        <h1>
          Supercharge Your Pipeline with <br />
          <span className="gradient-text">Intelligent Targeting</span>
        </h1>
        <p className="lg-hero-sub">
          Stop chasing cold leads. Let our AI systems identify, qualify, and engage your perfect customers — then book the meeting for you.
        </p>
        <div className="lg-hero-stats">
          <div className="lg-stat glass">
            <span className="lg-stat-num">24/7</span>
            <span className="lg-stat-label">Lead Prospecting</span>
          </div>
          <div className="lg-stat glass">
            <span className="lg-stat-num">10x</span>
            <span className="lg-stat-label">Faster Outreach</span>
          </div>
          <div className="lg-stat glass">
            <span className="lg-stat-num">85%</span>
            <span className="lg-stat-label">Less Manual Work</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="lg-services container">
        {services.map((service, index) => (
          <div key={index} className="lg-service-block">
            <div className="lg-service-left">
              <div className="lg-service-number">0{index + 1}</div>
              <div className="lg-icon-box">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="lg-tagline">"{service.tagline}"</p>
              <ul className="lg-highlights">
                {service.highlights.map((h, i) => (
                  <li key={i}><CheckCircle size={16} /> {h}</li>
                ))}
              </ul>
            </div>
            <div className="lg-service-right glass">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="lg-cta container">
        <div className="lg-cta-card glass">
          <h2>Ready to Fill Your Pipeline?</h2>
          <p>Start generating high-quality leads on autopilot today. Let's talk about which services fit your business.</p>
          <Link to="/contact" className="btn-primary">
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <style>{`
        .lead-gen-page {
          padding-top: 140px;
          min-height: 100vh;
          padding-bottom: 5rem;
        }

        /* ── Hero ── */
        .lg-hero {
          text-align: center;
          margin-bottom: 6rem;
        }

        .lg-hero-badge {
          display: inline-block;
          background: rgba(0, 184, 230, 0.1);
          color: var(--primary);
          padding: 0.6rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(0, 184, 230, 0.2);
        }

        .lg-hero h1 {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .lg-hero-sub {
          color: var(--text-muted);
          font-size: 1.25rem;
          max-width: 750px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .lg-hero-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .lg-stat {
          padding: 1.5rem 2.5rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid var(--border);
          min-width: 160px;
        }

        .lg-stat-num {
          display: block;
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--primary), #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.3rem;
        }

        .lg-stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* ── Service Blocks ── */
        .lg-services {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-bottom: 6rem;
        }

        .lg-service-block {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          align-items: start;
        }

        .lg-service-block:nth-child(even) {
          direction: rtl;
        }

        .lg-service-block:nth-child(even) > * {
          direction: ltr;
        }

        .lg-service-left {
          position: relative;
        }

        .lg-service-number {
          font-size: 5rem;
          font-weight: 900;
          opacity: 0.06;
          position: absolute;
          top: -20px;
          left: -10px;
          line-height: 1;
          pointer-events: none;
        }

        .lg-icon-box {
          width: 65px;
          height: 65px;
          border-radius: 18px;
          background: rgba(0, 184, 230, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
        }

        .lg-service-left h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          line-height: 1.2;
        }

        .lg-tagline {
          font-style: italic;
          color: var(--primary);
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }

        .lg-highlights {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .lg-highlights li {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .lg-highlights li svg {
          color: var(--primary);
          flex-shrink: 0;
        }

        .lg-service-right {
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--border);
          transition: border-color 0.3s ease;
        }

        .lg-service-right:hover {
          border-color: var(--primary);
        }

        .lg-service-right p {
          color: var(--text-muted);
          line-height: 1.85;
          font-size: 1.05rem;
        }

        /* ── CTA ── */
        .lg-cta {
          margin-bottom: 3rem;
        }

        .lg-cta-card {
          text-align: center;
          padding: 5rem 3rem;
          border-radius: 3rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 184, 230, 0.05) 100%);
          border: 1px solid var(--border);
        }

        .lg-cta-card h2 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .lg-cta-card p {
          color: var(--text-muted);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .lg-hero h1 { font-size: 2.8rem; }

          .lg-service-block {
            grid-template-columns: 1fr;
          }

          .lg-service-block:nth-child(even) {
            direction: ltr;
          }

          .lg-cta-card {
            padding: 3rem 1.5rem;
            border-radius: 2rem;
          }

          .lg-cta-card h2 { font-size: 2rem; }
        }

        @media (max-width: 550px) {
          .lg-hero h1 { font-size: 2.2rem; }
          .lg-hero-stats { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  )
}

export default AILeadGenerationPage
