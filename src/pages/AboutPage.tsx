import {
    History,
    Target,
    Users,
    Award,
    ArrowRight
} from 'lucide-react'

import SEO from '../components/SEO'

const AboutPage = () => {
    const stats = [
        { label: "Years Experience", value: "20+" },
        { label: "Projects Completed", value: "500+" },
        { label: "Satisfied Clients", value: "200+" },
        { label: "AI Solutions", value: "50+" }
    ]

    const values = [
        {
            title: "Innovation First",
            icon: <Target className="text-secondary" />,
            text: "We constantly push the boundaries of what's possible with AI and digital technology."
        },
        {
            title: "Quality Assurance",
            icon: <Award className="text-primary" />,
            text: "Every project undergoes rigorous human review to ensure perfection."
        },
        {
            title: "Long-term Partnerships",
            icon: <Users className="text-accent" />,
            text: "We don't just build products; we build relationships that last decades."
        },
        {
            title: "Expertise & History",
            icon: <History className="text-primary" />,
            text: "Registered since 2001, we bring two decades of proven industry knowledge."
        }
    ]

    return (
        <div className="about-page" style={{ paddingTop: '120px' }}>
            <SEO
                title="Our Story & Values"
                description="Registered in 2001, Nextminds has evolved from a digital agency to an AI integration powerhouse. Learn about our mission and history."
            />
            <section className="about-hero">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem' }}>
                            About <span className="gradient-text">Nextminds</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            We are a dynamic team of innovators dedicated to providing comprehensive business solutions
                            that bridge the gap between cutting-edge AI technology and human excellence.
                        </p>
                    </div>

                    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '5rem' }}>
                        {stats.map((stat, i) => (
                            <div key={i} className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div className="gradient-text" style={{ fontSize: '3rem', fontWeight: 900 }}>{stat.value}</div>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-story" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                        <div className="glass" style={{ height: '450px', backgroundImage: 'url("/logo.png")', backgroundSize: '30%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our <span className="gradient-text">Story</span></h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                Registered in 2001, Nextminds Business Solutions was founded on the principle that technology should empower, not replace, human creativity. Over the last 20 years, we have evolved from a traditional digital agency into a powerhouse of AI integration.
                            </p>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                We recognize that every company is different, which is why we take the time to understand your company, your target market, and your objectives. Our unique blend of AI technology and human quality assurance ensures you receive the highest quality results with faster turnaround times.
                            </p>
                            <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Learn More <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-values" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Our Core <span className="gradient-text">Values</span></h2>
                    </div>
                    <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        {values.map((v, i) => (
                            <div key={i} className="glass" style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '1rem' }}>{v.icon}</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.8rem', fontSize: '1.3rem' }}>{v.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{v.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutPage
