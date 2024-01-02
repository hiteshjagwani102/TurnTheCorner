import styles from "./styles/App.module.scss";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Courses from "./components/Courses.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
function App() {
    return (
        <div className={styles.app}>
            <Hero />
            <About />
            <Courses />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
