import React from 'react';
import './App.css';

// Definindo uma interface para as props
interface WelcomeProps {
  name: string;
  age: number;
  address: string;
  city: string;
  }

  const Welcome: React.FC<WelcomeProps> = ({ name, age, address, city }) => {
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>You are {age} years old.</p>
        <p>You address {address} </p>
        <p>You city {city} </p>
    </div>
);
};

function App() {
  return (
  <div className='App'>
    <Welcome name='Alice' age={25} address='Centro' city='Franca'/>
    <Welcome name='Bob' age={30} address='Eliseos' city='Ribeirão'/>
    <Welcome name='Charlie' age={35} address='Morumbi' city='São Paulo'/>
  </div>
  );
  }
  export default App;