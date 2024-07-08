import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './footer.css';

function footer() {
    return (
        <div class="footer">
            <a style={{'--i' : 1}} href="https://github.com/hemanthkumarsangam" target="_blank" rel="noopener noreferrer" id='github'><FaGithub /></a>
            <a style={{'--i' : 2}} href="https://www.instagram.com/mr_hemanth_kumar_19/" target="_blank" rel="noopener noreferrer" id='instagram'><FaInstagram /></a>
            <a style={{'--i' : 3}} href="https://wa.me/9989245995" target="_blank" rel="noopener noreferrer" id='whatsapp'><FaWhatsapp /></a>
            <a style={{'--i' : 4}} href="https://www.linkedin.com/in/hemanth-kumar-sangam-968536246/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a style={{'--i' : 5}} href="mailto:hamanth4k@gmail.com"><FaEnvelope /></a>
        </div>
    );
}

export default footer;
