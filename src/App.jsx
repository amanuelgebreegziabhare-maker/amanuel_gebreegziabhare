import { useState } from 'react';
import './styles.css';

const projectList = [
  {
    title: 'Sales Performance Dashboard',
    description:
      'A Power BI dashboard that tracks sales revenue, customer churn, and product performance across regions.',
    link: '#',
  },
  {
    title: 'Executive KPI Report',
    description:
      'An executive report with automated monthly metrics, trend analysis, and visual insights for business operations.',
    link: '#',
  },
  {
    title: 'Customer Analytics Dashboard',
    description:
      'A customer segmentation dashboard built with Power BI and SQL-driven data modeling.',
    link: '#',
  },
];

function App() {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'amanuelgebreegziabhare@gmail.com';
  const [status, setStatus] = useState('idle');

  const [formState, setFormState] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectDetails: '',
    timeline: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/' + contactEmail, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.fullName,
          company: formState.company,
          email: formState.email,
          phone: formState.phone,
          message: formState.projectDetails,
          timeline: formState.timeline,
          _subject: `Portfolio inquiry from ${formState.fullName || 'a visitor'}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setFormState({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        projectDetails: '',
        timeline: '',
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Hello, I'm</p>
          <h1>Amanuel Gebreegziabhare</h1>
          <p className="tagline">
            Data Analyst & Power BI Developer building insights-driven dashboards,
            reports, and analytics solutions.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              View projects
            </a>
            <a className="secondary-btn" href="#resume">
              View resume
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about">
          <h2>About me</h2>
          <p>
            I help organizations turn data into clear, actionable insights. I build
            interactive Power BI dashboards, automate reporting workflows, and use
            analytics to support smarter decision-making.
          </p>
          <ul>
            <li>Business intelligence and data visualization</li>
            <li>Data modeling, ETL, and report automation</li>
            <li>Power BI, SQL, and Excel analytics</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projectList.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <div className="resume-grid">
            <article className="card resume-card">
              <h3>Experience</h3>
              <p>
                Worked on analytics and reporting solutions for sales, customer
                retention, and operational performance using Power BI and SQL.
              </p>
              <ul>
                <li>Created executive dashboards for leadership review</li>
                <li>Built automated reporting flows with Power Query</li>
                <li>Improved data quality through model optimization</li>
              </ul>
            </article>

            <article className="card resume-card">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Power BI</li>
                <li>Microsoft Excel</li>
                <li>SQL</li>
                <li>DAX</li>
                <li>Power Query</li>
                <li>Data Modeling</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            <span>Power BI</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Data Modeling</span>
            <span>DAX</span>
            <span>ETL</span>
            <span>Dashboard Design</span>
            <span>Data Analysis</span>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>If you'd like to work together, please send your details using the
            form below.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company or organization"
                  value={formState.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Optional"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="projectDetails">Project details</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows="5"
                placeholder="Describe your project or data needs"
                value={formState.projectDetails}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="timeline">Desired timeline</label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                placeholder="e.g. 4 weeks"
                value={formState.timeline}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="primary-btn submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'success' && (
              <p className="form-status success">Thanks! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Something went wrong. Please try again later.</p>
            )}
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Amanuel Gebreegziabhare. Built with React and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
