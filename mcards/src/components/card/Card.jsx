
import React from 'react';
import { Link } from 'react-router-dom';



const Card = ({
    user: { _id,first_name, email, avatar },
}) => {


    return (
        <>
        <span className="card-title">{first_name}</span>
        <div className="card" key={_id}>
            <div className="card-image">
                <img src={(avatar)?avatar:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Anonymous.svg'} alt=''></img>

            </div>
            <div className="card-content">
                <p>{email}</p>
            </div>
            <div className="card-action">
               <Link to={`/user/${_id}`}
               >more</Link>
            </div>
        </div>
        </> 
    )
};



export default Card;