import { useState } from 'react';
import { searchItems, List, randomChars } from './List';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState(searchItems(value));

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setValue(value);
    setItems(searchItems(value));
  };

  const handleRandom = () => {
    const value = randomChars();
    setValue(value);
    setItems(searchItems(value));
  }

  return (
    <div>
      <div>
        <input value={value} onChange={handleChange} />
        <button onClick={handleRandom}>Random</button>
      </div>

      <List items={items} />
    </div>
  );
}

export default App;
