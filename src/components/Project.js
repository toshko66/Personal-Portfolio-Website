import React from 'react';
import Project from './Projects';
import '../css/Projects.css';

function Project() {
  const project = [
    { name: 'Project 1', photo: 'path/to/project1.png' },
    { name: 'Project 2', photo: 'path/to/project2.png' },
    { name: 'Project 3', photo: 'path/to/project3.png' },
    // Add more project as needed
  ];

  return (
    <section id="project-section">
      <h2>Projects</h2>
      <div className="project-row">
        {project.map((project, index) => (
          <Project key={index} name={project.name} photo={project.photo} />
        ))}
      </div>
    </section>
  );
}

export default Project;
