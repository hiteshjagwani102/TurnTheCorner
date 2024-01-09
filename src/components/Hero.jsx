import React from "react";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
    return (
        <div id="hero" className={styles.hero}>
            <h2>Transfrom Your Education Journey</h2>
            <p>Discover Innovative learning at Turn The Corners</p>
            <button>Apply</button>
        </div>
    );
};

export default Hero;
