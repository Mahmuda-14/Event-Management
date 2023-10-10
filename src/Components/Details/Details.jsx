
import { useEffect, useState } from "react";
import Detail from "./Detail";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    const allElements = useLoaderData();
    console.log(allElements);

    useEffect(() => {

                const selectedCatagory = allElements.find((detail) => detail.id == id);
        
                setDetail(selectedCatagory);
        
            }, [id, allElements]);
    return (
        <div>
            
            <div>
                <Detail key={detail.id} detail={detail}></Detail>
            </div>
            
        </div>
    );
};

export default Details;