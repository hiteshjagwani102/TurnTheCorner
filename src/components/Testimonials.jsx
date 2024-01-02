import React from "react";
import styles from "../styles/Testimonials.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <h2>Testimonials.</h2>
            <Carousel
                showArrows={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
            >
                <div className={styles.box}>
                    <p>
                        <span>❝</span>Enrolling in the cybersecurity course was
                        a game-changer! The instructors' expertise and hands-on
                        simulations provided invaluable insights. Now, I feel
                        equipped to combat cyber threats and secure digital
                        landscapes. Highly recommended for anyone serious about
                        cybersecurity.<span>❞</span>
                    </p>
                    <h3>Ananya Sharma</h3>
                </div>
                <div className={styles.box}>
                    <p>
                        <span>❝</span> The AI Tools course exceeded my
                        expectations. The practical approach to machine learning
                        and data analytics was fantastic. The instructors made
                        complex concepts easy to understand. This course is a
                        must for anyone eager to dive into the exciting world of
                        artificial intelligence.<span>❞</span>
                    </p>
                    <h3>Rohit Patel</h3>
                </div>
                <div className={styles.box}>
                    <p>
                        <span>❝</span>The financial literacy course was an
                        eye-opener. It demystified finance and gave me practical
                        tools for managing my money. From budgeting to
                        investing, this course covers it all. I now feel
                        confident about making informed financial decisions.
                        Truly a valuable investment in my financial education.
                        <span>❞</span>
                    </p>
                    <h3>Priya Mehta</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default Testimonials;
