import React from "react";
import styles from "../styles/Courses.module.scss";
import cyberSecurity from "../assets/Imagem-para-os-blogs-1024x683.png";
import aiTools from "../assets/pexels-tara-winstead-8386440.jpg";
import finance from "../assets/pexels-pixabay-53621.jpg";

const Courses = () => {
    return (
        <div className={styles.courses}>
            <h3>Courses we offer.</h3>
            <div className={styles.list}>
                <div className={styles.box}>
                    <img src={cyberSecurity}></img>
                    <h4>Cyber Security</h4>
                    <p>
                        Elevate your cybersecurity expertise with our
                        comprehensive course, covering threat detection, ethical
                        hacking, risk management, and advanced defense
                        strategies. Gain hands-on experience, industry insights,
                        and the skills needed to safeguard digital assets in an
                        ever-evolving cyber landscape. Prepare for a successful
                        career in cybersecurity with our expert-led training.
                    </p>
                </div>
                <div className={styles.box}>
                    <img src={aiTools}></img>
                    <h4>AI Tools</h4>
                    <p>
                        Master the future of technology with our AI Tools
                        course. Explore cutting-edge artificial intelligence
                        tools, machine learning algorithms, and data analytics.
                        Gain hands-on experience in deploying AI solutions,
                        empowering yourself for a dynamic career at the
                        forefront of innovation. Elevate your skills and stay
                        ahead in the rapidly evolving field of artificial
                        intelligence.
                    </p>
                </div>
                <div className={styles.box}>
                    <img src={finance}></img>
                    <h4>Financial Literacy</h4>
                    <p>
                        Navigate the world of finance with confidence through
                        our Financial Literacy course. Develop essential skills
                        in budgeting, investing, and financial planning.
                        Expert-led sessions provide practical insights,
                        empowering you to make informed decisions and secure
                        your financial future. Acquire the knowledge needed for
                        financial success, from managing debts to building
                        wealth. Elevate your financial IQ and thrive in today's
                        economic landscape.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Courses;
