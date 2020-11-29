import React from 'react'

const VolumeDisplay = (props) => {




    return (
        <div id='container'>
            <div id='sliderContainer'>
                <span class='text' >{`${props.weight} lbs`}</span>
                <input id='weightSlider'  type='range' min='80' max='250' step='1' value={props.weight} onChange={props.handleWeight} />
            </div>

            <div id='label-container'>
                <label for='experience-level' >Skill Level:</label>
                <select value={props.experience} onChange={props.handleExperience} name='experience-level' id='experience-level'>
                    <option id='option1' value='beginner'>Beginner</option>
                    <option id='option2' value='intermediate'>Intermediate</option>
                    <option id='option3' value='advanced'>Advanced</option>
                </select>
            </div>
            
            <button onClick={props.handleClick}>Calculate Volume</button>
            <h2 class='text' id='result'>{props.total}</h2>
        </div>
    )
}

export default VolumeDisplay;
