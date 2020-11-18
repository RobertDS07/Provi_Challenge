import React, { useContext, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './components/login'
import Dashbord from './components/dashbord'

import NotFound from './components/utils/NotFound'

import ContextComp from './components/utils/Context'

export default () => {
    const Context = useContext(ContextComp)
    const [logged, setLogged] = useState(localStorage.getItem('authorization'))

    return (
        <>
            <Switch>
                <ContextComp.Provider value={{ ...Context, setLogged }}>
                    <Route exact path="/">
                        {logged && <Redirect to="/dashbord" />}
                        <Login />
                    </Route>
                    <Route path="/dashbord">
                        {!logged && <Redirect to="/" />}
                        <Dashbord />
                    </Route>
                </ContextComp.Provider>
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}
