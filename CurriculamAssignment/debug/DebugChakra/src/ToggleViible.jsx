import React, { useReducer } from 'react';

function ToggleVisibility() {
  // 1. Define initial state
  const initialState = { isVisible: false };

  // 2. Create reducer function
  function visibilityReducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_VISIBILITY':
        return { isVisible: !state.isVisible };
      default:
        return state;
    }
  }

  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Toggle Visibility with useReducer</h1>
      
      <button
        onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          margin: '20px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Toggle Message
      </button>

      {/* 4. Conditionally render message */}
      {state.isVisible && (
        <div style={{
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          fontSize: '24px',
          marginTop: '20px'
        }}>
          Hello, World!
        </div>
      )}
    </div>
  );
}

export default ToggleVisibility;