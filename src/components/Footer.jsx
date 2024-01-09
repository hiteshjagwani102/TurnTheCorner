import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>
                Have some doubts. <a>Fill this from.</a> we'll get in touch.
            </p>
            <h4>© Copyright Trademark. All Rights Reserved.</h4>
        </div>
    );
};

export default Footer;
