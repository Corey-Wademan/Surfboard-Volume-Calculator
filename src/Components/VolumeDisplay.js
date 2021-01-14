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

                    <label for='wave-type' >Wave Type:</label>
                    <select value={props.waveType} onChange={props.handleWave} name='wave-type' className='wave-select'>
                        <option id='option1' value='hollow'>Hollow</option>
                        <option id='option2' value='crumbly'>Crumbly</option>
                        <option id='option3' value='mushy'>Mushy | Fat | Deep</option>
                    </select>

                    <label for='wave-size' >Wave Size:</label>
                    <select value={props.waveSize} onChange={props.handleSize} name='wave-size' className='waveSize-select'>
                        <option id='option1' value='waist-chest'>Waist - Chest High</option>
                        <option id='option2' value='chest-head'>Chest - Head High</option>
                        <option id='option3' value='overhead'>Overhead</option>
                        <option id='option4' value='2xoverhead'>2x Overhead </option>
                    </select>
                </div>
                
                <button id='calculate-button' onClick={props.handleClick}>Calculate Volume</button>
                {!props.total ? <></> : <h2 id='result'>{props.total}</h2>}
            </div>
        </div>
    )
}

export default VolumeDisplay;
