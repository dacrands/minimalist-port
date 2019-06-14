import React from "react"

import "../main.css"

import MysqlSvg from "../assets/mysql-logo.svg"
import ReactSvg from "../assets/react-logo.svg"
import JsSvg from "../assets/js-logo.svg"
import ReduxSvg from "../assets/redux-logo.svg"
import FlaskSvg from "../assets/flask-logo.svg"
import SassSvg from "../assets/sass-logo.svg"
import DockerSvg from "../assets/docker-logo.svg"
import PostmanSvg from "../assets/postman-logo.svg"

export default () => (
  <main>
    <div className="container">
      {/*       
            NAVBAR */}      
      <nav className="navbar">
        <a href="">Github</a>
        <a href="">Blog</a>
      </nav>
      

      {/*       
            HEADER */}      
      <header className="header">
        <h1>David Crandall</h1>
        <hr className="hr--dashed" />
        <p>
          Full stack web developer.
          <p>
            <a className="btn" href="">
              Github
            </a>
            <a className="btn" href="">
              Blog
            </a>
          </p>
        </p>
      </header>
    </div>


    {/*       
            SKILLS */}
    <section className="bg-med">      
      <div className="container">        
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="col">
          <div className="row-2">
            <div className="card">
              <h3>Front End</h3>
              <ul>
                <li>Strong JavaScript Kowledge</li>
                <li>Responsive Web Design</li>
                <li>Experienced with ReactJS</li>
                <li>Semantic HTML</li>
                <li>Accessibility Conscious</li>
                <li>Modular CSS (BEM)</li>
              </ul>
            </div>
            <div className="card">
              <h3>Back End</h3>
              <ul>
                <li>REST</li>
                <li>MVC</li>
                <li>HTTP</li>
                <li>Experienced with Flask</li>
                <li>Strong Python Knowledge</li>
                <li>Relational Databases</li>
                <li>Containerization (Docker)</li>
                <li>JSON Web Tokens</li>
                <li>Netlify CMS</li>
              </ul>
            </div>
          </div>
          
          <div className="row-2">
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
        </div>
        </div>    
      </div>
    </section>

    {/*       
          PROJECTS  */}      
    <section className="section">
      <div className="container">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="col">
        <article className="section__article row-2">
          <img
            className="img"
            src="https://crandall.dev/static/c528ec4757dbaa7342774e8c7cc38308/1a92f/to-view-it-2.jpg"
            alt=""
            />
          <h3>To View It</h3>
          <ul>
            <li>Flask</li>
            <li>MySQL</li>
            <li>Docker</li>
            <li>Nginx</li>
          </ul>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            vel excepturi laboriosam? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>

          <div>
            <a href="">Project</a>
            <a href="">Github</a>
          </div>
        </article>
        <article className="section__article row-2">
          <img
            className="img"
            src="https://crandall.dev/static/768f6372d726b56d6ddd938fcce11428/1e875/nyt-app.png"
            alt=""
            />
          <h3>NYT App</h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Docker</li>
            <li>Flask</li>
            <li>Sass</li>
          </ul>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            vel excepturi laboriosam? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>

          <div>
            <a href="">Project</a>
            <a href="">Github</a>
          </div>
        </article>
      </div>
      <article className="section__article">
        <h3>To View It</h3>
        <img
          className="img"
          src="https://crandall.dev/static/c528ec4757dbaa7342774e8c7cc38308/1a92f/to-view-it-2.jpg"
          alt=""
          />
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet vel
          excepturi laboriosam? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>

        <div>
          <a href="">Project</a>
          <a href="">Github</a>
        </div>
      </article>
      </div>
    </section>
  </main>
)
