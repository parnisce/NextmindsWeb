import { Link } from 'react-router-dom'
import {
    Menu,
    X,
    Sun,
    Moon,
    ChevronDown
} from 'lucide-react'

interface NavbarProps {
    theme: string
    toggleTheme: () => void
    mobileMenuOpen: boolean
    setMobileMenuOpen: (open: boolean) => void
}

const Navbar = ({ theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) => {
    return (
        <>
            <nav className="nav">
                <div className="nav-pill">
                    <Link to="/" className="logo">

                        <div className="logo-text">
                            <span className="logo-main">Next</span>
                            <span className="logo-sub">minds</span>
                        </div>
                    </Link>
                    <div className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        <div className="nav-item-dropdown">
                            <Link to="/services" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                Services <ChevronDown size={16} />
                            </Link>
                            <div className="dropdown-menu">
                                <Link to="/ai-services" className="dropdown-link">
                                    AI Agent Development
                                    <span>Custom AI for your business</span>
                                </Link>
                                <Link to="/digital-agency" className="dropdown-link">
                                    Digital Agency Services
                                    <span>Web, Design & Marketing</span>
                                </Link>
                                <Link to="/real-estate-media" className="dropdown-link">
                                    Real Estate Media
                                    <span>Cinematic & 3D Tours</span>
                                </Link>
                                <Link to="/professional-media" className="dropdown-link">
                                    Professional Media Production
                                    <span>Commercials & Course Creation</span>
                                </Link>
                                <Link to="/services" className="dropdown-link" style={{ borderTop: '1px solid var(--border)', marginTop: '0.5rem', paddingTop: '0.8rem' }}>
                                    All Services
                                    <span>Explore our full expertise</span>
                                </Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                    <div className="nav-actions">
                        <Link to="/contact" className="btn-talk">Let's talk</Link>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className="mobile-toggle md-hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay glass" style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '5rem 2rem' }}>
                    <button className="mobile-toggle" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} onClick={() => setMobileMenuOpen(false)}>
                        <X size={32} />
                    </button>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.5rem', fontWeight: 600 }}>
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Services</div>
                            <Link to="/ai-services" style={{ paddingLeft: '1rem' }} onClick={() => setMobileMenuOpen(false)}>AI Agent Development</Link>
                            <Link to="/digital-agency" style={{ paddingLeft: '1rem' }} onClick={() => setMobileMenuOpen(false)}>Digital Agency</Link>
                            <Link to="/real-estate-media" style={{ paddingLeft: '1rem' }} onClick={() => setMobileMenuOpen(false)}>Real Estate Media</Link>
                            <Link to="/professional-media" style={{ paddingLeft: '1rem' }} onClick={() => setMobileMenuOpen(false)}>Professional Media</Link>
                            <Link to="/services" style={{ paddingLeft: '1rem', fontSize: '1.1rem', opacity: 0.7 }} onClick={() => setMobileMenuOpen(false)}>View All Services</Link>
                        </div>

                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        <Link to="/contact" className="btn-talk" style={{ marginTop: '1rem', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Let's talk</Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
