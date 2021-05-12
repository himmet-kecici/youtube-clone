import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Homepage from './pages/homepage/homepage'
import './app.scss'
import Loginpage from './pages/loginpage/loginpage'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const Layout = ({ children }) => {

    const [sidebar, toggleSidebar] = useState(false)

    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        <div>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className='app-container '>
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

                <Container fluid className='app-main' >
                    {children}
                </Container>
            </div>
        </div>
    )
}

const App = () => {


    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Layout>
                        <Homepage />
                    </Layout>
                </Route>

                <Route path='/auth'>
                    <Loginpage />
                </Route>

                <Route path='/search' >
                    <Layout>
                        <h1> Search</h1>
                    </Layout>
                </Route>
                <Route>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Router>

    )
}

export default App