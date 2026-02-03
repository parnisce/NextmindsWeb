import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import AIServicesPage from './pages/AIServicesPage'
import DigitalAgencyPage from './pages/DigitalAgencyPage'
import RealEstateMediaPage from './pages/RealEstateMediaPage'
import ProfessionalMediaPage from './pages/ProfessionalMediaPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      setTimeout(() => {
        setFollowerPos({ x: e.clientX, y: e.clientY })
      }, 50)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Custom Cursor */}
        <div className="custom-cursor" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>
        <div className="custom-cursor-follower" style={{ left: `${followerPos.x}px`, top: `${followerPos.y}px` }}></div>

        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/digital-agency" element={<DigitalAgencyPage />} />
          <Route path="/real-estate-media" element={<RealEstateMediaPage />} />
          <Route path="/professional-media" element={<ProfessionalMediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
