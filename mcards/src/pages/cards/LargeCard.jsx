
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LargeCard = () => {


    const [user, setUser] = useState("")
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(
                `http://localhost:5000/users/${id}`,
            );
            setUser(data)
        };
        fetchData()
    })
    const userCur = user ? (
        <div className='profile'>
            <div className='up-block'>
                <img src={(user.avatar) ? (user.avatar) : ('https://upload.wikimedia.org/wikipedia/commons/e/e0/Anonymous.svg')} className='z-depth-1' alt='avatar'></img>
                <div className='info z-depth-1'>
                    <h6>Name: {user.first_name}</h6>
                    <h6>Last Name: {user.last_name}</h6>
                    <h6>Email: {user.email}</h6>
                    <h6>Projects: {user.projects}</h6>
                    <h6>Current Project: {user.currentProject}</h6>
                </div>
            </div>
            <div className='about'>
                <h6>About: </h6>
                <p>{user.about}</p>
            </div>
        </div>

    ) : (
            <div className='spinner'>
                <div className="preloader-wrapper small active">
                    <div className="spinner-layer spinner-green-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    return (
        <>
            {userCur}
        </>
    )
};
export default LargeCard;
