import React from 'react'

const VolumeDisplay = (props) => {


    return (
        <div id='container'>
            <input id='weight-slider' type='range' min='80' max='250' step='5'> </input>

            <label for='experience-level' >Skill Level:</label>
            <select name='experience-level' id='experience-level'>
                <option value='beginner'>Beginner</option>
                <option value='intermediate'>Intermediate</option>
                <option value='advanced'>Advanced</option>
            </select>
        </div>
    )
}

export default VolumeDisplay;
