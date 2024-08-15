import React from 'react';
import './about.css'
import image from '../../images/me.png'

function About() {
  return (
    <>
      <div className='about' id='about'>
        <img src={image} alt="" />
        <p> I am a driven and innovative final-year Computer Science Engineering student with a strong interest in web development. 
          I am eager to launch my career in a dynamic and rewarding environment where I can leverage my academic background,
          problem-solving abilities, and creative thinking to contribute to organizational growth and success. </p>
      </div>
      <br /><br />
    </>
  );
}

export default About;
