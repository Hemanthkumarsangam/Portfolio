import React from 'react'
import './skills.css'

function Skills() {
  return (
    <div className="skills" id='skills'>
        <div class="container">
            <h1>Skill Set</h1>
            <div class="language">
                <label for="html">HTML</label>
                <input type="range" id="html" name="html" min="0" max="100" value="90" class="custom-range" style={{'--i' : 90}}/>
            </div>
            <div class="language">
                <label for="css">CSS</label>
                <input type="range" id="css" name="css" min="0" max="100" value="85" class="custom-range" style={{'--i' : 85}}/>
            </div>
            <div class="language">
                <label for="js">JavaScript</label>
                <input type="range" id="js" name="js" min="0" max="100" value="75" class="custom-range" style={{'--i' : 75}}/>
            </div>
            <div class="language">
                <label for="python">Problem Solving</label>
                <input type="range" id="ps" name="ps" min="0" max="100" value="80" class="custom-range" style={{'--i' : 80 }}/>
            </div>
            <div class="language">
                <label for="java">React</label>
                <input type="range" id="react" name="react" min="0" max="100" value="70" class="custom-range" style={{'--i' : 70}}/>
            </div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Skills
