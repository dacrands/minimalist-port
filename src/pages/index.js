import React from "react"

import "../main.css"

import MysqlSvg from "../assets/mysql-logo.svg"
import ReactSvg from "../assets/react-logo.svg"
import JsSvg from "../assets/js-logo.svg"
import ReduxSvg from "../assets/redux-logo.svg"
import FlaskSvg from "../assets/flask-logo.svg"
import SassSvg from "../assets/sass-logo.svg"
import DockerSvg from "../assets/docker-logo.svg"
import WebpackSvg from "../assets/webpack-logo.svg"
import PostmanSvg from "../assets/postman-logo.svg"


export default () => <main className="container">
  <nav className="navbar">
    <a href="">Github</a>
    <a href="">Blog</a>
  </nav>
  <header className="header">
  <h1>David Crandall</h1>
  <hr className="hr--dashed"/>
  <p>
    Full stack web developer. 
    <br/>
    I build front end applications
    and the APIs that power them. 
    
    <p>
      <a className="btn" href="">Github</a>
      <a className="btn" href="">Blog</a>
    </p>
  </p>
  </header>

    <div className="col-2">
  <section className="section row">
    <div className="title">
      <h2>Skills</h2>
    </div>
      <div className="card">
        <h3>Front End</h3>
        <ul>
          <li>Experienced with ReactJS</li>
          <li>Strong JavaScript Kowledge</li>
          <li>Responsive Web Design</li>
          <li>Accessibility Conscious</li>
          <li>Modular CSS (BEM)</li>
          <li>Netlify CMS</li>
        </ul>
      </div>
      <div className="card">
        <h3>Back End</h3>
        <ul>
          <li>Experienced with Flask</li>
          <li>Strong Python Knowledge</li>
          <li>Relational Databases</li>
          <li>JSON Web Tokens</li>
          <li>Containerization (Docker)</li>          
          <li>HTTP</li>          
          <li>REST</li>          
        </ul>
      </div>
  </section>

  <section className="section row">
    <div className="title">
      <h2>Stack</h2>       
    </div>

    <div className="skills__item"> 
      <ReactSvg />
      <p>React</p>
    </div>

    <div className="skills__item"> 
      <JsSvg />
      <p>JavaScript</p>
    </div>

    <div className="skills__item"> 
      <FlaskSvg />
      <p>Flask</p>
    </div>

    <div className="skills__item"> 
      <ReduxSvg />
      <p>Redux</p>
    </div>

    <div className="skills__item">
      <DockerSvg />
      <p>Docker</p>
    </div>


    <div className="skills__item">
      <SassSvg />
      <p>Sass</p>
    </div>    

    <div className="skills__item">
      <PostmanSvg />
      <p>Postman</p>
    </div>    

    <div className="skills__item">
      <MysqlSvg />
      <p>Mysql</p>
    </div>    

  </section>
    </div>

    <h2>Projects</h2>
  <section className="section">
    <div className="col-2">

    <article className="section__article row">
      <img className="img" src="https://crandall.dev/static/c528ec4757dbaa7342774e8c7cc38308/1a92f/to-view-it-2.jpg" alt=""/>
      <h3>To View It</h3>
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>        
      </ul>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet vel excepturi laboriosam?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <div>
        <a href="">Project</a>
        <a href="">Github</a>
      </div>

    </article>
    <article className="section__article row">
      <img className="img" src="https://crandall.dev/static/c528ec4757dbaa7342774e8c7cc38308/1a92f/to-view-it-2.jpg" alt=""/>
      <h3>To View It</h3>
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>        
      </ul>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet vel excepturi laboriosam?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <div>
        <a href="">Project</a>
        <a href="">Github</a>
      </div>

    </article>
    </div>
    <article className="section__article">
      <h3>To View It</h3>
      <img className="img" src="https://crandall.dev/static/c528ec4757dbaa7342774e8c7cc38308/1a92f/to-view-it-2.jpg" alt=""/>
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>        
      </ul>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet vel excepturi laboriosam?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <div>
        <a href="">Project</a>
        <a href="">Github</a>
      </div>

    </article>
  </section>
  </main>
