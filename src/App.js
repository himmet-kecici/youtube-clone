import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Homepage from './pages/homepage/homepage'
import './app.scss'

const App = () => {
    return (
        <div>

            <Header />
            <div className='app-container border border-info'>
                <Sidebar />

                <Container fluid className='app-main border border-warning' >
                    <Homepage />
                </Container>
            </div>
        </div>
    )
}

export default App