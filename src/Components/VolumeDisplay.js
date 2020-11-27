import React from 'react'

const VolumeDisplay = (props) => {


    return (
        <div id='container'>
            <input id='weight-slider' type='range' min='80' max='250' step='5' value={props.weight} onChange={props.handleWeight} />

            <label for='experience-level' >Skill Level:</label>
            <select value={props.experience} onChange={props.handleExperience} name='experience-level' id='experience-level'>
                <option id='option1' value='beginner'>Beginner</option>
                <option id='option2' value='intermediate'>Intermediate</option>
                <option id='option3' value='advanced'>Advanced</option>
            </select>
            <button onClick={props.handleClick}>Calculate Volume</button>
            <h2>{props.total}</h2>
        </div>
    )
}

export default VolumeDisplay;
