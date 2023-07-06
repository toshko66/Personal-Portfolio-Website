import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ projectImage, projectName }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = (event) => {
    event.stopPropagation(); // Stop event propagation
    setExpanded(false);
  };

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`} onClick={handleExpand}>
      {isExpanded && (
        <motion.div
          className="project-overlay-expanded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-photo-overlay">
            <img src={projectImage} alt={projectName} />
          </div>
          <div className="project-details">
            <h2>{projectName}</h2>
            <button className="close-button" onClick={handleCollapse}>
              Close
            </button>
          </div>
        </motion.div>
      )}
      <img src={projectImage} alt={projectName} />
      <div className="project-overlay">
        <h3>Click to expand</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
