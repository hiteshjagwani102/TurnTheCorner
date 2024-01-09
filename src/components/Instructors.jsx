import React from "react";
import styles from "../styles/Instructors.module.scss";
import aiToolsInsturctor from "../assets/AI Tools..jpeg";
import financeInstructor from "../assets/FL.jpg";

const Instructors = () => {
    return (
        <div id="instructors" className={styles.instructors}>
            <h3>Meet our Instructors.</h3>
            <div className={styles.list}>
                <div className={styles.box}>
                    <img src={aiToolsInsturctor}></img>
                    <h4>Mr. Rohit Jagwani</h4>
                    <p>TTC AI TOOLS EXPERT</p>
                    <p>SOFTWARE ENGINEER WELL VERSED IN AI TOOLS</p>
                </div>
                <div className={styles.box}>
                    <img src={financeInstructor}></img>
                    <h4> CA Rishab Jain</h4>
                    <p>TTC FINANCIAL LITERACY EXPERT.</p>
                    <p>4+ YEARS EXPERIENCE</p>
                </div>
            </div>
        </div>
    );
};

export default Instructors;
