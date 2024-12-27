import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../assets/common/ProjectCard';
import shoezly from '../../assets/man.avif';
import car from '../../assets/car.jpeg';
import spt from '../../assets/spotify.png';
import shs from '../../assets/SmartHome.webp';
import gay from '../../assets/Rproject1.jpeg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <h2 className="sectionTitle"> R </h2>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={gay}
          link="https://github.com/Omranhariri/Spotify--Power-BI-Project/blob/main/README.md"
          h3="Housing Price Prediction"
        
        />
      </div>
      <h2 className="sectionTitle">PowerBI</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={spt}
          link="https://github.com/Omranhariri/Spotify--Power-BI-Project/blob/main/README.md"
          h3="Spotify Streams Report"
       
        />
         <ProjectCard
          src={shs}
          link="https://github.com/Omranhariri/Smart-House"
          h3="Smart Home Adoption Analytics"
       
        />
        </div>
        <h2 className="sectionTitle">Excel</h2>
        <div className={styles.projectsContainer}>
           <ProjectCard
          src={car}
          link="https://github.com/Omranhariri/Car-Accidents---Excel---Project/blob/main/README.md"
          h3="Road Accident Dashboard"
         
        />
         <ProjectCard
          src={shoezly}
          link="https://github.com/Omranhariri/User-Behavior--Excel--Project/blob/main/README.md"
          h3="User Behavior Dashboard"
        
        />
        </div>
    </section>
  );
}

export default Projects;