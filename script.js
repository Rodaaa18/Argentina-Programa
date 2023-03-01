const botonCambiarAbout = document.querySelector('#about-me');
const botonCambiarSkills = document.querySelector('#skills');
const botonCambiarExperience = document.querySelector('#experience');
const botonCambiarContact = document.querySelector('#contact');

const rowContainer = document.getElementById('row-container');



function changeContainer(buttonChange, type){
    switch(type){
        case "about" : {
            buttonChange.addEventListener('click', () => {
                rowContainer.innerHTML = `
                <div class="row">
                <div class="col-xl-6">
                    <p class="card__title p-3">About Me</p>                                
                    <p class="personal_data">
                        I am a fullstack developer at INFT SA since April of last year, I started with a Help Desk role and after a month to do development work. Create an E-Commerce type SPA for the commercial area of the company using ReactJs for the Frontend and NodeJs for the Backend, as a database use Google Sheets.
                        Then I started working on the Backend developing APIs for the new Municipal Web Portals with .Net Core 3.1 and 6 while developing the FrontEnd with ReactJs as well.
                        I am currently working as a team leader and developing both Backend and Frontend.
                    </p>
                </div>
                <div class="col-xl-6">
                    <ul class="personal_data_right">
                        <li><label>Edad:</label><strong> 29 años</strong></li>
                        <li><label>Nacionalidad:</label><strong> Argentina</strong></li>
                        <li><label>Provincia:</label><strong> Córdoba</strong></li>
                        <li><label>Ciudad:</label><strong> Alta Gracia</strong></li>
                    </ul>
                </div>
            </div>
                `;
            });
        }
        break;
        case "skills" : {
            buttonChange.addEventListener('click', () => {
                rowContainer.innerHTML = `
                <div class="row">                
                <div class="col-xl-12">
                    <p class="card__title p-3">Skills</p>  
                    <ul class="personal_data">
                        <li><label>ReactJs:</label><strong> Intermedio</strong></li>
                        <li><label>NodeJs:</label><strong> Intermedio</strong></li>
                        <li><label>C# .NetCore 3.1, 6:</label><strong> Intermedio</strong></li>
                        <li><label>MSSQL:</label><strong> Intermedio</strong></li>
                    </ul>
                </div>
            </div>
                `;
            });
        }
        break;
        case "experience" : {
            buttonChange.addEventListener('click', () => {
                rowContainer.innerHTML = `
                <div class="col-xl-6">
                    <p class="card__title p-3">Experience</p>                                
                    <p class="personal_data">
                    I have been developing personally in C# since 2018, I started making Launchers for a game (Mu Online) and then at the University I continued with the development of C# getting involved in what is the development of APIs.
                    I also started studying ReactJs self-taught in 2020, I took the Front End React Career course at CODERHOUSE in 2021.
                    I am currently developing as FullStack at INFT SA, on the Backend side we continue with C# .Net Core 3.1 and 6, and on the FrontEnd side with ReactJs, so I have about 3 years of experience with C# and 1 year with ReactJs
                    </p>
                </div>
                `;
            });
        }
        break;
        case "contact" : {
            buttonChange.addEventListener('click', () => {
                rowContainer.innerHTML = `
                <div class="row">                
                <div class="col-xl-12">
                    <p class="card__title p-3">Contact</p>  
                    <ul class="personal_data">
                        <li><label>Phone:</label><strong> +54 3547532081</strong></li>
                        <li><label>Email:</label><strong> rodaalvarez18@hotmail.com</strong></li>
                        <li><label>Linkedin:</label><strong> www.linkedin.com/in/rodrigo-alvarez-aguilar</strong></li>
                    </ul>
                </div>
            </div>
                `;
            });
        }
        break;
        default : null
    }
   
}

changeContainer(botonCambiarAbout, "about")
changeContainer(botonCambiarSkills, "skills")
changeContainer(botonCambiarExperience, "experience")
changeContainer(botonCambiarContact, "contact")