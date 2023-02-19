import './App.css';
import Heading from './Component/Heading';
import Block from './Component/Block';
import Data from './Component/Data';
import {useState} from 'react';

function App() {
  // const obj=[{"1px solid red"},]
  // const [selectedIndex, setSelectedIndex] = useState('');

  return (

    <div className="App">
      <Heading />
      <div className='outerContainer'>{
       
       
        
        Data.map((value, index) => (
          
        <Block 
             name={value.name3}
            agee={value.age} 
            idd={value.id}
            col={value.color}

          />
        ))
      }

      </div>
    </div>

  );
}

export default App;
