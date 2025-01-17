
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const App = () => {
  // Initialize AOS library
useEffect(() => {
  AOS.init({ 
  offset:120,
  once:true,
  });
}, []); 
  return (
    <div className='h-screen w-full'>
    <Header/>
      <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
