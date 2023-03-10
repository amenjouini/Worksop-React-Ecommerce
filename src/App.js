import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';


const Home = lazy(()=>import('./Components/Home'));
const ProductDetails = lazy(()=>import('./Components/ProductDetails'));
const AddProduct = lazy(()=>import('./Components/addProduct'));

const Products = lazy(()=>import('./Components/Products'));
const ProductLayout = lazy(()=>import('./Components/ProductLayout'));
const NotFound = lazy(()=>import('./Components/NotFound'));


function App() {
 
  return (
    // <Fragement>
    <>
  
    {/* <Products/> */}
    <Suspense fallback={<h1>Loaading ....</h1>}>
    <CustomNavbar/>
    <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<h1>Home</h1>}/> 
      <Route path="/home/:username" element={<Home/>}/> 
      <Route path="/products" element={<ProductLayout />}>
          <Route path='list' element ={<Products />}/>    index ?
          <Route path="add" element={<AddProduct/>}/>
          <Route path=":name" element={<ProductDetails/>}/>
      </Route>
    </Routes>
    </Suspense>
    </>
    // </Fragement>
  );
}

export default App;
