import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';



const CreateProject = ({addProject}) => {

    const [project, setProject] = useState({
        projectName: '',
        status: '',
        tax: '',
    })
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addProject(project)
        setRedirectToReferrer(true)
    }
    const page = (redirectToReferrer === true) ? (
        <Redirect to='/projects'></Redirect>
    ) : (
            <div className="registration z-depth-3">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder='Enter the Project Name' type="text" className="validate" onChange={handleChange} value={project.projectName} name='projectName' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input-field col s12">
                            <select className="browser-default" onChange={handleChange} value={project.status} name='status'>
                                <option value="" disabled selected>Choose project status</option>
                                <option value="Pending">Pending</option>
                                <option value="Active">Active</option>
                                <option value="Holded">Holded</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder='Enter the Tax' type="text" className="validate" onChange={handleChange} value={project.tax} name='tax' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button type="submit" className="waves-effect waves-light btn">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        )

    return (
        <>
            {page}
        </>
    )
}

export default CreateProject;
