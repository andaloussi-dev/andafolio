import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import { GlobalStyle } from './styles';

function App() {
  return (
    <div id="root">
      <GlobalStyle />
      <Navbar />
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
