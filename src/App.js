import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Homepage from './pages/homepage/homepage'
import './app.scss'
import Loginpage from './pages/loginpage/loginpage'

const App = () => {

    const [sidebar, toggleSidebar] = useState(false)

    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        // <div>

        //     <Header handleToggleSidebar={handleToggleSidebar} />
        //     <div className='app-container '>
        //         <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

        //         <Container fluid className='app-main' >
        //             <Homepage />
        //         </Container>
        //     </div>
        // </div>
        <Loginpage />
    )
}

export default App