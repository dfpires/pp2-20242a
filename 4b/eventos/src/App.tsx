import React, { useState } from 'react';
import './App.css';

const EventHandlingExample: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [clickCount, setClickCount] = useState<number>(0);
  const [nameValue, setNameValue] = useState<string>('');

  // Função para manipular mudanças no campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value)
  }
  // Função para manipular cliques no botão
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    };
  const handleButtonClick2 = () => {
      setClickCount(clickCount - 1);
  };
    return (
      <div>
        <h1>Exemplo de Manipulação de Eventos</h1>
        <div>
          <label htmlFor='inputField'>Digite algo: </label>
          <input
          type='text'
          id='inputField'
          value={inputValue}
          onChange={handleInputChange}
          />
          <p>Você digitou: {inputValue}</p>
        </div>
        <div>
          <label htmlFor='nameField'>Digite Nome: </label>
          <input
            type='text'
            id='nameField'
            value={nameValue}
            onChange={handleNameChange}
          />
          <p>Você digitou: {nameValue}</p>
        </div>
      <div>
      <button onClick={handleButtonClick}>
        Clique aqui para aumentar
      </button>
      <button onClick={handleButtonClick2}>
        Clique aqui para diminuir
      </button>
      <p>O botão foi clicado {clickCount} vezes</p>
      </div>
    </div>
  );
};
function App() {
return (
<div className='App'>
<EventHandlingExample />
</div>
);
}

export default App;