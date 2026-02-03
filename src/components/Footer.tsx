const Footer = () => {
    return (
        <footer className="footer" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', marginTop: '4rem' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="logo-text" style={{ justifyContent: 'center', marginBottom: '1.5rem', display: 'flex', textTransform: 'uppercase', fontWeight: 800, fontSize: '1.4rem' }}>
                    <span className="logo-main" style={{ color: 'var(--primary)' }}>Next</span>
                    <span className="logo-sub" style={{ color: 'var(--accent)' }}>minds</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Copyright © 2001 – 2026 Nextminds Business Solutions. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
