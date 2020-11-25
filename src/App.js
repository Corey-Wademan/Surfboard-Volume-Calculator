import React, {useState} from 'react';
import './App.css';
import VolumeDisplay from './Components/VolumeDisplay';

function App() {
  const [weight, setWeight] = useState(null);
  const [experience, setExperience] = useState(null);
  const [volume, setVolume] = useState(null);

  //Functions

  const calculateWeightRange = (input) => {

  }

  const calcFinalRange = () => {

  }

  const handleClick = () => {

    setVolume(calcFinalRange());
  }


  return (
    <div id='wrapper'>
      <VolumeDisplay 

      />
    </div>
  );
}

export default App;
