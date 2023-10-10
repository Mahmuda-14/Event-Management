import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [element, setElement] = useState([]);

    useEffect(() => {
        fetch('../../../public/data.json')
            .then((res) => res.json())
            .then((data) => setElement(data));
    }, [])
    return (
        <div className=" " data-aos="fade-down-right">
            <div className="items-center text-center m-9 " >
                
                <h2 className="font-bold  text-4xl" data-aos="fade-right">Our Session Schedule List</h2>
                <div style={{background: 'linear-gradient(to bottom right, #ff3e00, #ffbe30), #333333', paddingRight: '100px',height: '5px', marginRight:'588px',marginLeft:'588px', marginTop:'10px' }}></div>

            </div>

            <div className="grid grid-cols-3 justify-evenly gap-10 mx-20 my-20 " data-aos="fade-down-right">

                {
                    element.map(element => <Service key={element.id} element={element}></Service>)
                }
            </div>
        </div>



    );
};

export default Services;

