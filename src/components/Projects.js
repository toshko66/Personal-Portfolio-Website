import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Rating from './Rating';

import '../css/Projects.css';
import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import ProjectCard from './ProjectCard';

function Projects() {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = (event) => {
    event.stopPropagation(); // Stop event propagation
    setExpanded(false);
  };

  return (
    <section id="projects-section">
      <h2 className='Projects-title'>Projects</h2>
      <div className='projects-wrapper'>
        <div className="project-column">
          <ProjectCard
            projectImage={projectImage1}
            projectName="Pet Health Center"
            isExpanded={isExpanded}
            handleExpand={handleExpand}
            handleCollapse={handleCollapse}
          />
          <ProjectCard
            projectImage={projectImage2}
            projectName="Hiking Club "
            isExpanded={isExpanded}
            handleExpand={handleExpand}
            handleCollapse={handleCollapse}
          />
          <ProjectCard
            projectImage={projectImage3}
            projectName="Data managment App"
            isExpanded={isExpanded}
            handleExpand={handleExpand}
            handleCollapse={handleCollapse}
          />
        </div>
          <div className='projects-info'>
            <p className='info-p'> 🚀 These projects represent some of my early works as I embark on my programming journey. They serve as a testament to my learning and growth in the exciting world of web development. 💻🌱
              Rest assured, I am currently working on bigger and more complex projects that challenge my skills and push me to new heights! 📈 Stay tuned for the amazing things I have in store! ✨🔥
            </p>
            <Rating/>
          </div> 
      </div>
    </section>
  );
}

export default Projects;
