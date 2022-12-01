import React from 'react';
import './style.css';
import Header from '../header';
import About from '../about';




function Home (props) {



    return (
        <div className='home_container'>
            <Header/>
            <div className='home_content_container'>
            <About/>
            </div>
           
        </div>
    )

}

export default Home;