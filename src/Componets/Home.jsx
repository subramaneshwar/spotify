import React from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
// import Content from './Content'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
       
        <div className=' position-relative'>
          
          <Outlet/>
      </div>
    )
}

export default Home