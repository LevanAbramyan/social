import React from 'react'
import CreateProject from '../../components/createProject/CreateProject'

const CreateProjectPage = ({addProject}) => {

 
    return (
        <div>
            <CreateProject addProject={addProject}/>
        </div>
    )
}

export default CreateProjectPage
