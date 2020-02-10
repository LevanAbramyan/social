import React from 'react'
import Content from '../../components/content/Content'


const HomePage = ({persons}) => {

    return (
        <div className="home-page">
            <Content 
            persons={persons}
            />
        </div>
    )

}

export default HomePage;
