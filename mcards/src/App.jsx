import React, { useState, useEffect } from 'react';
import Header from './components/header/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import CardsPage from './pages/cards/CardsPage';
import LargeCard from './pages/cards/LargeCard'

import SignInPage from './pages/signIn/SignInPage';
import Footer from './components/footer/Footer';
import SignUpPage from './pages/signUp/SignUpPage';
import axios from 'axios'
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import CreateProjectPage from './pages/createProjectPage/CreateProjectPage';


const App = () => {

  const [tableBody, setTableBody] = useState([])
  const [persons, setPersons] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        'http://localhost:5000/users/',
      );
      setPersons(data);

    };

    fetchData();


  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        'http://localhost:5000/projects/'
      );

      setTableBody(data)
    }
    fetchData();
  }, [])

  // const deleteProject = (id) => {
  //   axios.delete(`http://localhost:5000/projects/${id}`)
  //   setTableBody(tableBody.filter(el => el._id !== id))
  // }
  const deleteProject = async (id) =>{
    await axios.delete(`http://localhost:5000/projects/${id}`)
    setTableBody(tableBody.filter(el => el._id !== id))
  }
  const addProject = async (project) => {
  const {data} = await axios.post(
      'http://localhost:5000/projects/add', project
    );
  
    setTableBody([...tableBody,project])
  }
  console.log("We HAVE",tableBody)
  // const addProject = (project) => {
  
  //   axios.post('http://localhost:5000/projects/add', project)
    
  //     setTableBody([...tableBody,project])
  // }
  

  return (
    <BrowserRouter>

      <div className='app'>
        <div className="content">
          <Header />
          <Route exact path='/' render={() => <HomePage persons={persons} />} />
          <Route path='/cards' render={() => <CardsPage persons={persons} />} />
          <Route path='/user/:id' render={() => <LargeCard />} />
          <Route path='/projects' render={() => <ProjectsPage tableBody={tableBody} deleteProject={deleteProject} />} />
          <Route path='/create-project' render={() => <CreateProjectPage addProject={addProject}/>} />
          <Route path='/sign-in' render={() => <SignInPage />} />
          <Route path='/sign-up' render={() => <SignUpPage />} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
