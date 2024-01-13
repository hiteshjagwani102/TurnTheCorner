import React from "react";
import styles from "../styles/Director.module.scss";
import Founder from "../assets/Founder.jpg";

const Director = () => {
    return (
        <div id="director" className={styles.director}>
            <h3>Meet our Director.</h3>
            <div className={styles.list}>
                <div className={styles.box}>
                    <div className={styles.subBox}>
                        <img src={Founder} alt="Founder"></img>
                        <h4>LT COL ADITYA BUDHIRAJA</h4>
                        <p>
                            Mental, Emotional and Spiritual Health Enthusiast.
                        </p>
                    </div>

                    <p className={styles.para}>
                        Lt Col Aditya Budhiraja ( Retd ), an officer from the
                        Rajput Regiment with 20 years of army experience mostly
                        in J & K (including Siachen glacier) and North East and
                        a tenure in UN mission in Africa pursued his interest in
                        the field of Mental, Emotional and Spiritual Health post
                        retirement in Jan 2010. While in service he was awarded
                        twice with Vice Chief and Army Commander Northern
                        Command Commendation Cards and also attended the
                        prestigious SSB psychologist course at DIPR ( Defence
                        Institute of Psychological Research), New Delhi. He is a
                        Barefoot Counselor, Mindset Coach, Guide, Mentor, Healer
                        and Therapist who is also a trained Hypnotherapist ,
                        Pranic healer and NLP Practitioner alongwith various
                        other therapies like CDT ( Cognitive Drill Therapy),
                        RFBT ( Recovery Focussed Behavior Therapy), Mindfulness
                        and Meditation. On a mission to spread awareness on
                        issues related to Mental, Emotional and Spiritual health
                        and spread joy/bliss/happiness, he has helped scores of
                        people in the last 13 years. He is a keen learner of
                        various ways and methods to handle contemporary societal
                        issues to include stress/anxiety etc, relationships,
                        parenting and upbringing of children in the present day
                        world. He also does career guidance and trains the youth
                        aspiring to join the forces in SSB psychological
                        techniques and more than 500 candidates have cleared SSB
                        and are in various Army / Air Force and Naval academies.
                        Being a soldier himself, he is especially on a mission
                        of giving back to the organisation in the above fields..
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Director;
