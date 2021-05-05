import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'

const App = () => {
    return (
        <div>
            <Header />
            <div className='app_container'>
                <Sidebar />
                <Container fluid className='app__main' />
            </div>
        </div>
    )
}

export default App