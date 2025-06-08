import React, { useReducer } from 'react';

function Counter() {
  // 1. Define initial state
  const initialState = { count: 0 };

  // 2. Create reducer function
  function counterReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontSize: '24px'
    }}>
      <h1>Counter with useReducer</h1>
      <div style={{ fontSize: '48px', margin: '20px' }}>
        {state.count}
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            margin: '0 10px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            margin: '0 10px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;