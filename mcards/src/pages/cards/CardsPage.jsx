import React from 'react'
import Card from '../../components/card/Card'

const CardsPage = ({persons}) => {
    return (
        <div className="home-page">
            <div className="container">
                <div className='row'>
                    {persons && persons
                        .map((person) => (
                            <div key={person._id} className="col s12 m6 l3">
                                <Card
                                    user={person}
                                />
                            </div>
                        ))}
                </div>
            </div >
        </div>
    )

}
export default CardsPage;
