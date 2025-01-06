import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project Title</h3>
          <p>Short description of the project.</p>
          <a href="https://github.com/yourusername/project-repo">
            View on GitHub
          </a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
