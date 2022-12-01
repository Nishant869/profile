import React from 'react';
import './style.css';

class Header extends React.Component{

    


    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
    }


    onScroll = () =>{

        if(window.scrollY >50 ){
            document.getElementById("header_container").classList.add('header_shadow');
        }else{
            document.getElementById("header_container").classList.remove('header_shadow');
        }
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll);
    }

    render() {
        return (
            <div className='header_container' id="header_container"> 
                <div className='header_content'>
                    <div className='header_content_left'>
                        <img src="./assets/name_icon.png" alt='icon'/>
                        <h1>NISHANT K</h1>
                    </div>
                    <div className='header_content_right'>
                        <a href='https://www.linkedin.com/in/nishant-kaushik-97023b7b/' target="_blank" rel="noreferrer"><i className="linkedin alternate icon big" style={{color:'black'}}></i></a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;