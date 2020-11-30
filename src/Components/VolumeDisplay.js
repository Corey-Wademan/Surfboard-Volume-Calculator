import React from 'react'

const VolumeDisplay = (props) => {




    return (
        <div id='container'>
            <div id='display'>
                <div id='sliderContainer'>
                    <span className='text'>{`${props.weight} lbs`}</span>
                    <input id='weightSlider'  type='range' min='80' max='250' step='1' value={props.weight} onChange={props.handleWeight} />
                </div>

                <div id='label-container'>
                    <label for='experience-level' >Skill Level:</label>
                    <select value={props.experience} onChange={props.handleExperience} name='experience-level' className='experience-select'>
                        <option id='option1' value='beginner'>Beginner</option>
                        <option id='option2' value='intermediate'>Intermediate</option>
                        <option id='option3' value='advanced'>Advanced</option>
                    </select>
                </div>
                
                <button id='calculate-button' onClick={props.handleClick}>Calculate Volume</button>
                {!props.total ? <h2></h2> : <h2 id='result'>{props.total}</h2>}
            </div>
        </div>
    )
}

export default VolumeDisplay;
