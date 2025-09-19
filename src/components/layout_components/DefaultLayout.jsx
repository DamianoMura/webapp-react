import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
const DefaultLayout = () => {
  return (
    <div className="main">
      <Header/>
        <div className="container bg-body-secondary my-3">
          <Outlet />
        </div>
      <Footer/>
    </div>
  )
}

export default DefaultLayout
