import './App.css';
import Nav from './comps/Nav';
import Detail from './layouts/Detail';
import Home from './layouts/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './layouts/Profile';
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/course_detail' element={<Detail />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
