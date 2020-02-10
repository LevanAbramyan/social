import React from 'react';
import Card from '../card/Card'
import { Link } from 'react-router-dom';


const Content = ({persons}) => {
    return (
        <>  
            <div className="container">
                <div className="row">
                    {persons && persons.slice(0, 4)
                        .map((person) => (
                            <div key={person._id} className="col s12 m6 l3">
                                <Card

                                    user={person}
                                />
                            </div>
                        ))}
                </div>
                <div className="row">
            <div className="input-field col s12">
              <Link to='/cards' className="waves-effect waves-light btn">Show more</Link>
            </div>
          </div>
            </div>
        </>
    )
}
export default Content;