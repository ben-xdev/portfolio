import './Portfolio.css'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import js from '../../assets/images/JavaScript.png'
import react from '../../assets/images/react.png'
import laravel from '../../assets/images/Laravel.png'
import php from '../../assets/images/PHP.png'
import git from '../../assets/images/Git.png'
import linux from '../../assets/images/Linux.png'
import mysql from '../../assets/images/MySQL.png'
import tailwind from '../../assets/images/Tailwind.png'
import postgres from '../../assets/images/postgresql.png'
import firebase from '../../assets/images/Firebase.png'
import github from '../../assets/images/square-github-brands-solid-full.svg'



export function Portfolio(){
    return(
        <>
         <section id='Portfolio' className='PortfolioSection'>
            <div className='PortSectionHeader'>Portfolio Showcase</div>
            <div className='PortfolioInfo'>
                <code>
                The technologies I use and the practice projects 
                i have done  as I learn full-stack development.
                </code>
                
            </div>
            <div className='portfolio-cards'>

                <div className='port-card-tech'>
                    <div className='port-card-tech-header'>Tech Stack</div>
                    <div className='techs-grid'>
                       
                       <div>
                            <img src={html} alt="icon-tech" />
                            <code>HTML</code>
                           
                        </div>
                        <div>
                            <img src={css} alt="icon-tech" />
                            <code>CSS</code>
                        </div>
                        <div>
                            <img src={js} alt="icon-tech" />
                            <code>JavaScript</code>
                        </div> 
                        <div>
                            <img src={tailwind} alt="icon-tech" />
                            <code>Tailwind CSS</code>
                        </div>
                        <div>
                            <img src={react} alt="icon-tech" />
                            <code>React</code>
                        </div>
                        <div>
                            <img src={php} alt="icon-tech" />
                            <code>PHP</code>
                        </div>
                        <div>
                            <img src={laravel} alt="icon-tech" />
                            <code>Laravel</code>
                        </div>
                        <div>
                            <img src={mysql} alt="icon-tech" />
                            <code>MySQL</code>
                        </div>
                        <div>
                        <img src={postgres} alt="icon-tech" />
                        <code>PostgreSQL</code>
                        </div>
                         <div>
                        <img src={firebase} alt="icon-tech" />
                        <code>Firebase</code>
                        </div>
                        <div>
                            <img src={git} alt="icon-tech" />
                            <code>Git</code>
                        </div>
                      
                        <div>
                            <img src={linux} alt="icon-tech" />
                            <code>Linux</code>
                        </div>
                        
                    </div>

                </div>
                <div className='port-card-project'>
                    <div className='port-card-project-header'>Practice Projects</div>
                    <div className='project-grid'>
                        <div className='grid-item-project'>
                            <div className='project-header'>To Do List</div>
                            <div>Description: A simple web app to create, edit, and delete daily tasks.</div>
                            <div>Learned : JavaScript, DOM manipulation, LocalStorage</div>
                            <div className='github-icon-project'>
                                <a href="#">Source Code</a>
                                <img src={github} alt="github" />
                            </div>
                        </div>

                <div className='grid-item-project'>
                        <div className='project-header'>Weather Checker</div>
                        <div>Description: Check real-time weather for any city using an external API.</div>
                        <div>Learned : JavaScript, Fetch API, Responsive Design</div>
                        <div className='github-icon-project'>
                                <a href="#">Source Code</a>
                                <img src={github} alt="github" />
                        </div>
                </div>

                <div className='grid-item-project'>
                       <div className='project-header-green'>Current Project</div>
                        <div>Loans management system </div>
                        <div>Description : A full-stack web app for staff to manage loans, track clients,
                             and update payment statuses efficiently</div>
                        <div>Techs : React, Javascript, Laravel, PostgreSQL</div>
                </div>

                    </div>
                </div>

            </div>     
         </section>
        </>
    )
}