
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen'>
    <Header/>
      <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
