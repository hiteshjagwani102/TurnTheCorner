import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>
                Have any doubts? Get in touch.
                 
            </p>
            <p>
            Call us directly{' '}
                       <a href="tel:905720073">9057206073</a>  
            </p>
            <p>Mail us{' '}
                       <a href="mailto:turnthecorner.kj@gmail.com">turnthecorner.kj@gmail.com</a></p>
            <h4>© Copyright 2024 Turn the Corner. All Rights Reserved.</h4>
        </div>
    );
};

export default Footer;
