import React from 'react'
import Search from '../../components/table/Search'
const ProjectsPage = ({ tableBody,deleteProject}) => {

    return (
        <div>
            <Search tableBody={tableBody} deleteProject={deleteProject}/>
            
        </div>
    )
}

export default ProjectsPage
