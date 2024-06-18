import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import githubIcon from '../../assets/github-light.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../assets/common/ThemeContext';
function Hero() {
    const {theme,toggleTheme}= useTheme();
  return (
    <section id="hero" className={styles.container}>
<div className={styles.colorModeContainer}>
    <img className={styles.hero} src={heroImg} alt="Profile Picture of Karim Merhi" />
<img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
</div>
<div>
    <h1> Karim
    <br/>
    Merhi
    </h1>
    <h2>IOS Developer</h2>
    <span>
        <a href='https://www.linkedin.com/in/karimmerhi/' target='_blank'>
            <img src={linkedinIcon} alt="Karim Merhi's Linkdein"/>
        </a><a href='https://github.com/Merhii' target='_blank'>
            <img src={githubIcon} alt="Karim Merhi's github"/>
        </a>
    </span>
    <p>With a passion for developing modern Mobile Applications.</p>
    <a href={CV} target='_blank' download>
    <button className='hover'>Resume</button>
    </a>
</div>
    </section>
  );
}

export default Hero;