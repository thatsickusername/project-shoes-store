import './App.css'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/Navbar'
import Navbar from './components/Navbar'
import ShoeCardBig from './components/ShoeCardBig'
import ShoeCart from './components/ShoeCart'
import ShoeGrid from './components/ShoeGrid'
import ShoeList from './components/ShoeList'
import {ProductsProvider} from './ProductContext'
import ShoeQuote from './components/ShoeQuote';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <ProductsProvider> 
              <Navbar/>
              <ShoeGrid/>
              <ShoeCardBig/>
              <ShoeQuote/>
              <ShoeList/>
              <Footer/>
            </ProductsProvider>
          </Route>

          <Route path='/cart' exact>
            <ProductsProvider> 
                <Navbar/>
                <ShoeCart/>
              </ProductsProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
