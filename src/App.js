import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div id="about" style={{marginTop:1500,color:'white'}}>lol</div>
    </BrowserRouter>
  );
}

export default App;
