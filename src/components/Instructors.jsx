import React from "react";
import styles from "../styles/Instructors.module.scss";
import cyberSecurityInstructor from "../assets/instructor1.jpg";
import aiToolsInsturctor from "../assets/instructor2.jpg";
import financeInstructor from "../assets/instructor3.jpg";

const Instructors = () => {
    return (
        <div id="instructors" className={styles.instructors}>
            <h3>Meet our Instructors.</h3>
            <div className={styles.list}>
                <div className={styles.box}>
                    <img src={cyberSecurityInstructor}></img>
                    <h4>Dr. Ananya Sharma</h4>
                    <p>
                        Dr. Sharma is a seasoned educator in computer science,
                        blending academic expertise with industry insights. With
                        a Ph.D. in Artificial Intelligence, she imparts
                        cutting-edge knowledge, fostering a passion for
                        innovation.
                    </p>
                </div>
                <div className={styles.box}>
                    <img src={aiToolsInsturctor}></img>
                    <h4>Prof. Vikram Singh</h4>
                    <p>
                        Prof. Singh, an authority in economics, brings a wealth
                        of experience to the classroom. His dynamic teaching
                        style and practical approach make complex economic
                        theories accessible, preparing students for real-world
                        challenges.
                    </p>
                </div>
                <div className={styles.box}>
                    <img src={financeInstructor}></img>
                    <h4>Ms. Priya Patel</h4>
                    <p>
                        Ms. Patel is a charismatic language and literature
                        instructor, specializing in English literature. With an
                        M.A. in Linguistics, she inspires a love for language,
                        fostering critical thinking and effective communication
                        skills in her students.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Instructors;
