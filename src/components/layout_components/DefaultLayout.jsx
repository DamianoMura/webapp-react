import { Outlet } from 'react-router-dom'
import  '../../assets/css/index.css'
import Header from './Header'
import Footer from './Footer'
const DefaultLayout = () => {
  return (
    <div className="main">
      <Header/>
      <div className="frame">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
export default DefaultLayout


