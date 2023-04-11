
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Singeproduct from './components/Singeproduct';
import Cart from './components/insidecomps/Cart';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/singleproduct/:id' element={<Singeproduct/>}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
