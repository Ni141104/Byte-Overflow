import { useState } from 'react';
import './Card1.css';
function Card1({ id, name, volume, info, image, removeTour, price, type }) {
    // const [readmore, setReadmore] = useState("Read More");
    // const [description, setDescription] = useState(`${info.substring(0, 200)}...`);//It is used for taking only starting 200 words of the information
    // function changeReadMore() {
    //     if (readmore === "Read More") {
    //         setReadmore("   Show Less");
    //         setDescription(`${info}`);
    //     }
    //     else {
    //         setReadmore("Read More");
    //         setDescription(`${info.substring(0, 200)}...`);
    //     }
    // }
    return (
        <div className="card">
            <img src={image} alt='error' className="image1" ></img>
            <div className="tourDetails">
                <h4 className="tourName">Name:- {name}</h4>
                <h4 className="tourVolume">volume:- {volume}</h4>
                <h4 className="tourType">Type:- {type}</h4>
            </div>
            <div>
                <h4 className='tourPrice'>Price:- {price}</h4>
            </div>
            {/* <div className="description">
                {description}
                <span onClick={changeReadMore}>{readmore}</span>
            </div> */}
            <button className='removeBtn' onClick={() => removeTour(id)}>
                Sell
            </button>
        </div >
    )
}
export default Card1;