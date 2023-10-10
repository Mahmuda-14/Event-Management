import Banner from "./Banner";
import Conference from "./Conference";
import Footer from "./Footer";
import Services from "./Services/Services";
import Speaker from "./Speaker/Speaker";


import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    AOS.init();
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Speaker></Speaker>
            <Conference></Conference>
            <Footer></Footer>
        </div>
    );
};

export default Home;