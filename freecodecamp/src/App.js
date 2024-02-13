import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponents/Header';
import HomePage from './MyComponents/HomePage';
import SignUp from './MyComponents/SignUp';
import Login from './MyComponents/Login';
import Course from './MyComponents/Course';
import Errror from './MyComponents/Errror';
import './App.css';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
  <Header/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/course' element={<Course/>}/>
    <Route path='*' element={<Errror/>}/>
  </Routes>
  
</>
  );
}

export default App;
