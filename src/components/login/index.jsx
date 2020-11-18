import React from 'react'
import styled from 'styled-components'

import background from '../../assets/background-login.svg'

import Form from './Form'

const WrapperLogin = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #01163e;
    & > img {
        display: none;
    }

    @media (min-width: 1440px) {
        & > img {
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
`

export default () => {
    return (
        <WrapperLogin>
            <Form />
            <img src={background} alt="Rocket" />
        </WrapperLogin>
    )
}
