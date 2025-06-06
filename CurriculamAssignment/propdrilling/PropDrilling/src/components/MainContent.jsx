import { useTheme } from '../context/ThemeContext';

function MainContent() {
  const { theme } = useTheme();
  
  const contentStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#333' : '#f0f0f0',
    padding: '20px',
    minHeight: '300px'
  };

  return (
    <main style={contentStyle}>
      <h2>Main Content</h2>
      <p>Current theme: {theme}</p>
      <p>This content changes based on the selected theme.</p>
    </main>
  );
}

export default MainContent;