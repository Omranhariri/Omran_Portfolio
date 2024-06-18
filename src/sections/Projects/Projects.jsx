import styles from './ProjectsStyles.module.css';
import shoezly from '../../assets/Shoezly.webp'
import ProjectCard from '../../assets/common/ProjectCard';
function Projects()
{
    return 
    (
    <section id="projects" className={styles.container}> 
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard
            src={shoezly}
            link=""
            h3="Shoezly"
            p="YAPPING"
        />
    </div>
    </section>
    );
}
export default Projects;