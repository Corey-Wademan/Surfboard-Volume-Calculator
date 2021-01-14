import React, {useState} from 'react';
import './App.css';
import VolumeDisplay from './Components/VolumeDisplay';

function App() {
  const [weight, setWeight] = useState(165);
  const [experience, setExperience] = useState('beginner');
  const [waveType, setWaveType] = useState('hollow');
  const [waveSize, setWaveSize] = useState('waist-chest')
  const [volume, setVolume] = useState('');
  

  // records weight value
  const handleWeight = (val) => {
   setWeight(val.target.value);
  }
  // handles experience input
  const handleExperience = (skillLevel) => {
    setExperience(skillLevel.target.value);
  }
  // handle wave type
  const handleWave = (wavetype) => {
    setWaveType(wavetype.target.value);
  }
  // handle wave size
  const handleSize = (wavesize) => {
    setWaveSize(wavesize.target.value);
  }

  // calculates volume range based off weight | experience | wave type | wave size
  const calcTotal = () => {
    const hollow = .985;
    const crumbly = 1.03;
    const mushy = 1.05;
    const sm = 1;
    const med = 1.01;
    const lrg = 1.02;
    const xl = 1.038;

    if (experience === 'beginner') {
      let value1 = (weight / 2.2) * .5;
      let value2 = (weight / 2.2) * .7;

      if (waveType === 'hollow') {
        value1 *= hollow;
        value2 *= hollow;
      } else if (waveType === 'crumbly') {
        value1 *= crumbly;
        value2 *= crumbly;
      } else if (waveType === 'mushy') {
        value1 *= mushy;
        value2 *= mushy;
      }

      if (waveSize === 'waist-chest') {
        value1 *= sm;
        value2*= sm;
      } else if (waveSize === 'chest-head') {
        value1 *= med;
        value2*= med;
      } else if (waveSize === 'overhead') {
        value1 *= lrg;
        value2*= lrg;
      } else if (waveSize === '2xoverhead') {
        value1 *= xl;
        value2*= xl;
      }

      const total = `${value1.toFixed(2)} - ${value2.toFixed(2)} Liters`;
      return total
    } 

    else if (experience === 'intermediate') {
      let value1 = (weight / 2.2) * .43;
      let value2 = (weight / 2.2) * .47;

      if (waveType === 'hollow') {
        value1 *= hollow;
        value2 *= hollow;
      } else if (waveType === 'crumbly') {
        value1 *= crumbly;
        value2 *= crumbly;
      } else if (waveType === 'mushy') {
        value1 *= mushy;
        value2 *= mushy;
      }

      if (waveSize === 'waist-chest') {
        value1 *= sm;
        value2*= sm;
      } else if (waveSize === 'chest-head') {
        value1 *= med;
        value2*= med;
      } else if (waveSize === 'overhead') {
        value1 *= lrg;
        value2*= lrg;
      } else if (waveSize === '2xoverhead') {
        value1 *= xl;
        value2*= xl;
      }

      const total = `${value1.toFixed(2)} - ${value2.toFixed(2)} Liters`;
      return total
    } 

    else if (experience === 'advanced') {
      let value1 = (weight / 2.2) * .38;
      let value2 = (weight / 2.2) * .42;

      if (waveType === 'hollow') {
        value1 *= hollow;
        value2 *= hollow;
      } else if (waveType === 'crumbly') {
        value1 *= crumbly;
        value2 *= crumbly;
      } else if (waveType === 'mushy') {
        value1 *= mushy;
        value2 *= mushy;
      }

      if (waveSize === 'waist-chest') {
        value1 *= sm;
        value2*= sm;
      } else if (waveSize === 'chest-head') {
        value1 *= med;
        value2*= med;
      } else if (waveSize === 'overhead') {
        value1 *= lrg;
        value2*= lrg;
      } else if (waveSize === '2xoverhead') {
        value1 *= xl;
        value2*= xl;
      }

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
        <p>Find your ideal volume range below based on your weight,skill level, wave type, and wave size</p>
      </header>
      
      
      <div id='info'>
        <h6>Skill levels: </h6>
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
              <li>-Attempting turns focusing on flow and speed</li>
              <li>-Can confidently take off frontside / backside and pump effectively down the face of the wave</li>
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
        handleWave={handleWave}
        handleSize={handleSize}
        waveSize={waveSize}
        waveType={waveType}
        weight={weight}
        experience={experience}
        total={volume}
      />
    </>
  );
}

export default App;
