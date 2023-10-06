import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar'
import AboutImg from '../assets/night.jpg'
// https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80
function About (){
    return(
        <>
            <Navbar />
            <Hero 
                cName = "hero-mid"
                heroimg = {AboutImg}
                title = "About"
                btnClass = "hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;