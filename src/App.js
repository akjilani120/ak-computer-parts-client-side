import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './pages/Headers/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Footer from './pages/Shared/Footer';
import Resiger from './pages/Login/Resiger';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleProduct from './pages/Home/SingleProduct';
import  RequireAuth from './pages/Shared/RequireAuth'
import AddReviews from './pages/Dashboard/AddReviews';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageAllOrdars from './pages/Dashboard/ManageAllOrdars';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageProduct from './pages/Dashboard/ManageProduct';
import RequireAdmin from './pages/Shared/RequireAdmin';
import Payment from './pages/Dashboard/Payment';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/dashboard' element={<RequireAuth>
        <Dashboard></Dashboard>
       </RequireAuth>}>
         <Route index element={<MyProfile></MyProfile>}></Route>
         <Route path='addReviews' element={<AddReviews></AddReviews>}></Route>
         <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
         <Route path='addedProduct' element={<AddProduct></AddProduct>}></Route>
         <Route path='manageAllOrders' element={<ManageAllOrdars></ManageAllOrdars>}></Route>
         <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
         <Route path='payment/:payId' element={<Payment></Payment>}></Route>
         <Route path='manageProduct' element={<RequireAdmin>
          <ManageProduct></ManageProduct>
         </RequireAdmin>}></Route>
       </Route>
       <Route path='/payment' element={
        <Payment></Payment>
      }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/resiger' element={<Resiger></Resiger>}></Route>
       <Route path='/singleProduct/:id' element={<RequireAuth>
         <SingleProduct></SingleProduct>
         </RequireAuth>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer />
    </div>
  );
}

export default App;
