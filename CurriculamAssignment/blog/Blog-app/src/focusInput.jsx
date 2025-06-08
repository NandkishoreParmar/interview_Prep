import { useRef, useState } from 'react';

function FocusInput() {
  // Create a ref for the input element
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleButtonClick = () => {
    // Focus the input using the ref
    inputRef.current.focus();
    // Set focused state to true
    setIsFocused(true);
  };

  // Style objects
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    // Change background color when focused
    backgroundColor: isFocused ? '#ffffcc' : 'white',
    transition: 'background-color 0.3s ease'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const messageStyle = {
    color: '#4CAF50',
    fontSize: '14px',
    height: '20px'
  };

  return (
    <div style={containerStyle}>
      <h2>Focus Input Example</h2>
      
      <input
        type="text"
        ref={inputRef}
        placeholder="Click button to focus"
        style={inputStyle}
        // Reset focused state when input loses focus
        onBlur={() => setIsFocused(false)}
      />
      
      <button 
        onClick={handleButtonClick}
        style={buttonStyle}
      >
        Focus Input
      </button>
      
      <div style={messageStyle}>
        {isFocused && 'Focused!'}
      </div>
    </div>
  );
}

export default FocusInput;