import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './Redux/store.js';
import {Provider} from "react-redux"; 
import NoteState from './contextAPI/noteState.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <NoteState>
        
    <App />
  
    </NoteState>
    </Provider>

  </StrictMode>
)
