//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './pages/Footer';
import  Navbarr from './pages/Navbarr';
import Cards from './pages/Cards';
import Contact from './pages/Contact';



function App() {
  return (
    
  <>
<Router>
  <Routes>
    <Route exact path= '/' Component={Home} />
    <Route exact path= '/navbar' Component={Navbarr} />
    <Route exact path= '/cards' Component={Cards} />
    <Route exact path= '/footer' Component={Footer} />
    <Route exact path= '/contact' Components={Contact} />
 
  </Routes>
</Router>

    </>
  );
}

export default App;
