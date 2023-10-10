/* eslint-disable react/prop-types */


import { FaClock } from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ element }) => {

    const { id,name, image, price,time } = element;
    
    return (
        <div>
           
            <div className="card w-96  shadow-xl ">
                
                    <img  src={image} alt="" className="rounded-xl w-[384px] h-[256px]" />
               
                <div className="card-body items-left text-left ">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className=' text-yellow-400 text-lg'>Tickets from {price}</p>
                   
                    <div className='flex gap-2'>
                          <FaClock></FaClock> 
                        <p className='-mt-[4px] text-slate-500'>Duration:{time}</p>
                          
                    </div>
                    <div className='flex gap-2'>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <p className='-mt-[4px] text-slate-500'> Bangabandhu International Conference Center,Dhaka</p>
                    </div>
                    
                    <div className="card-actions">
                        <button className="btn text-white " style={{ background: 'linear-gradient(to bottom right, #ff3e00 , #ffbe30)' }}><Link to ={`/element/${id}`}>Ticket & Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

