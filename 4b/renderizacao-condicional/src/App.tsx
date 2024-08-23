import React, { useState } from 'react';
import './App.css';

// Definindo a interface para os itens da lista
interface Item {
  id: number;
  name: string;
  }

  // Componente de Lista que renderiza itens com base em uma condição
const ItemList: React.FC = () => {
  const [items] = useState<Item[]>([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    ]);

    const [showItems, setShowItems] = useState<boolean>(true);

    return (
      <div>
        <h1>Lista de Itens</h1>
        <button onClick={() => setShowItems(!showItems)}>
          {showItems ? 'Esconder Itens' : 'Mostrar Itens'}
        </button>
        {/* Renderização Condicional */}
        {showItems ? (
          <ul>
            {/* Renderizando a lista de itens */}
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>A lista está oculta</p>
        )}
      </div>
    );
    };
function App() {
  return (
    <div className='App'>
    <ItemList />
    </div>
    );
  }
  export default App;
  