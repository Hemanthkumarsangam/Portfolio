import React from 'react';
import './about.css'
import image from '../../images/me.png'

function About() {
  return (
    <>
      <div className='about' id='about'>
        <img src={image} alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius rerum repudiandae ipsa quasi rem accusamus, inventore eveniet quam, quo incidunt praesentium esse, delectus modi animi unde fuga tenetur. Exercitationem, quam.</p>
      </div>
    </>
  );
}

export default About;
