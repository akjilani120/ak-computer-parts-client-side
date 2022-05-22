import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Headers/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import SignUp from './pages/Login/SignUp'
import NotFound from './pages/NotFound/NotFound'
import Footer from './pages/Shared/Footer';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
