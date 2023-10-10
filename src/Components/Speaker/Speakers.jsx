import person1 from '../../assets/present-1.jpg'
import person2 from '../../assets/present-2.jpg'
import person3 from '../../assets/present-3.jpg'
import person4 from '../../assets/present-4.jpg'
import person5 from '../../assets/present-5.jpg'
import person6 from '../../assets/present-6.jpg'
import spaek1 from '../../assets/Speaker-4.jpg'
import spaek2 from '../../assets/Speaker-7.jpg'
import speak3 from '../../assets/Speaker-8.jpg'


const Speakers = () => {
    return (
        <div>
          <div>
          <h2 className='text-center items-center mt-8 font-bold text-4xl text-sky-800'>Meet Keynotes Speakers</h2>
            <hr className=' mx-96 mt-10 px-8' />
            <div className='grid grid-cols-3'>
            <div className="card card-side bg-base-100 shadow-xl my-20 mx-5 rounded-xl" data-aos="fade-up">
                <img className='w-[20.5rem] h-[12.5rem] rounded-xl' src={spaek1}  />
                <div className="card-body">
                    <h2 className="card-title">Professional Speaker</h2>
                    <p>Kevin Diks</p>
                    <p>CEO Ultra Tech</p>
                    
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl my-20 mx-5 rounded-xl" data-aos="fade-down">
                <img className='w-[20.5rem] h-[12.5rem] rounded-xl' src={spaek2}  />
                <div className="card-body">
                    <h2 className="card-title">Professional Speaker</h2>
                    <p>Lara Cloft</p>
                    <p>CEO Triangle </p>
                    
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl my-20 mx-5 rounded-xl" data-aos="fade-up">
                <img className='w-[20.5rem] h-[12.5rem] rounded-xl' src={speak3}  />
                <div className="card-body">
                    <h2 className="card-title">Professional Speaker</h2>
                    <p>Robert Dawn</p>
                    <p>CEO Quad Drive</p>
                    
                </div>
            </div>
          </div>

            <div>
                <h2 className='text-center items-center text-4xl font-bold m-10'>Photo Gallery</h2>
                <hr className=' mx-96 my-10 px-8'/>
                <div className=' grid grid-cols-3 gap-8 mx-20 my-10' data-aos="flip-right">
                
            
                   <div> <img className='rounded-xl' src={person1}  /></div>
                    <div><img className='rounded-xl' src={person2}  /></div>
                   <div> <img className='rounded-xl' src={person3}  /></div>
                    <div><img className='rounded-xl' src={person4}  /></div>
                   <div> <img className='rounded-xl' src={person5}  /></div>
                    <div><img className='rounded-xl' src={person6}  /></div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Speakers;