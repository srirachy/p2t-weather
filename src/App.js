import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Contacts from './pages/Contacts';
// import NavBar from './components/NavBar';
import "./App.css";

const App = () => {

  return ( 
    <div className="App" id='app-test'>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacts/:id' element={<Contacts />} />
      </Routes>
    </div>
  )
};

export default App;
