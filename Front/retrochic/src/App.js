import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Catalogue from './pages/catalogue';
import About from './pages/about';
import Popup from './pages/popup';
import Shop from './pages/shop';
import Login from './pages/login';
import Register from './pages/register';
import { AuthProvider } from '../src/context/AuthProvider';

function App() {
  return (<>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/about" component={About} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
