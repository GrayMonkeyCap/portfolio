import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import AddProjects from './Pages/AddProjects';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path= "/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/addprojects" element={<AddProjects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
