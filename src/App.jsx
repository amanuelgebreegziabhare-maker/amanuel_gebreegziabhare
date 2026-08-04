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
          <p>If you'd like to work together, let's connect.</p>
          <a className="secondary-btn" href="mailto:amanuelgebreegziabhare@gmail.com">
            Email me
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Amanuel Gebreegziabhare. Built with React and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
