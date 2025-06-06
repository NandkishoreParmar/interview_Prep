import { useState } from 'react';
import Parent from './Parent';

function App() {
  const [message, setMessage] = useState('Hello from App!');

  return (
    <div>
      <h1>Simple Props Drilling</h1>
      <p>App component message: {message}</p>
      <Parent message={message} />
    </div>
  );
}

export default App;