import { useState } from "react";
import styles from "../styles/Navbar.module.scss";
const Navbar = () => {
    const [hide, setHide] = useState(true);
    return (
        <div id="navbar" className={styles.navbar}>
            <div className={styles.logo}>Turn The Corners</div>
            <div className={styles.list}>
                <a href="#about">About</a>
                <a href="#courses">Courses</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#instructors">Instructors</a>
            </div>
            <div
                className={`${styles.mobileList} ${hide ? styles.hidden : ""}`}
            >
                <a href="#about">About</a>
                <a href="#courses">Courses</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#instructors">Instructors</a>
            </div>
            <div className={styles.burgur} onClick={() => setHide(!hide)}>
                ≡
            </div>
        </div>
    );
};

export default Navbar;
