import hand1 from '../assets/hand1.avif'
import hand2 from '../assets/champagne.png'
import hand3 from '../assets/chat.png'
import hand4 from '../assets/lightbulb.png'

import speak from '../assets/Speaker-6.jpg'

const Conference = () => {
    return (
        <div>
            <div className="sm:-mt-[111px] lg:mt-0 lg:flex justify-around shadow-xl" style={{  backgroundImage: `url(${speak})`  }}>
                <div className="ml-[263px] mt-[110px] mr-[18px] gap-5 " data-aos="fade-right">
               
                    <p className=" text-lg text-white my-5">Events Management</p>
                    <h2 className=" text-4xl text-white my-5">Conference in the weekend!</h2>
                    <button className="btn bg-blue-700 text-white border-none">BUY TICKET</button>
                </div>

                <div className="card-body sm:grid-cols-2 sm:pl-[155px]  lg:grid grid-cols-2 lg:gap-10 "  data-aos="fade-up">
                {/* ml-[530px] */}
                        <div className="card-body w-[21rem] h-[13rem] bg-violet-200 shadow-xl rounded-xl items-center">
                            <img className='w-[6.5rem] h-[5.5rem] ' src={hand1} alt="" />

                            <h2 className="card-title text-slate-500">Friendly Team</h2>
                            <p className='text-slate-500'>More than 200 teams</p>
                           
                        </div>
                    
                    <div className="card-body  shadow-xl w-[21rem] h-[13rem] bg-violet-200 rounded-xl items-center">
                    <img className='w-[6.5rem] h-[5.5rem] ' src={hand2} alt="" />
                            <h2 className="card-title text-slate-500">Unique Scenario</h2>
                            <p className='text-slate-500'>We think out of the box</p>
                            
                        </div>
                    <div className="card-body  shadow-xl w-[21rem] h-[13rem] bg-violet-200 rounded-xl items-center">
                    <img className='w-[6.5rem] h-[5.5rem] ' src={hand3} alt="" />
                            <h2 className="card-title text-slate-500">24/7 Houres Support</h2>
                            <p className='text-slate-500'>Anytime anywhere</p>
                            
                        </div>
                    <div className="card-body  shadow-xl w-[21rem] h-[13rem] bg-violet-200 rounded-xl items-center">
                    <img className='w-[6.5rem] h-[5.5rem] ' src={hand4} alt="" />
                            <h2 className="card-title text-slate-500">Brilliant Idea</h2>
                            <p className='text-slate-500'>We have millon idea</p>
                            
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Conference;