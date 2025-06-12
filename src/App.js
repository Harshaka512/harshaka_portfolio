import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero">
        <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Harshaka Herath" className="profile-img" />
        <h1>HARSHAKA HERATH</h1>
        <h2>STUDENT INTERN - SOFTWARE ENGINEER</h2>
        <h3>(UNDERGRADUATE)</h3>
      </section>

      {/* About Me */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          As a 3rd-year undergraduate pursuing a BSc (Hons) in Information Technology specializing in Information Technology at SLIIT, I am a proactive learner with a strong analytical mindset. I am passionate about designing and developing efficient software solutions, solving complex technical challenges, and collaborating effectively in teams to build innovative applications. I thrive in dynamic environments and continuously seek opportunities to enhance my programming skills, problem-solving abilities, and software development expertise.
        </p>
      </section>

      {/* Academic Qualifications */}
      <section className="academics">
        <h2>Academic Qualifications</h2>
        <ul>
          <li><b>Sri Lanka Institute of Information Technology (SLIIT)</b><br/>Kandy | Colombo | 3rd Year<br/>Faculty Of Computing<br/>Information Technology</li>
          <li><b>Dharmaraja College</b><br/>Kandy | 2021<br/>Advance Level - Commerce Stream</li>
          <li><b>Sri Chandananda Buddhist College</b><br/>Kandy | 2018<br/>Ordinary Level</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Online Laundry Management System</h3>
            <p>My Contribution: Cart Management</p>
            <p>Technologies: JavaScript, PHP, HTML, CSS, MySQL</p>
          </div>
          <div className="project-card">
            <h3>Online Hotel Reservation System</h3>
            <p>My Contribution: Booking Management</p>
            <p>Technologies: Java, JavaScript, HTML, CSS</p>
          </div>
          <div className="project-card">
            <h3>Online Glass Inventory Management System</h3>
            <p>My Contribution: Maintenance and Repair</p>
            <p>Technologies: MERN Stack, HTML, CSS</p>
          </div>
          <div className="project-card">
            <h3>Task App</h3>
            <p>Developed a mobile application using Kotlin in Android Studio for managing tasks. Implemented features such as adding, editing, deleting, and searching notes with data stored locally using Shared Preferences.</p>
          </div>
          <div className="project-card">
            <h3>Online Food Donation System</h3>
            <p>My Contribution: Food Donation Submission Management</p>
            <p>Technologies: MERN Stack, HTML, CSS</p>
          </div>
          <div className="project-card">
            <h3>Cooking Skill Sharing Platform</h3>
            <p>My Contribution: User Interactivity & Engagement</p>
            <p>Technologies: Java (SpringBoot), React js, HTML, CSS</p>
          </div>
          <div className="project-card">
            <h3>Mini Blog Shopping Cart</h3>
            <p>Technologies: JavaScript, PHP, HTML, CSS, MySQL</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-columns">
          <div>
            <h4>Soft Skills</h4>
            <ul>
              <li>People Leadership</li>
              <li>Data Analysis</li>
              <li>Budgeting</li>
              <li>Strategic Planning</li>
              <li>Long Term Planning</li>
              <li>Regulatory Compliance</li>
            </ul>
          </div>
          <div>
            <h4>Programming Skills</h4>
            <ul>
              <li>C, C++</li>
              <li>HTML, CSS</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Kotlin</li>
              <li>MERN Stack</li>
              <li>MySQL</li>
              <li>Python</li>
              <li>Power BI</li>
              <li>R</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="languages">
        <h2>Languages</h2>
        <ul>
          <li>Sinhala</li>
          <li>English</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>📞 +94 76 698 1768</li>
          <li>✉️ herathharshaka@gmail.com</li>
          <li>🏠 No 27, New Town, Teldeniya</li>
          <li>🔗 <a href="http://www.linkedin.com/in/harshaka-herath-aa3413324" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li>💻 <a href="https://github.com/Harshaka512" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Harshaka Herath. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
