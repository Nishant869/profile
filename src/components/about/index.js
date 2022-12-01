import React from 'react';
import './style.css';

function About(props) {

    return (
        <div className='about_container'>
            <div className='about_content'>
                <div className='left'>
                    <img src='./assets/profile.png' alt='ProfilePicture'/>
                </div>
                <div className='right'>
                    <h1>
                        <span>Hi There</span>
                        I am Nishant Kaushik <br />
                        Full Stack Developer based in Bangalore India.
                    </h1>

                </div>
            </div>
            <div className='about_me margin_top_30'>
                <h2>About Me</h2>
                <p>
                    Over 4.7 years of IT and hands on experience in full stack application development.Skilled in building applications using React JS, Node.js, Oracle APEX and Oracle database.
                    Currently working as a consultant for GoldenGate and Oracle Stream analytics.Proficient in using Model View Controller architecture in several frameworks.
                    Worked on multiple third-party integrations.Able to learn and quickly master new technologies (Currently deep diving Kafka).
                    Knowledge about the software development lifecycle and Agile Method.

                </p>
            </div>
            <div className='margin_top_30' style={{ textAlign: 'center' }}>
                <a href="./assets/Resume_Nishant_291122.pdf" target="_blank" download="Nishant_Kaushik_Resume">
                    <button className='about_resume_download'>Download Resume</button>
                </a>
            </div>
        </div>
    );
}

export default About;