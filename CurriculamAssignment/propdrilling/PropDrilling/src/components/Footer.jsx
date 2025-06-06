import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { theme } = useTheme();
  
  const footerStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#333' : '#f0f0f0',
    padding: '10px',
    textAlign: 'center'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 Theme Context Example</p>
    </footer>
  );
}

export default Footer;