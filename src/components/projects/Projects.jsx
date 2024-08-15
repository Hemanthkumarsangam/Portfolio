import React from 'react'
import './projects.css'
import bookLend from '../../images/bookLend.png'
import patientDapp from '../../images/patientDapp.png'
import jsQuiz from '../../images/jsQuiz.png'

function Projects() {
  return (
    <div className='project' id='project'>
      <div className="holder" >
        <center><h2>Library Management System</h2></center><br />
        <a href="https://book-lend.netlify.app/" target='_blank' rel="noreferrer"><img src={bookLend} alt="project 1" /></a>
        <div className="content">
          <center>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ab nisi consectetur mollitia omnis obcaecati necessitatibus quaerat veniam delectus odio non, similique placeat sapiente officia odit voluptate autem. Maiores, explicabo.</p>
          </center>
        </div>
      </div>  
      <div className="holder" >
        <center><h2>Patient Details Management</h2></center><br />
        <a href="https://bct-patient-details-management.netlify.app/" target='_blank' rel="noreferrer"><img src={patientDapp} alt="project 2" /></a>
        <div className="content">
          <center>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ab nisi consectetur mollitia omnis obcaecati necessitatibus quaerat veniam delectus odio non, similique placeat sapiente officia odit voluptate autem. Maiores, explicabo.</p>
          </center>
        </div>
      </div> 
      <div className="holder" >
        <center><h2>Js quiz</h2></center><br />
        <a href="https://hemanthkumarsangam.github.io/jsQuiz/" target='_blank' rel="noreferrer"><img src={jsQuiz} alt="project 2" /></a>
        <div className="content">
          <center>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ab nisi consectetur mollitia omnis obcaecati necessitatibus quaerat veniam delectus odio non, similique placeat sapiente officia odit voluptate autem. Maiores, explicabo.</p>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Projects
