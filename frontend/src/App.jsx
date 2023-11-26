import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import ProductDetails from './pages/ProductDetails';
import Loginpage from './pages/loginpage';
import Signinpage from './pages/signinpage';
import ProductList from './pages/ProductList';
import UserProfile from './pages/userprofile';
import LogoutPage from './pages/logoutpage';
import Mylisting from './pages/mylisting';
import AdminPage from './pages/adminpage';
import AddProduct from './pages/addProduct';
import ModifyProduct from './pages/modifyProduct';
import DeleteProduct from './pages/deleteProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/productdetails' element={<ProductDetails/>} />
      <Route path='/productlist' element={<ProductList/>} />
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/signup' element={<Signinpage/>} />
      <Route path='/profile' element={<UserProfile/>} />
      <Route path='/logout' element={<LogoutPage/>} />
      <Route path='/mylistings' element={<Mylisting/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
      <Route path='/modify-product' element={<ModifyProduct/>}/>
      <Route path='/delete-product' element={<DeleteProduct/>}/>
    </Routes>
  );
}

export default App;
