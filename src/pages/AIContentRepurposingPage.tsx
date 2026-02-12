import { Link } from 'react-router-dom'
import {
  Video, Newspaper, Shield, Clapperboard, Languages, Share2,
  ArrowRight, CheckCircle
} from 'lucide-react'
import SEO from '../components/SEO'

const AIContentRepurposingPage = () => {
  const services = [
    {
      title: "Long-Form to Short-Form Video Conversion",
      tagline: "Turn your lengthy videos into snackable clips that everyone wants to watch.",
      description: "Have a 60-minute webinar or a recorded Zoom talk? We'll make sure it doesn't collect dust. Our service uses AI-powered video editing tools to find the golden nuggets in your long-form video content and chop them into engaging short videos perfect for TikTok, Instagram Reels, YouTube Shorts – you name it. The AI helps by quickly transcribing the video and identifying highlights (for example, detecting when the crowd laughed or when a slide with key info appeared). Then our team, with your guidance, fine-tunes those selections and adds captions, your branding, and any music or graphics to make the clips pop. The result: instead of one video with maybe a few hundred views, you get dozens of bite-sized clips that can each attract viewers on various platforms. One recent client had a 30-minute product demo video; we carved it into ten dynamic clips (ranging from 30 seconds to 2 minutes each), each focusing on a specific cool feature or FAQ. The views across all clips were 10x what the full video got! Importantly, we keep your voice and message intact – every clip feels consistent with your brand. The AI model we leverage ensures we don't miss the good bits, and it even suggests on-screen text or emojis for emphasis, which we can include as appropriate. This service basically lets you recycle one video into a month's worth of social content, amplifying your reach without new filming. It's efficient, it's creative, and it helps you meet that \"show up everywhere\" goal with minimal effort on your part.",
      icon: <Video size={32} />,
      highlights: ["AI-powered highlight detection", "TikTok, Reels & Shorts ready", "Branded captions & graphics", "10x reach from one video"]
    },
    {
      title: "Podcast-to-Newsletter/Carousel Transformation",
      tagline: "Give your audio content a second life in print and pictures.",
      description: "If you're a podcaster or you produce webinars/online talks, this service is for you. We take your audio or video recordings and repurpose them into written articles, email newsletters, and even eye-catching carousel posts for LinkedIn/Instagram. Here's how it works: first, we use an AI transcription model (like OpenAI's Whisper) to get an accurate transcript of your talk. Then, our AI-assisted summarizer distills that into a well-structured draft – pulling out the key points, actionable tips, or interesting quotes. Our content writers (humans with a knack for your industry) then step in to refine that draft, ensuring it reads smoothly and retains your voice. The final newsletter might be titled something like \"5 Takeaways from [Your Name]'s Latest Podcast on [Topic]\" – easy for your audience to digest even if they didn't catch the audio. For carousel posts (the slideshow-style posts on social media), we pick the most impactful quotes or tips and lay them out across a series of slides, accompanied by graphics or photos (we can use your branding). AI tools help here too, suggesting relevant icons or images to pair with text. The \"best model\" at play in this service is the combination of AI summarization and natural language generation to ensure the written content is on-point. But we always add a human touch to make it truly shine. The end result: your ideas reach people who prefer reading or visual content, not just those who listen. In short, we make sure each episode or talk you give keeps working for you across multiple channels, using AI to accelerate the heavy lifting of writing and designing.",
      icon: <Newspaper size={32} />,
      highlights: ["AI transcription via Whisper", "Newsletter & article drafts", "LinkedIn/Instagram carousels", "Human-refined final output"]
    },
    {
      title: "Brand-Aligned AI Editing",
      tagline: "Stay on brand, no matter how your content is created.",
      description: "Consistency is key in content marketing – your videos, posts, and articles should all feel like you. Our brand-aligned AI editing service ensures that happens, even when AI is involved in creation. Essentially, we've got an AI \"style checker\" (custom-trained on your past content and style guides) that reviews any content we or you generate. Whether it's a blog post draft from GPT-4 or a video caption auto-generated, this AI compares it against your known tone, vocabulary, and design preferences. It flags anything that's \"off-brand\" – maybe the language is too formal, whereas you're usually casual and witty, or perhaps the colors on an AI-created graphic aren't the ones you typically use. Then our human editors step in to make adjustments per those flags. The result is content that feels like you made it from scratch, even if AI did a first pass. We also use AI tools like Descript and Canva's AI features to expedite editing while maintaining your style. For example, Descript can quickly remove filler words or dead air from your videos/podcasts without affecting your speaking style. Or an AI image tool might generate a few social post background options which we then tweak to match your brand colors and fonts exactly. The \"best model\" here is less about a single model and more about a tailored system: we might employ GPT-4 with a prompt engineered to mimic your style for text editing, or a computer vision model to ensure your logo placement is correct in visuals. The bottom line: you get all the speed benefits of AI in content production, without the risk of drifting away from your brand identity. It's like having an automated brand guardian that works alongside our creative team.",
      icon: <Shield size={32} />,
      highlights: ["Custom AI style checker", "Tone & vocabulary matching", "Automated brand guardian", "Human editor refinement"]
    },
    {
      title: "Video Clone Implementation",
      tagline: "Be in multiple videos at once – without endless filming days.",
      description: "This fascinating service uses AI to create a virtual \"clone\" of you on video, sometimes known as an AI avatar. Imagine having a digital version of yourself (your likeness and voice) that can speak on camera exactly as you would. With our video clone implementation, we can produce videos of \"you\" delivering scripts that you might not have had time to record in person. How it works: we'd schedule a session to capture footage and audio of you (or whoever will be the avatar) – or use existing video if available – to train the AI. We use one of the best AI video generation platforms to create the avatar model. Once that's done, producing a new video is as easy as typing a script and letting the AI render it with your clone speaking. Of course, we manage all of this behind the scenes and ensure the output looks and sounds natural. Why would you want this? Think about FAQs, personalized messages, or content in other languages – you can \"scale\" your presence. A realtor, for instance, used our service to generate weekly market update videos where her AI clone gives the update – she only needs to approve the script we prepare, and the clone does the talking head part. It looks just like her regular videos, and she keeps her audience engagement without spending hours on camera every week. We take great care with ethical considerations too: your clone is securely used only for your content, and we get your sign-off on every script. The best models we use ensure lip-sync and voice tone are highly realistic. It's a cutting-edge, wow-factor use of AI, but also incredibly practical for content creators and businesses. You maintain a personal touch on video, at scale.",
      icon: <Clapperboard size={32} />,
      highlights: ["AI avatar of your likeness", "Script-to-video in minutes", "Realistic lip-sync & voice", "Secure & ethical usage"]
    },
    {
      title: "AI Translation & Localization",
      tagline: "Speak your customers' language – literally – with a little help from AI.",
      description: "Southern Ontario is a diverse market, and reaching people in their preferred language can be a huge advantage. Our AI translation and localization service takes your existing content (blogs, videos, marketing copy) and converts it for different languages and locales, quickly and accurately. We utilize advanced translation models (like DeepL's AI and Google's neural translators) which have become remarkably good at not just translating words, but preserving tone and context. Of course, we also involve human linguists to double-check and polish the output, especially for nuances and cultural correctness – the combination gives the best of both worlds. For example, let's say you have a great English explainer video for your service. We can generate subtitles in French and Mandarin for the video using AI, and even dub the audio using a voice model that matches your speaker's voice in those languages! (Imagine your own voice speaking French – the tech is there, and we harness it responsibly.) We'll also adjust any idioms or references to make sense locally (this is the localization part). Businesses serving lots of international customers found this service super helpful – one client's promotional materials were translated into six languages, allowing them to connect with operators and customers overseas. The \"best model\" for pure translation we use might be DeepL for its fluency, but we always layer in our expertise in marketing to ensure the message hits home the way it should. The bottom line: you can instantly expand your reach and make customers feel at home, all without hiring a full translation department.",
      icon: <Languages size={32} />,
      highlights: ["Multi-language content", "AI voice dubbing", "Cultural localization", "Human linguist review"]
    },
    {
      title: "AI Social Media Micro-Content Generation",
      tagline: "Never run out of things to post – let AI help turn one idea into dozens of posts.",
      description: "Consistency on social media is key, but creating fresh content daily is hard. This service takes a piece of your long-form content (a blog post, an article, a video, etc.) and explodes it into a bundle of bite-sized social media posts tailored for platforms like Twitter (X), Facebook, LinkedIn, or Instagram. Suppose you have an insightful 1000-word blog article – we'd feed it into our AI content engine, which might use a model like GPT-4, and it will generate a series of suggestions: maybe 5 tweet-sized insights, 2 LinkedIn post drafts (which are a bit longer, more professional tone), a couple of Facebook posts highlighting different angles, and perhaps a few inspirational quote graphics for Instagram. Our team then curates and edits these suggestions, aligning them with your brand voice (with help from our brand-alignment AI checks) and making sure they're accurate and engaging. We then hand them over to you in a calendar format – you might suddenly have two weeks' worth of daily social content, all derived from that single blog post you wrote. The service essentially multiplies your content output without multiplying your work. Many coaches and experts have found this a lifesaver – they produce one big piece of content a month (like a video or article) and we help keep their social feeds active every day with derivative content from that. The AI model behind the scenes excels at summarizing and rephrasing key points in catchy ways, but we ensure everything still sounds human. It's a friendly collaboration between AI and our copywriters. With this, you stay top-of-mind for your audience and drive more traffic back to your main content, while eliminating the stress of \"What do I post today?\".",
      icon: <Share2 size={32} />,
      highlights: ["One article → dozens of posts", "Platform-specific formatting", "Content calendar delivery", "AI + human copywriting"]
    }
  ]

  return (
    <div className="repurpose-page">
      <SEO
        title="AI Content Repurposing Services | Nextminds"
        description="Amplify your content reach. Repurpose videos, podcasts, and articles into multi-channel assets with AI-driven content engines. One idea, infinite reach."
      />

      {/* Hero */}
      <section className="rp-hero container">
        <div className="rp-hero-badge">AI Content Repurposing</div>
        <h1>
          One Idea, <br />
          <span className="gradient-text">Infinite Reach</span>
        </h1>
        <p className="rp-hero-sub">
          Transform a single piece of content into a month's worth of multi-platform assets. Our AI engines handle the heavy lifting while you focus on the message.
        </p>
        <div className="rp-hero-stats">
          <div className="rp-stat glass">
            <span className="rp-stat-num">10x</span>
            <span className="rp-stat-label">Content Output</span>
          </div>
          <div className="rp-stat glass">
            <span className="rp-stat-num">6+</span>
            <span className="rp-stat-label">Platform Formats</span>
          </div>
          <div className="rp-stat glass">
            <span className="rp-stat-num">100%</span>
            <span className="rp-stat-label">On-Brand</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="rp-services container">
        {services.map((service, index) => (
          <div key={index} className="rp-service-block">
            <div className="rp-service-left">
              <div className="rp-service-number">0{index + 1}</div>
              <div className="rp-icon-box">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="rp-tagline">"{service.tagline}"</p>
              <ul className="rp-highlights">
                {service.highlights.map((h, i) => (
                  <li key={i}><CheckCircle size={16} /> {h}</li>
                ))}
              </ul>
            </div>
            <div className="rp-service-right glass">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="rp-cta container">
        <div className="rp-cta-card glass">
          <h2>Ready to Scale Your Content?</h2>
          <p>Get consistency at scale, guaranteed by AI. Let's turn your best ideas into multi-channel campaigns.</p>
          <Link to="/contact" className="btn-primary">
            Start Repurposing <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <style>{`
        .repurpose-page {
          padding-top: 140px;
          min-height: 100vh;
          padding-bottom: 5rem;
        }

        /* ── Hero ── */
        .rp-hero {
          text-align: center;
          margin-bottom: 6rem;
        }

        .rp-hero-badge {
          display: inline-block;
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
          padding: 0.6rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .rp-hero h1 {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .rp-hero-sub {
          color: var(--text-muted);
          font-size: 1.25rem;
          max-width: 750px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .rp-hero-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .rp-stat {
          padding: 1.5rem 2.5rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid var(--border);
          min-width: 160px;
        }

        .rp-stat-num {
          display: block;
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.3rem;
        }

        .rp-stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* ── Service Blocks ── */
        .rp-services {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-bottom: 6rem;
        }

        .rp-service-block {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          align-items: start;
        }

        .rp-service-block:nth-child(even) {
          direction: rtl;
        }

        .rp-service-block:nth-child(even) > * {
          direction: ltr;
        }

        .rp-service-left {
          position: relative;
        }

        .rp-service-number {
          font-size: 5rem;
          font-weight: 900;
          opacity: 0.06;
          position: absolute;
          top: -20px;
          left: -10px;
          line-height: 1;
          pointer-events: none;
        }

        .rp-icon-box {
          width: 65px;
          height: 65px;
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
        }

        .rp-service-left h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          line-height: 1.2;
        }

        .rp-tagline {
          font-style: italic;
          color: #f59e0b;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }

        .rp-highlights {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .rp-highlights li {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .rp-highlights li svg {
          color: #f59e0b;
          flex-shrink: 0;
        }

        .rp-service-right {
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--border);
          transition: border-color 0.3s ease;
        }

        .rp-service-right:hover {
          border-color: #f59e0b;
        }

        .rp-service-right p {
          color: var(--text-muted);
          line-height: 1.85;
          font-size: 1.05rem;
        }

        /* ── CTA ── */
        .rp-cta {
          margin-bottom: 3rem;
        }

        .rp-cta-card {
          text-align: center;
          padding: 5rem 3rem;
          border-radius: 3rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(245, 158, 11, 0.05) 100%);
          border: 1px solid var(--border);
        }

        .rp-cta-card h2 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .rp-cta-card p {
          color: var(--text-muted);
          font-size: 1.15rem;
          max-width: 650px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .rp-hero h1 { font-size: 2.8rem; }

          .rp-service-block {
            grid-template-columns: 1fr;
          }

          .rp-service-block:nth-child(even) {
            direction: ltr;
          }

          .rp-cta-card {
            padding: 3rem 1.5rem;
            border-radius: 2rem;
          }

          .rp-cta-card h2 { font-size: 2rem; }
        }

        @media (max-width: 550px) {
          .rp-hero h1 { font-size: 2.2rem; }
          .rp-hero-stats { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  )
}

export default AIContentRepurposingPage
