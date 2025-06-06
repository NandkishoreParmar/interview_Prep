import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Prop from './Propdri';

function App() {
  return (
    <>
    <Prop/>
    <ThemeProvider>
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  </>
  );
}

export default App;