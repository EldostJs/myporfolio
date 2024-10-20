import AS from './About.module.css';
import GIF from './images/3BBS.gif'

const About = () => {
  return (
    <section className={AS.about}>
      <div className={AS.content}>
        <div className={AS.titleContainer}>
          <div className={AS.longLine}></div>
        </div>
        <div className={AS.who}  >
          <h2 className={AS.title}>Who I am</h2>
          <p>
            My name is Eldost. I'm a Front-End developer
            from Azerbaijan.
          </p>
          <p>
            I am a highly motivated Front-End Developer with in-depth knowledge of JavaScript and React, specializing in the creation of interactive and responsive web applications using modern technologies such as HTML5, CSS3, and contemporary libraries. With experience in developing several personal projects, I have proven my ability to effectively solve challenges, optimize performance, and ensure user interface ease. Familiar with version control systems like Git, I quickly grasp new technologies and strive to enhance my skills within a dynamic team to create high-quality digital products.
          </p>

        </div>
      </div>
      <div className={AS.illustration}>
        <img src={GIF} alt="" />
      </div>
    </section>
  );
};

export default About;