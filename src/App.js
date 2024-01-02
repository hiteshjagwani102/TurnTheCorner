import styles from "./styles/App.module.scss";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Courses from "./components/Courses.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import Instructors from "./components/Instructors.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
    return (
        <div className={styles.app}>
            <Navbar />
            <Hero />
            <About />
            <Courses />
            <Testimonials />
            <Instructors />
            <Footer />
        </div>
    );
}

export default App;
