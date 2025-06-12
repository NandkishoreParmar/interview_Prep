import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => console.log("REsponse",response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Notes App Frontend</h1>
    </div>
  );
}

export default App;