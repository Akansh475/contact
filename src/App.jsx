import React from "react";
import "./index.css";

function App() {
  return (
    <div className="app">

      {/* Hero */}
      <div className="hero fade-in">
        <h1>About Our Platform</h1>
        <p>Building trust between students and mess services</p>
      </div>

      <div className="container">

        {/* Who We Are */}
        <section className="fade-up">
          <h2>Who We Are</h2>

          <p>
            We are a student-led initiative focused on helping students
            discover reliable and affordable mess services.
          </p>

          <p>
            Our platform connects students with verified mess providers
            using honest reviews, transparent menus, and real experiences.
          </p>
        </section>

        {/* Mission */}
        <section className="fade-up delay-1">
          <h2>Our Mission</h2>

          <p>
            To simplify daily food decisions by providing accurate,
            trusted, and easy-to-access mess information.
          </p>

          <h2>Our Vision</h2>

          <p>
            To become India’s most trusted student food discovery platform.
          </p>
        </section>

        {/* Work */}
        <section className="fade-up delay-2">
          <h2>What We Do</h2>

          <div className="work-cards">

            <div className="work-card">Verified Listings</div>
            <div className="work-card">Student Reviews</div>
            <div className="work-card">Menu Transparency</div>
            <div className="work-card">Smart Search</div>

          </div>
        </section>

        {/* Team */}
        <section className="fade-up delay-3">
          <h2>Our Team</h2>

          <div className="team-cards">

            <div className="team-card">
              <h3>Ashish Rautela</h3>
              <p>Founder & Debugging</p>
              <a href="https://www.linkedin.com/in/ashish-rautela-82322b33a/">LinkedIn</a>
            </div>

            <div className="team-card">
              <h3>Sahil Negi</h3>
              <p>Backend Developer</p>
              <a href="https://www.linkedin.com/in/sahil-negi-585a26315/">LinkedIn</a>
            </div>

            <div className="team-card">
              <h3>Akansh Mehra</h3>
              <p>UI Designer</p>
              <a href="https://www.linkedin.com/in/akansh-mehra-944901261/">LinkedIn</a>
            </div>

            <div className="team-card">
              <h3>Yuvraj Kabadwal</h3>
              <p>Frontend Developer</p>
              <a href="https://www.linkedin.com/in/yuvraj-kabadwal-551678324/">LinkedIn</a>
            </div>

            {/* Centered Last Card */}
            <div className="team-card center-card">
              <h3>Naitik Dhiman</h3>
              <p>Content & Research</p>
              <a href="#https://www.linkedin.com/in/naitik-dhiman-85798b323/">LinkedIn</a>
            </div>

          </div>
        </section>

      </div>

      {/* Footer */}
      <footer>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Contacts</span>
      </footer>

    </div>
  );
}

export default App;
