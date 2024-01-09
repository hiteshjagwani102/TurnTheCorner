import React from "react";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
    return (
        <div id="hero" className={styles.hero}>
            <h2>Discover Innovative learning And Upskill Yourselves</h2>
            <p>Find Yourself At The Corner, Turn the Corner</p>
           <button><a href='https://docs.google.com/forms/d/e/1FAIpQLScm86tca4SNBHGsjjtDJVeO9yOhUg6lHGaorH30bUM4D-x7Lg/viewform?vc=0&c=0&w=1&flr=0'> Apply</a></button>   
        </div>
    );
};

export default Hero;
