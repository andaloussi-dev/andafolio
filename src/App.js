import './App.css';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles';

function App() {
  return (
    <div id="root">
      <GlobalStyle />
      <Navbar />
    </div>
  );
}

export default App;
