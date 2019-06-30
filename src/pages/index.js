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
import HtmlSvg from "../assets/html-5-logo.svg"
import CssSvg from "../assets/css-3-logo.svg"
import GitSvg from "../assets/git-logo.svg"
import PythonSvg from "../assets/python-logo.svg"

export default () => (
  <main>
    <div className="container">
      {/*       
            NAVBAR */}      
      {/* <nav className="navbar">
        <a href="">Github</a>
        <a href="">Blog</a>
      </nav> */}
      

      {/*       
            HEADER */}      
      <header className="header">
        <h1>David Crandall</h1>
        <hr className="hr--dashed" />
        <p>
          Full Stack Web Developer
          <div>
            <a className="btn" href="">
              Github
            </a>
            <a className="btn" href="">
              Blog
            </a>
          </div>
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
        <div className="grid-aside">
          <div className="card__holder">
            <div className="card">
              <h3>Front End</h3>
              <ul>
                <li>Strong JavaScript Kowledge</li>
                <li>Responsive Web Design</li>
                <li>Experienced with ReactJS</li>
                <li>Semantic HTML</li>
                <li>Modular CSS (BEM)</li>
                <li>Accessibility Conscious</li>
              </ul>
            </div>
            <div className="card">
              <h3>Back End</h3>
              <ul>
                <li>REST</li>
                <li>MVC</li>
                <li>HTTP</li>
                <li>Relational Databases</li>
                <li>Experienced with Flask</li>
                <li>Strong Python Knowledge</li>
                <li>Containerization (Docker)</li>
                <li>JSON Web Tokens</li>
                <li>Sessions</li>
              </ul>
            </div>
          </div>
          
          <div className="">
            <h3>Things I use all the time...</h3>
            
            <div className="skills__item">
              <HtmlSvg />
              <p>HTML5</p>
            </div>
            <div className="skills__item">
              <CssSvg />
              <p>CSS3</p>
            </div>
            <div className="skills__item">
              <JsSvg />
              <p>JavaScript</p>
            </div>
            <div className="skills__item">
              <PythonSvg />
              <p>Python</p>
            </div>
            <div className="skills__item">
              <ReactSvg />
              <p>React</p>
            </div>
            <div className="skills__item">
              <FlaskSvg />
              <p>Flask</p>
            </div>
            <div className="skills__item">
              <MysqlSvg />
              <p>MySQL</p>
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
              <GitSvg />
              <p>Git</p>
            </div>
            <div className="skills__item">
              <PostmanSvg />
              <p>Postman</p>
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
        <article className="article row-2">
          <img
            className="img"            
            src="img/bstem3.jpg"
            alt="Bergen STEM"
            />
          <h3>Bergen STEM</h3>
          <ul>
            <li>React (GatsbyJS)</li>
            <li>Netlify-CMS</li>
            <li>Sass</li>            
          </ul>
          <p>
            Website designed and built for the STEM program
            at Bergen Community College. Built with Gatsby
            and the Netlify-CMS, the site showcases student resources,
            scholarship information, and student projects.
          </p>

          <div>
            <a href="">Project</a>
            <a href="">Github</a>
          </div>
        </article>
        <article className="article row-2">
          <img
            className="img"
            src="img/justfiles.jpg"
            alt=""
            />
          <h3>Just Files</h3>
          <ul>
            <li>S3 (AWS)</li>
            <li>React (GatsbyJS)</li>
            <li>Flask</li>
            <li>Docker</li>
            <li>Nginx</li>
            <li>Sass</li>
            <li>Fetch API</li>
          </ul>
          <p>
            A file-hosting application that emphasizes simplicity.
            Features a GatsbyJS front-end and a Flask back-end.
            The Flask API provides users the ability to
            upload, download, and delete files from an S3 bucket, 
            as well provide user authentication. The client
            app is responsive, accessible, and utilizes the Fetch API 
            for ajax.
          </p>

          <div>
            <a href="">Project</a>
            <a href="">Github</a>
          </div>
        </article>
      </div>
      <div className="col">
      <article className="article row-2">
          <img
            className="img"
            src="img/to-view-it-2.jpg"
            alt="To View It homescreen"
            />
          <h3>To View It</h3>
          <ul>
            <li>Flask</li>
            <li>MySQL</li>
            <li>Docker</li>
            <li>Nginx</li>
            <li>SendGrid</li>
          </ul>
          <p>
          A to-do list application that features a scrolling-stocker ticker, weather information, and a custom background Youtube video.

Features SendGrid email authentication and the YouTube IFrame API.
          </p>

          <div>
            <a href="">Project</a>
            <a href="">Github</a>
          </div>
        </article>
        
        <article className="article row-2">
          <img
            className="img"
            src="https://crandall.dev/static/768f6372d726b56d6ddd938fcce11428/1e875/nyt-app.png"
            alt=""
            />
          <h3>NYT App</h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Flask</li>
            <li>Docker</li>
            <li>Nginx</li>
            <li>Sass</li>
          </ul>
          <p>
          Single-page application featuring NYT data. React/Redux front-end, Flask back-end.
          Features an archive search where users can read articles dating back to the year 1900.
          </p>

          <div>
            <a href="">Project</a>
            <a href="">Github</a>
          </div>
        </article>
      </div>
      <div className="col">
      <article className="article row-2">
          <img
            className="img"
            src="img/blog-2-flex.jpg"
            alt="blog landing page"
            />
          <h3>Personal Blog</h3>
          <ul>
            <li>React (GatsbyJS)</li>
            <li>GitPages</li>
            <li>Sass</li>            
          </ul>
          <p>
          Blog where I chronicle my programming journey, write tutorials, and discuss web development.

GatsbyJS build hosted on gitpages. Features a markdown blog that supports YAML front matter.
          </p>

          <div>
            <a href="">Project</a>
            <a href="">Github</a>
          </div>
        </article>
        <div className="article article--padding row-2">
          <h3>Other Featured Repos:</h3>
        </div>
      </div>
      </div>
    </section>
  </main>
)
