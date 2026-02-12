import { Link } from 'react-router-dom'
import {
  Zap, Mic, Target, Copy, Dna, Wrench, MessageCircle, Database,
  ArrowRight, CheckCircle
} from 'lucide-react'
import SEO from '../components/SEO'

const AIImplementationPage = () => {
  const services = [
    {
      title: "Workflow Automation (CRM to Calendar and more)",
      tagline: "Let your business software talk to each other – no more double entry or missed info.",
      description: "In many companies, data gets stuck in silos – you add a new client in your CRM, but then you have to manually create a calendar event for their onboarding, for example. We solve this headache through smart workflow automation. Our team will connect your apps (CRM, calendar, email, project management tools – whatever you use) and build automated flows that do the busywork for you. For instance, when a new customer is added, the system could automatically schedule a kickoff meeting on your calendar, send them a welcome email, and update your sales spreadsheet – all in seconds. We often use no-code automation platforms like Zapier or Make, enhanced with AI where needed for decisions (e.g., an AI that reads an email and decides which team member to assign). The \"best model\" here is actually a combination of tools, including an AI that ensures data formats match and information gets routed correctly. The benefit to you is a cohesive, streamlined process – less time on admin, fewer mistakes, and everything updated in real-time. Imagine telling a client, \"I'll send you a meeting invite and details right now,\" and by the time you hang up, our system has already done it. That's the power of workflow automation. It's like having a diligent assistant constantly checking that every T is crossed and I is dotted in your operations. We tailor these automations to how you work, so you remain in control – except now, the tedious stuff happens in the background.",
      icon: <Zap size={32} />,
      highlights: ["CRM + Calendar + Email sync", "No-code automation platforms", "AI-powered routing decisions", "Real-time updates everywhere"]
    },
    {
      title: "Voice AI for Inbound/Outbound Calls",
      tagline: "Give your business a friendly AI voice that can handle calls any time.",
      description: "This innovative service equips you with an AI-powered virtual agent that can make and receive calls on your behalf. For inbound calls: imagine a customer calling after hours – instead of going to voicemail, they're greeted by a polite, natural-sounding AI assistant. Using state-of-the-art voice recognition and speech synthesis models, it can understand the caller's requests and provide answers from your pre-defined info (store hours, appointment bookings, FAQs, etc.), or take a detailed message. For outbound calls: if your business needs to confirm appointments or follow up with clients, the AI agent can call them with a personalized message and interact if the person has questions or needs to reschedule. All of this happens in a very human-like manner – the technology we use is on par with the best virtual assistants (think Siri or Alexa, but trained specifically for your business needs and with a more conversational tone). We ensure the AI's voice fits your brand (you can choose a friendly male or female voice, even different accents). The best part? It never tires, never has a bad day, and can handle multiple calls simultaneously. This means no customer is left waiting on hold and routine calls get handled efficiently. It's an excellent solution if you want to appear always available and responsive, without hiring a 24/7 call center. We'll take care of setup, scripting, and integration – you just pick the scenarios you want it to handle, and our AI voice agent takes it from there.",
      icon: <Mic size={32} />,
      highlights: ["Natural-sounding voice AI", "Inbound & outbound handling", "Custom voice & accent selection", "Multiple simultaneous calls"]
    },
    {
      title: "AI Lead Generation/Processing Systems",
      tagline: "Turbocharge your lead pipeline with automation from end-to-end.",
      description: "This service is about building you a complete lead generation machine powered by AI. We integrate various tools and AI models to not only find and contact leads, but also to process and nurture those leads automatically as they move through your funnel. Think of it as setting up a custom \"lead autopilot\" for your business. For example, imagine capturing leads from your website via a form or chatbot – our system can automatically score these leads (using the AI lead scoring model), enter them into your CRM, and send an immediate personalized welcome email. Then, it might schedule follow-up touchpoints: perhaps an AI-written check-in email if they haven't booked a meeting yet, or a tailored case study sent to them if the AI sees they're in, say, the finance industry. This full-cycle approach ensures no lead is forgotten or dropped. The best models and tools are employed at each stage: from an AI that analyzes which website visitors are high value, to one that generates content that resonates with them, up to AI analytics that tell you which campaign brought the most qualified leads. We essentially implement an AI-powered lead generation framework unique to your business. It's the kind of sophisticated setup large enterprises use (with entire teams tweaking it); we make it accessible and manageable for a small or medium business. The result? A steady, organized flow of leads turning into meetings and sales, with minimal manual effort. You can watch the progress on a simple dashboard we provide, jump in when human touch is needed, and let the system handle the rest.",
      icon: <Target size={32} />,
      highlights: ["Full-funnel lead automation", "Auto-scoring & CRM entry", "AI-written follow-ups", "Real-time dashboard tracking"]
    },
    {
      title: "Personal (Knowledge) Clone Implementation",
      tagline: "Put a copy of your brain to work – even when you're busy or offline.",
      description: "This offering is truly cutting-edge: we create an AI clone of your personal knowledge and style. Here's what that means in practice: we gather the information you want this AI to know (for example, all your blog articles, videos, or documents about how you approach your work) and we train a custom AI model on this data. The result is like a virtual you – an assistant that can answer questions, give advice, or create content just as you would. If you're a consultant, your AI clone could answer common client questions in your tone. If you're a founder, your AI clone could onboard new employees with your philosophy and stories, without you having to repeat yourself. The technology behind this is a fine-tuned version of a large language model (we use top-tier ones like OpenAI's GPT-4) that's been specialized with your content and Q&A pairs we design together. We also integrate it into an easy chat interface or a website widget for you. The best part? It's private and secure – your knowledge model is not shared or used by anyone else. Clients find this exciting because it's like being able to clone their expertise and scale themselves. You can be \"in two places at once\" – let the AI handle routine Q&A or content drafting while you focus on higher-level tasks. And don't worry, it's not a sci-fi scenario where the clone goes rogue; you'll have control and we'll set boundaries for what it should or shouldn't say. Ultimately, this service lets your unique knowledge work harder for you. It's you – just the super-efficient, always-available version of you, powered by AI.",
      icon: <Copy size={32} />,
      highlights: ["Fine-tuned on your content", "Matches your tone & style", "Private & secure model", "Chat or widget interface"]
    },
    {
      title: "Business DNA AI Implementation",
      tagline: "Your company's knowledge, on-demand and intelligent.",
      description: "Every business has a wealth of information – processes, product details, customer service protocols, internal FAQs – its very DNA. We offer a service to encapsulate all of that into a custom AI system. Picture an AI that any employee (or customer, if you choose) can ask a question and get an instant, accurate answer, as if they queried your most experienced team member. To build this, we first gather your business's knowledge: this can be documents, manuals, databases, even interviews with your experts. We then use a robust AI model (similar to how ChatGPT works, but trained specifically on your data) and create a knowledge base that the AI can reference. The outcome is an AI assistant that \"knows\" your business inside-out. New hire has a question about how a certain process works? Ask the AI. Long-time client wants to know if a feature was ever added? Ask the AI. It's available on a chat interface we can embed on your internal systems (or public website, if appropriate). The best model for this is a combination of a language model + vector database (tech jargon you don't need to worry about, except to know it's top-notch and secure). From your perspective, you'll experience something like, \"This AI answers just like my best support rep, and sometimes even cites the exact policy from our handbook.\" By implementing a Business DNA AI, you reduce the time employees spend searching for info or the risk of giving out wrong answers. It's consistency, speed, and accuracy all in one. Plus, we keep it updated – if you change a policy or add a new product, we can quickly feed that info to the AI.",
      icon: <Dna size={32} />,
      highlights: ["Trained on your internal docs", "Embeddable chat interface", "Always up-to-date knowledge", "Employee & customer-facing"]
    },
    {
      title: "Tailored Mini Tools & Apps",
      tagline: "Small AI apps, big impact – built just for you.",
      description: "Sometimes it's the little things that are the biggest hassle – that's where our custom mini tools come in. Do you find yourself doing a repetitive task that eats up time? Perhaps copying data from one system to another, or manually crunching numbers in a report, or repeatedly answering the same question via email. We can create a small-scale AI-powered tool to handle that specific need. These aren't one-size-fits-all softwares, but bespoke mini applications or scripts designed for your workflow. For example, we could build a simple AI script that watches your email for a certain type of request and then automatically pulls the relevant info from your database and replies (saving you from doing it). Or a mini-app on your phone that you can speak a voice note to and, using AI, it logs the message as a task in your project system with proper summary and deadline. We've built things like a \"smart\" Excel macro that uses AI to clean up data entries, and a chatbot for a local retailer that, when asked, generates an on-the-spot stock report by querying their inventory system. The technology behind each mini tool varies – sometimes we use Python with AI libraries, sometimes a platform like Node-RED or a custom integration with an AI API. But you don't need to worry about that; we identify the best way (and best AI model if applicable) to solve your challenge and then make a lightweight, user-friendly tool you can use every day. These mini tools might not sound as grand as full systems, but clients often tell us they're game-changers – because it's a pain point solved.",
      icon: <Wrench size={32} />,
      highlights: ["Bespoke to your workflow", "Lightweight & user-friendly", "Voice-to-task apps", "Smart data scripts"]
    },
    {
      title: "AI Customer Service Chatbot Integration",
      tagline: "Delight your customers with instant answers – no agents required.",
      description: "We integrate AI-driven customer service chatbots into your support channels so you can assist your customers 24/7. These aren't the clunky bots of the past with rigid scripts – we deploy advanced conversational AI (powered by top-tier models like Google Dialogflow or OpenAI) that understands natural language. Ask it \"I need to return an item, how do I do that?\" and it will respond kindly with your return policy steps, even offering to email a return label if that's part of your process. This service includes full setup: we'll train the AI on your FAQs, help center articles, and any product info you provide. It will learn your company's tone (friendly and helpful, we assume!) so the answers feel like they came from a well-trained human rep. We can put this chatbot on your website, inside Facebook Messenger, or even as an SMS assistant – wherever your customers reach out. And if the AI ever gets a question it can't handle, it will politely collect details and forward it to your team to follow up. The best part: it reduces the load on your human support staff by handling the easy stuff, and never takes a coffee break, so customers get immediate responses at 10pm, on weekends, whenever. Plus, it can even proactively help – for instance, popping up to say \"Hi, I see you're looking at our pricing page. Can I help you compare options?\" All done with subtle AI smarts. We take care of continuous improvement too – as you introduce new Q&As or products, we update the bot so it stays on the ball.",
      icon: <MessageCircle size={32} />,
      highlights: ["Natural language understanding", "Multi-channel deployment", "Proactive visitor engagement", "Continuous AI improvement"]
    },
    {
      title: "Automated Data Processing & Reporting",
      tagline: "Transform piles of data into actionable insights, minus the drudgery.",
      description: "If your business deals with forms, reports, or any kind of data entry, you'll love this. We set up AI-powered pipelines that take tedious data processing off your hands. For example, say you receive dozens of customer order forms by email daily. Our solution could automatically read each form (using AI OCR technology to recognize text, even from PDFs or scans), extract key details like name, order, amount, etc., and then update your database or spreadsheet. It could even flag any forms that are missing info and send a polite follow-up email to the customer – all automatically. Similarly, for reporting: if you spend end of month crunching numbers, we can deploy an AI that assembles data from various sources and generates a report for you, complete with highlights or even narratives (\"Sales increased 5% in Niagara region, mainly due to X product\"). The AI model we use for this might be a combination – part data aggregation, part GPT-4-like AI to write summaries. The specific \"best model\" depends on the task: sometimes a straightforward script is enough, other times a learning model does the classification or prediction. We handle those choices; you get the end result. The value here is accuracy, speed, and freeing you and your team from mind-numbing tasks. You'll be able to glance at a dashboard in the morning and trust that all the routine data work was done overnight correctly. It's like having a tireless, ultra-efficient data clerk who never makes a typo, courtesy of AI.",
      icon: <Database size={32} />,
      highlights: ["AI OCR for forms & PDFs", "Auto-generated reports", "Anomaly detection", "Overnight data processing"]
    }
  ]

  return (
    <div className="impl-page">
      <SEO
        title="AI Implementation & Automation Services | Nextminds"
        description="Streamline your workflows with AI-driven automation. Voice AI, knowledge clones, customer chatbots, data processing and more – built for your business."
      />

      {/* Hero */}
      <section className="impl-hero container">
        <div className="impl-hero-badge">AI Implementation & Automation</div>
        <h1>
          Seamless Integration for <br />
          <span className="gradient-text">Hyper-Efficient Operations</span>
        </h1>
        <p className="impl-hero-sub">
          Unlock new levels of productivity by automating repetitive tasks, connecting your tools, and integrating intelligent agents into your core business processes.
        </p>
        <div className="impl-hero-stats">
          <div className="impl-stat glass">
            <span className="impl-stat-num">8+</span>
            <span className="impl-stat-label">Service Offerings</span>
          </div>
          <div className="impl-stat glass">
            <span className="impl-stat-num">100%</span>
            <span className="impl-stat-label">Customized</span>
          </div>
          <div className="impl-stat glass">
            <span className="impl-stat-num">24/7</span>
            <span className="impl-stat-label">AI Availability</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="impl-services container">
        {services.map((service, index) => (
          <div key={index} className="impl-service-block">
            <div className="impl-service-left">
              <div className="impl-service-number">0{index + 1}</div>
              <div className="impl-icon-box">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="impl-tagline">"{service.tagline}"</p>
              <ul className="impl-highlights">
                {service.highlights.map((h, i) => (
                  <li key={i}><CheckCircle size={16} /> {h}</li>
                ))}
              </ul>
            </div>
            <div className="impl-service-right glass">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="impl-cta container">
        <div className="impl-cta-card glass">
          <h2>Ready to Automate Your Business?</h2>
          <p>Let's identify the workflows eating your time and build AI-powered solutions that work for you around the clock.</p>
          <Link to="/contact" className="btn-primary">
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <style>{`
        .impl-page {
          padding-top: 140px;
          min-height: 100vh;
          padding-bottom: 5rem;
        }

        /* ── Hero ── */
        .impl-hero {
          text-align: center;
          margin-bottom: 6rem;
        }

        .impl-hero-badge {
          display: inline-block;
          background: rgba(168, 85, 247, 0.1);
          color: #a855f7;
          padding: 0.6rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(168, 85, 247, 0.2);
        }

        .impl-hero h1 {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .impl-hero-sub {
          color: var(--text-muted);
          font-size: 1.25rem;
          max-width: 780px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .impl-hero-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .impl-stat {
          padding: 1.5rem 2.5rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid var(--border);
          min-width: 160px;
        }

        .impl-stat-num {
          display: block;
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #a855f7, var(--primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.3rem;
        }

        .impl-stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* ── Service Blocks ── */
        .impl-services {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-bottom: 6rem;
        }

        .impl-service-block {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          align-items: start;
        }

        .impl-service-block:nth-child(even) {
          direction: rtl;
        }

        .impl-service-block:nth-child(even) > * {
          direction: ltr;
        }

        .impl-service-left {
          position: relative;
        }

        .impl-service-number {
          font-size: 5rem;
          font-weight: 900;
          opacity: 0.06;
          position: absolute;
          top: -20px;
          left: -10px;
          line-height: 1;
          pointer-events: none;
        }

        .impl-icon-box {
          width: 65px;
          height: 65px;
          border-radius: 18px;
          background: rgba(168, 85, 247, 0.1);
          color: #a855f7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
        }

        .impl-service-left h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          line-height: 1.2;
        }

        .impl-tagline {
          font-style: italic;
          color: #a855f7;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }

        .impl-highlights {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .impl-highlights li {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .impl-highlights li svg {
          color: #a855f7;
          flex-shrink: 0;
        }

        .impl-service-right {
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--border);
          transition: border-color 0.3s ease;
        }

        .impl-service-right:hover {
          border-color: #a855f7;
        }

        .impl-service-right p {
          color: var(--text-muted);
          line-height: 1.85;
          font-size: 1.05rem;
        }

        /* ── CTA ── */
        .impl-cta {
          margin-bottom: 3rem;
        }

        .impl-cta-card {
          text-align: center;
          padding: 5rem 3rem;
          border-radius: 3rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(168, 85, 247, 0.05) 100%);
          border: 1px solid var(--border);
        }

        .impl-cta-card h2 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .impl-cta-card p {
          color: var(--text-muted);
          font-size: 1.15rem;
          max-width: 650px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .impl-hero h1 { font-size: 2.8rem; }

          .impl-service-block {
            grid-template-columns: 1fr;
          }

          .impl-service-block:nth-child(even) {
            direction: ltr;
          }

          .impl-cta-card {
            padding: 3rem 1.5rem;
            border-radius: 2rem;
          }

          .impl-cta-card h2 { font-size: 2rem; }
        }

        @media (max-width: 550px) {
          .impl-hero h1 { font-size: 2.2rem; }
          .impl-hero-stats { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  )
}

export default AIImplementationPage
