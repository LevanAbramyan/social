import React from 'react'
import Row from './Row'
const Table = ({ tableBody, tag, deleteProject }) => {


  return (
    <table className="striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Tax</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Row projects={tableBody}
          deleteProject={deleteProject}
          tag={tag}
        />
      </tbody>
    </table>

  )
}

export default Table
