import { Link } from 'react-router-dom'
import {
  Mail, Search, ShoppingBag, Plane, MessageCircle,
  ArrowRight, CheckCircle
} from 'lucide-react'
import SEO from '../components/SEO'

const AIVirtualAssistantPage = () => {
  const services = [
    {
      title: "Email Management & Scheduling",
      tagline: "Inbox Zero and a full calendar – handled seamlessly.",
      description: "This service gives you a virtual email assistant that triages your inbox and a smart scheduler that coordinates your meetings – as if you had a personal secretary, but powered by AI. We set you up with an AI-driven email tool (using natural language processing models akin to what powers intelligent email features in Gmail/Outlook) that can learn your email habits and preferences. It will sort incoming emails into categories (important, can-wait, newsletters, etc.), flag the ones that likely need your attention first, and even draft quick replies for routine messages. For example, if a client emails \"Can we reschedule our meeting to next week?\", the AI can draft a polite response proposing a new time based on your calendar openings. Speaking of calendars – our scheduling assistant (think along the lines of Calendly, but smarter) can take the back-and-forth out of finding meeting times. You can cc this assistant in an email, like \"@Assistant, please help schedule a 30-minute call with John next week,\" and it will handle the rest by communicating with John to find a slot that works for both of you. It understands your constraints (we help configure those – e.g., you prefer meetings in afternoons, avoid Fridays, etc.). And it can add the event to your calendar with all details once confirmed. The best models here include a combination of an AI that understands email context and one that interfaces with calendar APIs – essentially the tech behind tools like Microsoft's Cortana or Google's scheduling AI, tailored for your use. The outcome: you spend far less time digging through emails and scheduling meetings. We maintain human oversight initially to train it correctly and remain on-call if it encounters something unfamiliar. But soon enough, it'll feel like second nature – you'll wonder how you lived without an AI keeping your inbox tidy and your agenda organized.",
      icon: <Mail size={32} />,
      highlights: ["Smart inbox categorization", "AI-drafted replies", "Automated meeting scheduling", "Calendar preference learning"]
    },
    {
      title: "Research Project Automation",
      tagline: "Get the data and answers you need, without the late nights.",
      description: "Whether it's market research, competitor analysis, or gathering information for a client proposal, this service has you covered. You can think of it as having a supercharged research assistant on demand. Say you're an entrepreneur needing to find statistics on real estate trends for an upcoming presentation – normally you'd spend hours Googling and compiling notes. With our research automation, you send a request to our team (even in plain English, like \"What are the latest trends in real estate prices and migration?\") and our AI research agents spring into action. We use a combination of web-scraping tools and AI (for understanding context and summarizing findings) – essentially leveraging models that can read articles, reports, or databases and extract key insights. The AI might use something like OpenAI's browsing-enabled GPT or other specialized research AI that knows where to find credible data. It collects info from news sites, government databases, industry reports, etc., then we have it summarize the findings and even create charts if data is involved. Finally, our human analysts review the output to ensure accuracy and relevance, package it nicely (perhaps a brief report or a slide deck summary), and deliver it to you promptly. The magic is that what might take a human 10 hours can be done in 1 hour with AI augmentation – and you get the answer while it's fresh. In all cases, you get well-organized, concise research delivered fast. The AI models involved excel at scanning large volumes of text and pulling out what matters, so you're essentially tapping into a tireless research team that can read the whole internet for you and report back. You'll impress stakeholders with how quickly you can back your ideas with data – and you don't have to reveal that an AI helper did the heavy lifting (unless you want to, of course!).",
      icon: <Search size={32} />,
      highlights: ["AI-powered web research", "Data visualization & charts", "Human analyst review", "10x faster than manual"]
    },
    {
      title: "Running Errands (AI Personal Assistant)",
      tagline: "Delegate your digital busywork – your AI assistant has it covered.",
      description: "Everyone has those small tasks that consume time during the day: ordering office supplies, scheduling a social media post, booking a courier, reminding you to call someone, etc. Our AI-powered errand service is like a smart PA that takes on many of these minor but time-consuming chores, especially the ones that can be done online. For instance, if you need to set up a weekly lunch order for Friday team meetings, our assistant can handle that – it knows your team's usual orders and will place them on time. Need to pay a recurring bill or invoice? The AI can log in and do that securely, or at least remind and guide you through it. We can configure it to automate things like monitoring prices for a product you frequently buy and reordering it when it's cheapest, or checking your LinkedIn messages daily and drafting simple responses like \"Thank you, I'll get back to you soon.\" A lot of this is driven by a combination of AI scripts and integrations we set up specifically for you – using tools such as IFTTT/Zapier and custom scripts with AI decision-making. The \"best model\" aspect comes in where decisions are needed: for example, using AI vision to read a screenshot you forwarded and then taking action (one client snaps a photo of a business card, and the AI errand runner adds the contact to his CRM and sends a follow-up email). It's all the little stuff that adds up. We approach this carefully: we'll map out which \"errands\" you'd like offloaded, ensure we have the necessary permissions and security in place for accounts, and then let the AI do its thing. You'll get notifications like \"Task done: Ordered 3 new printer cartridges, arriving Tuesday\" so you're always in the loop. It's like having a junior assistant who handles the odds and ends, powered by AI's efficiency and consistency.",
      icon: <ShoppingBag size={32} />,
      highlights: ["Digital errand automation", "Smart reordering & reminders", "AI vision for documents", "Task completion notifications"]
    },
    {
      title: "Travel Planning & Booking",
      tagline: "Stress-free travel arrangements, personalized to you.",
      description: "If the thought of searching flights, comparing hotel reviews, and coordinating travel itineraries makes you groan, this service will feel like a superpower. Simply tell us (or our AI assistant directly) where and when you need to travel, plus any preferences (e.g. \"I prefer morning flights\" or \"4-star hotel with free Wi-Fi, near the conference center\"), and we'll take it from there. Our AI travel planner uses specialized travel search AI alongside services like Expedia, Google Flights, etc., to find the best options for you. It can crunch through hundreds of flight combinations and hotel deals in seconds, far faster than any human travel agent, and present you with the top choices. We then have a human travel concierge on our team quickly double-check the options to ensure they truly meet your needs (we know sometimes an AI might miss that a \"5 min walk\" on a map doesn't account for crossing a highway – we catch things like that!). Once you approve the itinerary, we can have the AI automatically book everything for you using secure methods, or draft the booking details for you to finalize – whichever you're comfortable with. The AI keeps track of your loyalty program info, seat preferences, and other small details, so it uses \"the best model\" of travel arrangement: one that remembers you. You'll get a neatly organized confirmation with all your bookings, and even optional calendar invites with all the details. And it doesn't end at booking: need a list of top 5 restaurants near your hotel, or a rideshare scheduled to pick you up when you land? We can include those as part of the service, with AI handling the info gathering and scheduling. Essentially, this turns the headache of travel planning into a quick conversation with an assistant who then does it all. Travel becomes less about logistics and more about the purpose of your trip, which is how it should be.",
      icon: <Plane size={32} />,
      highlights: ["AI flight & hotel search", "Loyalty program tracking", "Human concierge review", "Full itinerary management"]
    },
    {
      title: "Client Communication & Social Media Monitoring",
      tagline: "Never miss a comment, message, or opportunity to engage – your AI aide has an eye on it.",
      description: "In today's world, staying responsive is key to keeping clients happy and maintaining a good reputation. This service provides you with an AI sidekick that keeps an eye on your incoming communications and social media channels, and helps you respond promptly in a warm, professional manner. Here's what it covers: Email and Chat Triage – similar to our email management, the AI will scan incoming client emails or website chat messages and alert you to anything urgent. But more than that, it can draft immediate acknowledgments. For example, a client sends, \"We're experiencing X issue, can you help ASAP?\" even if you're away from your desk, the AI can reply within minutes: \"Hi [Name], I'm sorry you're facing this issue. I'm notifying our team and we'll address this right away.\" This way the client feels heard instantly, and then you can follow up with a fuller response. Social Media Monitoring – the AI hooks into your Facebook, Twitter, or Instagram accounts (or wherever your business has a presence) and watches for direct messages, comments on posts, or mentions of your brand. If someone leaves a comment like \"Really enjoyed your workshop today!\" the AI can prompt you with a quick suggested reply. For inquiries that are general, the AI could even auto-respond based on your guidelines (e.g., someone asks \"What are your opening hours?\" on Facebook – the AI answers immediately with the info). We use natural language understanding models for this, meaning the AI actually \"reads\" the message to grasp sentiment and intent, not just keywords. The best model for friendly interaction we often deploy is based on GPT-4, finely tuned to your style (so it won't sound robotic). All of this is set up with you in control – you decide what the AI replies to directly vs. what it drafts for you to approve. The benefit is huge: customers feel cared for because responses are prompt, and you catch any negative mentions early before they escalate. Their response time on social media went from hours (or next-day) to virtually real-time, and they saw an uptick in customer satisfaction comments as a result. Plus, it takes the mental load off you constantly checking notifications – the AI does the watching, you do the engaging when needed. Together, you form a tag team that keeps your client comms prompt and personable.",
      icon: <MessageCircle size={32} />,
      highlights: ["Real-time social monitoring", "Instant acknowledgment drafts", "Sentiment & intent analysis", "Brand mention alerts"]
    }
  ]

  return (
    <div className="va-page">
      <SEO
        title="AI-Powered Virtual Assistant Services | Nextminds"
        description="Enhance your team with AI-powered virtual assistants. Automate email management, research, travel planning, errands, and client communications with Nextminds."
      />

      {/* Hero */}
      <section className="va-hero container">
        <div className="va-hero-badge">AI Virtual Assistant Services</div>
        <h1>
          Your Workforce, <br />
          <span className="gradient-text">Augmented by AI</span>
        </h1>
        <p className="va-hero-sub">
          Empower your team with always-on digital assistants that handle the routine, complex, and time-consuming tasks with zero downtime — so you can focus on what matters most.
        </p>
        <div className="va-hero-stats">
          <div className="va-stat glass">
            <span className="va-stat-num">24/7</span>
            <span className="va-stat-label">Always Available</span>
          </div>
          <div className="va-stat glass">
            <span className="va-stat-num">5+</span>
            <span className="va-stat-label">Assistant Skills</span>
          </div>
          <div className="va-stat glass">
            <span className="va-stat-num">90%</span>
            <span className="va-stat-label">Less Admin Time</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="va-services container">
        {services.map((service, index) => (
          <div key={index} className="va-service-block">
            <div className="va-service-left">
              <div className="va-service-number">0{index + 1}</div>
              <div className="va-icon-box">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="va-tagline">"{service.tagline}"</p>
              <ul className="va-highlights">
                {service.highlights.map((h, i) => (
                  <li key={i}><CheckCircle size={16} /> {h}</li>
                ))}
              </ul>
            </div>
            <div className="va-service-right glass">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="va-cta container">
        <div className="va-cta-card glass">
          <h2>Ready to Augment Your Team?</h2>
          <p>Get high-level insights, executive support, and personal assistance on demand. Let's talk about what you need help with.</p>
          <Link to="/contact" className="btn-primary">
            Hire AI Assistants <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <style>{`
        .va-page {
          padding-top: 140px;
          min-height: 100vh;
          padding-bottom: 5rem;
        }

        /* ── Hero ── */
        .va-hero {
          text-align: center;
          margin-bottom: 6rem;
        }

        .va-hero-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 0.6rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .va-hero h1 {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .va-hero-sub {
          color: var(--text-muted);
          font-size: 1.25rem;
          max-width: 780px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .va-hero-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .va-stat {
          padding: 1.5rem 2.5rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid var(--border);
          min-width: 160px;
        }

        .va-stat-num {
          display: block;
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #10b981, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.3rem;
        }

        .va-stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* ── Service Blocks ── */
        .va-services {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-bottom: 6rem;
        }

        .va-service-block {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          align-items: start;
        }

        .va-service-block:nth-child(even) {
          direction: rtl;
        }

        .va-service-block:nth-child(even) > * {
          direction: ltr;
        }

        .va-service-left {
          position: relative;
        }

        .va-service-number {
          font-size: 5rem;
          font-weight: 900;
          opacity: 0.06;
          position: absolute;
          top: -20px;
          left: -10px;
          line-height: 1;
          pointer-events: none;
        }

        .va-icon-box {
          width: 65px;
          height: 65px;
          border-radius: 18px;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
        }

        .va-service-left h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          line-height: 1.2;
        }

        .va-tagline {
          font-style: italic;
          color: #10b981;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }

        .va-highlights {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .va-highlights li {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .va-highlights li svg {
          color: #10b981;
          flex-shrink: 0;
        }

        .va-service-right {
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--border);
          transition: border-color 0.3s ease;
        }

        .va-service-right:hover {
          border-color: #10b981;
        }

        .va-service-right p {
          color: var(--text-muted);
          line-height: 1.85;
          font-size: 1.05rem;
        }

        /* ── CTA ── */
        .va-cta {
          margin-bottom: 3rem;
        }

        .va-cta-card {
          text-align: center;
          padding: 5rem 3rem;
          border-radius: 3rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(16, 185, 129, 0.05) 100%);
          border: 1px solid var(--border);
        }

        .va-cta-card h2 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .va-cta-card p {
          color: var(--text-muted);
          font-size: 1.15rem;
          max-width: 650px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .va-hero h1 { font-size: 2.8rem; }

          .va-service-block {
            grid-template-columns: 1fr;
          }

          .va-service-block:nth-child(even) {
            direction: ltr;
          }

          .va-cta-card {
            padding: 3rem 1.5rem;
            border-radius: 2rem;
          }

          .va-cta-card h2 { font-size: 2rem; }
        }

        @media (max-width: 550px) {
          .va-hero h1 { font-size: 2.2rem; }
          .va-hero-stats { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  )
}

export default AIVirtualAssistantPage
