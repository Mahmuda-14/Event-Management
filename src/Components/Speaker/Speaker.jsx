import { Link } from 'react-router-dom';
import speak1 from '../../assets/Speaker-1.jpg'
import speak2 from '../../assets/Speaker-2.jpg'
import speak3 from '../../assets/Speaker-3.jpg'
import speak from '../../assets/Speaker-5.jpg'
const Speaker = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{  backgroundImage: `url(${speak})`  }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="m-5">Our Speakers</p>
                        <h1 className="m-9 text-3xl font-bold ">Meet Keynotes Speakers</h1>
                        <div className=' bg-sky-800' style={{paddingLeft: '31px', paddingRight: '169px',height: '5px', marginRight:'588px',marginLeft:'134px', marginTop:'-18px', marginBottom:'42px' }}></div>

                      

                        <div className='lg:flex justify-around  gap-9 rounded'>
                            <div data-aos="fade-down">
                                <div className="card w-96 glass sm:mb-[27px]">
                                <img className="rounded-xl" src={speak1} alt="" />
                                    <div className="card-body items-center text-center bg-blue-950">
                                        <h2 className="card-title">Adam Leno</h2>
                                        <p>CEO UrbanTech</p>
                                       
                                    </div>
                                </div>


                            </div>
                            <div data-aos="fade-up">
                                <div className="card w-96 glass sm:mb-[27px]">
                                <img className="rounded-xl" src={speak2} alt="" />
                                    <div className="card-body items-center text-center  bg-blue-950">
                                        <h2 className="card-title">Anne Claire</h2>
                                        <p>CEO IndoTech Ltd</p>
                                        
                                    </div>
                                </div>


                            </div>
                            <div data-aos="fade-down">
                                <div className="card w-96 glass sm:mb-[27px]">
                                <img className="rounded-xl" src={speak3} alt="" />
                                    <div className="card-body items-center text-center  bg-blue-950">
                                        <h2 className="card-title">Garrett Ventura</h2>
                                        <p>CEO Unicorn</p>
                                      
                                    </div>
                                </div>


                            </div>
                           
                        </div>




                        <button className="btn my-10 text-white border-none bg-sky-700"><Link to="/speaker">See All Speaker</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speaker;