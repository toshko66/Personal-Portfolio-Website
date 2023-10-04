
import './CSS Files/projects.css';

import ecommerce from './Images/E-commerce.png'
import summerize from './Images/Summerize.png'
import calendar from './Images/Calendar.png';
import discord from './Images/DiscordBot.png';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ title, imageSrc, githubLink, technologies, description }) {
  return (
    <div className='project'>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className='images' src={imageSrc} alt={title} />
      </a>
      <div className='project-info'>
        <div className='project-title'>
          <h2>{title}</h2>
          <div className='liness'></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3><span style={{ color: '#FF004F' }}>{technologies}</span></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id='Projects'>
      <h1 className='title'>
        My Projects <span style={{ color: '#FF004F' }}>.</span>{' '}
      </h1>
      <div className='projects-wrapper'>
        <ProjectCard
          title="E-commerce"
          imageSrc={ecommerce}
          githubLink="https://c4-nexus-ecommerce.vercel.app/category/jewelery"
          technologies="React,React Router,Material-UI,Axios,CSS"
          description="The E-Commerce Product Catalog React App is a training project that demonstrates e-commerce features. Users can explore products, view details, sort, filter, and add items to a cart"
        />

        <ProjectCard
          title="AI-Summerizer      "
          imageSrc={summerize}
          githubLink="https://github.com/toshko66/AISummerizer"
          technologies="React,Redux,Redux Toolkit,Tailwind CSS,Article Extractor and Summarizer API (RapidAPI)"
          description="The project employs OpenAI's API to generate summerize large chunk of text. It utilizes Rapid API to present users with summery of the demanded article, allowing them to take only the essential information."
        />

        <ProjectCard
          title="Responsive Web Development"
          imageSrc={calendar}
          githubLink="https://github.com/toshko66/Smaller-Projects/tree/main/Vet%20clinic"
          technologies="HTML, CSS, jQuery"
          description="Transforming beautifully crafted PSD designs into functional and responsive web pages. My goal is to bring your vision to life on the web, ensuring pixel-perfect precision and a seamless user experience. With expertise in HTML and CSS, we convert static designs into dynamic, interactive, and visually stunning websites that engage and captivate your audience."
        />

        <ProjectCard
          title="Crown Clothing "
          imageSrc={discord}
          githubLink="https://github.com/toshko66/crwn-clothing.git"
          technologies="React, Firebase, Styled Components"
          description="A full-stack Ecommerce website utilising firebase autentication methods as well as noSQL firabase storage.As a larger more scalable project it helped me develope better arhitecture and overall state and data management"
        />

      </div>
    </div>
  );
}

export default Projects;
