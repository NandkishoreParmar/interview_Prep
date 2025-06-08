import React, { useReducer } from 'react';

// 1. Define initial state
const initialState = {
  theme: 'light'
};

// 2. Create reducer function
function themeReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
}

function ThemeToggleApp() {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // 4. Styles based on current theme
  const appStyles = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#333' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease'
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: state.theme === 'light' ? '#333' : '#fff',
    color: state.theme === 'light' ? '#fff' : '#333',
    border: 'none',
    borderRadius: '4px'
  };

  return (
    <div style={appStyles}>
      <h1>Theme Toggle with useReducer</h1>
      <p>Current theme: {state.theme}</p>
      
      {/* 5. Dispatch action on button click */}
      <button 
        style={buttonStyles}
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggleApp;