import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles';

function App() {
  return (
    <div id="root">
      <GlobalStyle />
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
