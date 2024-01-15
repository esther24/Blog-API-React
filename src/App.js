import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages import
import Home from "./pages/home"
import Navbar from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signup';
//import Signout from './pages/signout';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
        </Routes>
      </div>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
