import React, {useState} from 'react';
import './App.css';
import VolumeDisplay from './Components/VolumeDisplay';

function App() {
  const [weight, setWeight] = useState();
  const [experience, setExperience] = useState('beginner');
  const [volume, setVolume] = useState();

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
      const value1 = (weight / 2.2) * .80;
      const value2 = (weight / 2.2) * 1;

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
    <div>
      <VolumeDisplay 
        handleExperience={handleExperience}
        handleClick={handleClick}
        handleWeight={handleWeight}
        weight={weight}
        experience={experience}
        total={volume}
      />
    </div>
  );
}

export default App;
