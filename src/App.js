import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Homepage from './pages/homepage/homepage'
import './app.scss'
import Loginpage from './pages/loginpage/loginpage'


import { useHistory, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import WatchingPage from './pages/watchingPage/watchingPage'
import SearchingPage from './pages/searchingpage/searchingPage'



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

    const { accessToken, loading } = useSelector(state => state.auth)

    const history = useHistory()

    useEffect(() => {

        if (!loading && !accessToken) {
            history.push('/auth')
        }

    }, [accessToken, loading, history])

    return (

        <Switch>
            <Route path='/' exact>
                <Layout>
                    <Homepage />
                </Layout>
            </Route>

            <Route path='/auth'>
                <Loginpage />
            </Route>

            <Route path='/search:query' >
                <Layout>
                    <SearchingPage />
                </Layout>
            </Route>
            <Route path='/watch:id' >
                <Layout>
                    <WatchingPage />
                </Layout>
            </Route>

            <Route>
                <Redirect to='/' />
            </Route>
        </Switch>


    )
}

export default App