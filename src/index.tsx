import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
import * as faker from 'faker';
const randomArray = []

for(let i=0;i<=10000;i++){
  const something = faker.random.word();
  randomArray.push(something);
}

const unique = Array.from(new Set(randomArray));
const string = unique.join("','");

console.log(string);

*/