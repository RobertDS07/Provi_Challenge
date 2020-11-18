import React, { useContext } from 'react'
import styled from 'styled-components'

import catchInputs from '../../utils/catchInputsData'
import showNotify from '../../utils/showNotify'

import Context from '../utils/Context'

const Form = styled.form`
    width: 80%;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    & > input {
        background: transparent;
        border: 0px transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        color: white;
        transition: 0.3s;
        outline: none;
        padding: 2px;
    }
    & > input:focus {
        border-bottom: 1px solid rgb(255, 255, 255);
    }

    & > button {
        width: 200px;
        height: 50px;
        padding: 10px;
        border-radius: 32px;
        border: none;
        outline: none;
        box-shadow: 0px 1px 10px black;
    }
`

export default () => {
    const { users, setLogged } = useContext(Context)
    const login = e => {
        e.preventDefault()
        const { email, password } = catchInputs(e)

        if (!email || !password)
            return showNotify('Por favor preencha todos os campos.', 'error')

        if (email !== users.email || password !== users.password)
            return showNotify('Credenciais inválidas', 'error')

        localStorage.setItem('authorization', true)
        setLogged(true)
    }

    return (
        <Form onSubmit={e => login(e)}>
            <input
                type="text"
                name="email"
                id="email"
                placeholder="admin@gmail.com"
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="admin"
            />
            <button type="submit">Avançar</button>
        </Form>
    )
}
