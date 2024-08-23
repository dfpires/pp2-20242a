import './App.css';
import { useState } from 'react';
import ColorBox from './components/ColorBox';
import ColorInput from './components/ColorInput';
import WidthInput from './components/WidthInput';
import WidthButton from './components/WidthButton';
function App() {
  const [color, setColor] = useState<string>('white');
  const [width, setWidth] = useState<number>(100);
  return (
    <div className='App'>
      <h1>Mudar Cor de Fundo com useEffect</h1>
      <ColorInput color={color} setColor={setColor} />
      <ColorBox color={color} />
      <WidthInput width={width} setWidth={setWidth} />
      <WidthButton width={width} />
    </div>
  );
}
export default App;