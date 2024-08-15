import React from 'react';
import './navmenu.css';

function navmenu(){
    return(
        <>
            <div className="nav">
                <a href="#home" style={{ '--i': 1 }}>Home</a>
                <a href="#about" style={{ '--i': 2 }}>About</a>
                <a href="#skills" style={{ '--i': 3 }}>Skills</a>
                <a href="#project" style={{ '--i': 4 }}>Projects</a>
                <a href="#" style={{ '--i': 5 }}>Contact</a>
            </div>
            <br /><br />
        </>
    );
}

export default navmenu;