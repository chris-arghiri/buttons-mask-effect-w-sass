import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='ButtonContainer1'>
        <span className='Mask'>Text Here</span>
        <button type='button' name='Hover'>
          Text Here
        </button>
      </div>
      <div className='ButtonContainer2'>
        <span className='Mask'>Text Here</span>
        <button type='button' name='Hover'>
          Text Here
        </button>
      </div>
    </div>
  );
};

export default App;
