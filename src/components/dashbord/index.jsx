import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

import Header from './header'
import Installments from './Installments'

import Loading from '../utils/Loading'
import Context from '../utils/Context'

const WrapperDash = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #01163e;
`

export default () => {
    const context = useContext(Context)

    const [userInfo, setUserInfo] = useState(false)
    useEffect(() => {
        ;(async () => {
            const data = await Axios.get(
                'http://www.mocky.io/v2/5c923b0932000029056bce39',
            )
            setUserInfo(data.data)
        })()
    }, [])

    return (
        <>
            {!userInfo && <Loading />}
            {userInfo && (
                <Context.Provider value={{ ...context, ...userInfo }}>
                    <WrapperDash>
                        <Header />
                        {userInfo &&
                            userInfo.installments.map(e => (
                                <Installments
                                    key={e.dueDate}
                                    payd={e.payd}
                                    value={e.formatedValue}
                                    dueDate={e.dueDate}
                                />
                            ))}
                    </WrapperDash>
                </Context.Provider>
            )}
        </>
    )
}
