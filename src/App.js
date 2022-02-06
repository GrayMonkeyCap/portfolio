import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path= "/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
