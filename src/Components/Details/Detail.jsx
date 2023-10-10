/* eslint-disable react/prop-types */

import time2 from '../../assets/time.png'
import datee from '../../assets/location-pin.png'
import calen from '../../assets/calendar.png'


// eslint-disable-next-line react/prop-types
const Detail = ({ detail }) => {

    const { image, description, date, time } = detail;

    return (
        <div>
            <div className=' '>
                <div className="hero lg:w-[1000px] lg:ml-72 mb-6 " >
                    <img className="sm:w-[488px] lg:w-[1320px] lg:h-[500px]  rounded-2xl my-10" src={image} alt="" />

                </div>


                <div className="sm:ml-[8rem] lg:ml-72 my-5">
                    <p className="text-2xl font-semibold  mr-[14rem] my-9 ">{description}</p>
                </div>

                <div className='lg:flex justify-center'>
                    <div className=" bg-base-100 shadow-2xl p-10 mx-10 mb-[8.5rem] rounded-xl items-center">
                        <img className='w-[2.5rem] h-[2.5rem] -ml-[35px] -mt-[3px] ' src={calen} alt="" />
                        <div className=' -mt-[42px] ml-[18px]'> 
                            <h2 className="card-title text-slate-500">Event Date</h2>
                            <p className='text-black'>{date}</p></div>
                    </div>
                    <div className=" bg-base-100 p-10 mx-10 mb-[8.5rem] shadow-xl  rounded-xl items-center">
                        <img className='w-[2.5rem] h-[2.5rem] -ml-[35px] -mt-[3px]' src={time2} alt="" />
                        <div className=' -mt-[42px] ml-[18px]'>
                        <h2 className="card-title text-slate-500">Event Time</h2>
                        <p className='text-black'>{time}</p>
                        </div>
                        
                    </div>
                    <div className=" bg-base-100 p-10 mx-10 mb-[8.5rem] shadow-xl  rounded-xl items-center">
                        <img className='w-[2.5rem] h-[2.5rem] -ml-[35px] -mt-[3px] ' src={datee} alt="" />
                        <div className=' -mt-[42px] ml-[18px]'>
                        <h2 className="card-title text-slate-500">Event Location</h2>
                        <p className='text-black'>{date}</p>
                        </div>
                        
                        </div>
                    </div>
                    <div className='sm:ml-[1rem] sm:mr-0 lg:mx-[20rem] lg:-mt-[4rem]' >
                   
                        <h2 className='text-3xl text-sky-700 my-5 font-semibold'>Event Description</h2>
                        <hr className='my-5' />
                        <p className='lg:my-10'>Tech events are gatherings that bring together professionals, enthusiasts, and industry leaders from the technology sector. These events serve as platforms for knowledge sharing, networking, and showcasing the latest advancements in the tech industry. They cover a diverse range of topics, including software development, cybersecurity, artificial intelligence, and emerging technologies. At tech events, attendees can expect to hear from renowned speakers, participate in workshops and sessions, explore exhibitions featuring cutting-edge technologies, and engage in interactive discussions. These gatherings also offer opportunities for networking, collaboration, and skill development. Whether you are looking to gain insights from industry experts, discover new innovations, or connect with like-minded professionals, tech events provide a dynamic and inspiring environment for all things tech-related.</p>
                    </div>

                </div>

            </div>



      


    );
};

export default Detail;