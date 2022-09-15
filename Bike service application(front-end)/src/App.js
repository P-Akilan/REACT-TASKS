import './App.css';
import Login from "./Login";
import Register from './Register';
import Application from './Application';
import Pswdchange from './Pswdchange';
import Content from "./Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/application" element={<Application/>}/>
      <Route exact path='/Pswdchange' element={<Pswdchange/>}/>
      <Route exact path='/content' element={<Content/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
