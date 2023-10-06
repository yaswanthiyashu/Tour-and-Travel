import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/2.jpg"
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service (){
    return(
        <>
            <Navbar />
            <Hero 
                cName = "hero-mid"
                heroimg = {AboutImg}
                title = "Service"
                btnClass = "hide"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service;