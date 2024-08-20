import React from 'react';
import './main.css';
import { TypeAnimation } from 'react-type-animation';
import Footer from './../footer/Footer'

function Main() {
    return (
        <div class="main" id='home'>
            <div>                
                <p id='hello'>Hello I'm</p>
                <p id='name'>Hemanth Kumar Sangam</p>
                <div id='remContent'>
                    <TypeAnimation
                        sequence={[
                            'And I\'m a WEB DEVELOPER', 1000,
                            'And I\'m a FRONT-END DEVELOPER', 1000,
                            'And I\'m a FULL STACK DEVELOPER', 1000,
                            'And I\'m a QUICK LEARNER', 1000, 
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity} 
                        id='typeAnim'
                    /> <br/> <br/> 
                    <p>I am a self driven and innovative final-year Computer Science Engineering <br />
                    student with a strong interest in web development....</p>
                </div>
                <Footer />
                <a href="#about" ><button>More about me</button></a>
            </div>
            <div><img src={require('../../images/me.png')} alt="Hemanth" /></div>
        </div>
    );
}

export default Main;
