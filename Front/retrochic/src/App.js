import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Catalogue from './pages/catalogue';
import About from './pages/about';
// import Shop from './pages/shop';
import Popup from './pages/popup';
import Login from './pages/login';
import Register from './pages/register';
// import Header from './components/header';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/about" component={About} />
        {/* <Route path="/shop" component={Shop} /> */}
        <Route path="/popup" element={<Popup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
