import React, { useState } from 'react'
import Table from './Table'

const Search = ({ tableBody,deleteProject }) => {

    const [tag, setTag] = useState('');
    const handleChange = (e) => {
        setTag(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="search">
                <div className="row">
                    <div className="input-field col m6">
                        <input placeholder="search by name" className="materialize-textarea" onChange={handleChange}/>
                        <i className="material-icons prefix">search</i>
                    </div>
                </div>
            </div>
            </form>
            <Table tableBody={tableBody} tag={tag} deleteProject={deleteProject}/>
        </div>
    )
}

export default Search
