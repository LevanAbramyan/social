import React from 'react';



const Row = ({
  projects, tag, deleteProject
}) => {



  const filtred = projects.filter(project => project.projectName.toLowerCase().includes(tag.toLowerCase()));
  const projList = (filtred.length) ? (
    filtred.map(project => {
      return (
        <tr key={project._id}>
          <td>{project.projectName}</td>
          <td className={project.status}><span>{project.status}</span></td>
          <td>{project.tax} per/h</td>
          <td className='cross' onClick={() => { deleteProject(project._id) }}><i className="material-icons">close</i></td>
        </tr>
      )
    })
  ) : (
      <>
      </> 
    )
  return (
    <>
      {projList}
    </>
  )
}
export default Row