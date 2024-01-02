import React from "react";
import styles from "../styles/About.module.scss";
import education from "../assets/city-committed-education-collage-concept.jpg";

const About = () => (
    <div className={styles.about}>
        <div className={styles.details}>
            <h3>About us.</h3>
            <p>
                Turn the corners is an education focused business located in
                Gurgaon, Delhi. We are dedicated to providing high-quality
                educational services to help individuals reach their full
                potential
            </p>
            <p>
                With a team of experienced professionals, we offer a wide range
                of educational programs and courses tailored to meet the unique
                needs of our students. Our commitment to excellence, innovation,
                and professional learning sets us apart in the industry. Whether
                you are looking to enhance your skills, pursue a new career, or
                simply expand your knowledge, Turn the corners is here to guide
                you every step of the way.
            </p>
        </div>
        <div className={styles.image}>
            <img src={education} alt="education"></img>
        </div>
    </div>
);

export default About;
