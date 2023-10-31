import {useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Homee from './Homee'

function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
     <div className='grid-container'>
     <Header OpenSidebar={OpenSidebar}/>
     <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     <Homee />
   </div>
  )
}

export default Dashboard
