import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import Products from './Components/Products';
import ProductsIndex from './Components/ProductsIndex';
import Home from './Components//Home';
import About from './Components/About';
import {BrowserRouter} from 'react-router-dom';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='Products' element={<Products />}>
                  <Route path="/" element={<ProductsIndex/>}/>
                  <Route path=":productID" element={<ProductDetails/>}/>
              </Route>
              <Route path='About' element={<About />}></Route>
              <Route path="Contact" element={<Contact/>} />
        </Routes>
          
        </BrowserRouter>
        
    </div>
  );
}

export default App;
