import React from "react";
import styles from "../styles/About.module.scss";
import education from "../assets/upskill 1.jpg";

const About = () => (
    <section id="about" className={styles.about}>
        <div className={styles.details}>
            <h3>About us.</h3>
            <p>
            Cybersecurity knowledge is crucial in today's digital age due to the pervasive and
            evolving nature of cyber threats. Artificial Intelligence (AI) tools are increasingly
            important in various domains due to their ability to perform tasks that traditionally
            required human intelligence. Financial literacy is crucial for individuals, families,
            and communities due to its far-reaching impact on personal well-being, economic
            stability, and long-term financial success.
            At Turn the Corner we are redefining the future of learning through our 
            innovative certification courses!
                Unlock your full potential and stay ahead in your career with our
                carefully curated programs designed to empower individuals. We are 
                dedicated to providing high-quality courses to help individuals reach their full
                potential.
            </p>
            <p>
                With a team of experienced professionals, Turn the Corner specializes
                in comprehensive training programs spanning 30 hours, focusing on
                AI Tools, Cybersecurity and Financial Literacy. Our commitment to excellence, innovation,
                and professional learning sets us apart in the industry. Whether
                you are looking to enhance your skills, pursue a new career, or
                simply expand your knowledge, Turn the Corner is here to guide
                you in every step of your Journey.
            </p>
        </div>
        <div className={styles.image}>
            <img src={education} alt="education"></img>
        </div>
    </section>
);

export default About;
