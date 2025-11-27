import React from 'react';

export default function App() {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="brand">
          <div className="logo">✦</div>
          <div>
            <h1 className="brand-title">Ace Studios Africa</h1>
            <p className="brand-sub">Futuristic music & innovation hub</p>
          </div>
        </div>

        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#artists">Artists</a>
          <a href="#distribution">Distribution</a>
          <a href="#contact" className="cta">Get Started</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="hero-title">
              The future of African music <span className="accent">built today</span>
            </h2>
            <p className="hero-sub">
              Ace Studios Africa is a tech-first music studio, distribution hub and artist platform. Launch music,
              collaborate and scale with modular tools designed for creators.
            </p>

            <div className="hero-ctas">
              <a href="#contact" className="btn primary">Start a project</a>
              <a href="#artists" className="btn ghost">Explore artists</a>
            </div>

            <div className="features">
              <div className="feature">Instant Deploy</div>
              <div className="feature">Secure by default</div>
              <div className="feature">Modular APIs</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="card">
              <div className="mock-visual"> </div>

              <div className="card-grid">
                <div className="card-item">
                  <h4>Artist Portal</h4>
                  <p>Upload tracks, manage releases, track earnings.</p>
                </div>
                <div className="card-item">
                  <h4>Distribution</h4>
                  <p>Local-first DSP integrations and reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <h3>About Ace Studios Africa</h3>
          <p>We build music technology and artist-first tools with an African perspective. Our hub focuses on secure ownership,
             direct-to-fan distribution and cutting-edge creative tooling.</p>

          <div className="triple">
            <div className="tile">
              <h4>Mission</h4>
              <p>Empower creators with tools that scale from local stages to global platforms.</p>
            </div>
            <div className="tile">
              <h4>Vision</h4>
              <p>A unified African music stack — artist-owned and tech-enabled.</p>
            </div>
            <div className="tile">
              <h4>Values</h4>
              <p>Transparency, Ownership, Innovation.</p>
            </div>
          </div>
        </section>

        <section id="artists" className="section artists">
          <h3>Featured Artists</h3>
          <div className="artist-grid">
            {['Kabelo', 'Nia', 'Thabo'].map((name, i) => (
              <article key={i} className="artist-card">
                <div className="artist-art">{name[0]}</div>
                <h4>{name}</h4>
                <p className="muted">Artist bio placeholder — great for showcasing releases and socials.</p>
                <div className="artist-links">
                  <a href="#">View</a>
                  <a href="#">Listen</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="distribution" className="section distribution">
          <h3>Distribution</h3>
          <p>Modular, API-first distribution modules that let you onboard releases and push to DSPs. Initially this will be a brochure + application flow; later it becomes the backend.</p>

          <div className="triple">
            <div className="tile">
              <h4>Release Manager</h4>
              <p>Create and manage release metadata.</p>
            </div>
            <div className="tile">
              <h4>Artist Admin</h4>
              <p>Invite artists and manage profiles.</p>
            </div>
            <div className="tile">
              <h4>Analytics</h4>
              <p>Revenue and performance dashboards.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h3>Get in touch</h3>
          <p>Interested in collaborating, or want to join the hub? Send us a message.</p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your name" />
            <input placeholder="Email" />
            <textarea placeholder="Message" rows={4}></textarea>
            <div className="form-actions">
              <button className="btn primary">Send message</button>
              <button className="btn ghost">Save draft</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} Ace Studios Africa — Built with ❤️ & code.
      </footer>
    </div>
  );
}
