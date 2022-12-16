import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import {ThemeProviderProvider} from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProviderProvider>
        <Header />
        <Characters />
      </ThemeProviderProvider>
    </div>
  );
}

export default App;
