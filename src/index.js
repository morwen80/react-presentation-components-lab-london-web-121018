import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

// const shoutMood = (mood) => {
//  return `I am just ${mood}`
// }

const shout = () => {
  alert("I AM SO SO SO happy")
}

ReactDOM.render(

  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={shout} />
  </div>,
  document.getElementById('root')
);
