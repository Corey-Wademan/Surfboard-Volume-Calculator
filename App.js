import React, {useState} from 'react';
import './App.css';
import VolumeDisplay from './Components/VolumeDisplay';

function App() {
  const [weight, setWeight] = useState(165);
  const [experience, setExperience] = useState('beginner');
  const [volume, setVolume] = useState('');

  // records weight value
  const handleWeight = (val) => {
   setWeight(val.target.value);
  }
  // handles experience input
  const handleExperience = (skillLevel) => {
    setExperience(skillLevel.target.value);
  }

  // calculates volume range based off weight and experience levels - converted into kg from pounds
  const calcTotal = () => {
    if (experience === 'beginner') {
      const value1 = (weight / 2.2) * .75;
      const value2 = (weight / 2.2) * .86;

      const total = `${value1.toFixed(2)} - ${value2.toFixed(2)} Liters`;
      return total
    } 

    else if (experience === 'intermediate') {
      const value1 = (weight / 2.2) * .44;
      const value2 = (weight / 2.2) * .50;

      const total = `${value1.toFixed(2)} - ${value2.toFixed(2)} Liters`;
      return total
    } 

    else if (experience === 'advanced') {
      const value1 = (weight / 2.2) * .38;
      const value2 = (weight / 2.2) * .42;

      const total = `${value1.toFixed(2)} - ${value2.toFixed(2)} Liters`;
      return total
    }
  };


    
  

  // sends return of final range as props onClick
  const handleClick = () => {
    setVolume(calcTotal());
  }


  return (
    <>
      <header>
        <h2 id='title'>Surfboard Volume Calculator</h2>
        <p>Find your ideal volume range below based on your weight and skill level</p>
      </header>
      
      
      <div id='info'>
        <h6>Skill levels are determined by: </h6>
        <ul>
          <li className='skills-title'><span>Beginner: </span></li>
            <ul className='skills-text'>
              <li>-Focusing on selecting waves</li>
              <li>-Able to stand up 20% of the time</li>
              <li>-Transitioning from catching waves in the white water to unbroken waves</li>
            </ul> 
          <li className='skills-title'><span>Intermediate:</span></li>
            <ul className='skills-text'>
              <li>-Consistently catching waves unassisted</li>
              <li>-Comfortable preforming smooth cutbacks and turns focusing on flow and speed</li>
              <li>-Can confidently take off frontside / backside and trim effectively down the line</li>
            </ul>
          <li className='skills-title'><span>Advanced:</span> </li>
            <ul className='skills-text'>
              <li>-Preforming manuevers in the critical parts of the wave</li>
              <li>-Progressing towards making majority of tube rides and focusing on pocket surfing</li>
              <li>-Attemping airs</li>
            </ul>
        </ul>

      </div>
      <VolumeDisplay 
        handleExperience={handleExperience}
        handleClick={handleClick}
        handleWeight={handleWeight}
        weight={weight}
        experience={experience}
        total={volume}
      />
    </>
  );
}

export default App;
