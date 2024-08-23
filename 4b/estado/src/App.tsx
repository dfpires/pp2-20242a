import React from 'react';
import './App.css';
// Definindo a interface para o estado do componente
interface ClockState {
date: Date;
}
class Clock extends React.Component<{}, ClockState> {
private timerID?: NodeJS.Timeout;
constructor(props: {}) {
  super(props);
  // Inicializando o estado
  this.state = { date: new Date() };
  }
  // Método chamado imediatamente após o componente ser montado no DOM
  componentDidMount() {
  this.timerID = setInterval(() => this.tick(), 1000);
  }
  // Método chamado imediatamente antes do componente ser desmontado e destruído
  componentWillUnmount() {
  clearInterval(this.timerID);
  }
  // Método que atualiza o estado com a hora atual
  tick() {
  this.setState({ date: new Date() });
  }
  render() {
  return (
    <div>
<h1>Hora Atual:</h1>
<h2>{this.state.date.toLocaleTimeString()}</h2>
</div>
);
}
}
function App() {
return (
<div className='App'>
<Clock />
</div>
);
}

export default App;