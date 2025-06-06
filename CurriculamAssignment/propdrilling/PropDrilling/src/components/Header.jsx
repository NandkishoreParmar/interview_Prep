import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  const headerStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#333' : '#f0f0f0',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <header style={headerStyle}>
      <h1>Theme Context Example</h1>
      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>
    </header>
  );
}

export default Header;