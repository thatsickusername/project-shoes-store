import './App.css';
import Footer from './components/Footer';
import './components/Navbar'
import Navbar from './components/Navbar'
import ShoeCardBig from './components/ShoeCardBig';
import ShoeGrid from './components/ShoeGrid';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShoeGrid/>
      <ShoeCardBig/>
      <Footer/>
    </div>
  );
}

export default App;
