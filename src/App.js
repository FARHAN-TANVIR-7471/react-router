import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import NoteFound from './components/NoteFounf/NoteFound';

function App() {
  return (
    <div className="App">
      <h1>Home come to my routing website practice</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/friends' element={<Friends/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NoteFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
