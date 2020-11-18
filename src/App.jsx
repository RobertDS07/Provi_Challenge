import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'

import NotifyMessage from './components/utils/Notify'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        font-family: 'Open Sans', sans-serif;
    }
`

export default () => (
    <>
        <GlobalStyles />

        <NotifyMessage />

        <Router>
            <Routes />
        </Router>
    </>
)
