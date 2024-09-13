import styles from './Education.module.css';
import ProjectCard from '../../assets/common/ProjectCard';
import car from '../../assets/aub logo.jpg';
import spt from '../../assets/rhu.jpg';

function Education() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Education</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={car}
          h3="American University of Beirut(AUB)"
          p="Msc. Business Analytics "
        />
           <ProjectCard
          src={spt}
          h3="Rafik Hariri University"
          p="Bacholers in Human Resources "
          sub="Minor in Data Analytics"
        />
        
       
      </div>
    </section>
  );
}

export default Education;