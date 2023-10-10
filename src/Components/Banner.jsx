import cool from '../assets/tech-4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    AOS.init();
    return (
        // margin-left: 19px;
        // margin-right: 28px;
       
      <div className='sm:ml-[19px] sm:mr-7 lg:m-0'>
          <div className="hero min-h-screen " style={{ backgroundImage: `url(${cool})` }} data-aos="flip-right">
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="text-center items-center" data-aos="fade-up">
                    <h1 className="mb-5 text-5xl font-semibold " data-aos="flip-right">Biggest Tech Event</h1>
                    <p className="mb-5">Growing The Global Technology Industry</p>
                    <button className="btn bg-rose-700 border-none text-white mr-10 rounded-full">Get Started</button>
                    <button className="btn btn-ghost border-white rounded-full">About US</button>
                </div>
            </div>
        </div>
      </div>

    );
};

export default Banner;

// background: 'linear-gradient(to bottom right, #ff3e00, #ffbe30), #333333'