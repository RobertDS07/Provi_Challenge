import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from '../../utils/Context'

const Settings = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    background: blue;
    right: 10px;
    top: 10px;
    cursor: pointer;

    & > p {
        font-size: 1.3rem;
        color: white;
    }

    &:hover .loggout {
        opacity: 1;
        visibility: visible;
    }

    & > .loggout {
        width: 100px;
        height: auto;
        padding: 10px;
        font-size: 1rem;
        background-color: white;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        text-align: left;
        visibility: hidden;
        opacity: 0;
        color: black;
        cursor: default;
        position: absolute;
        right: 10px;
    }
    @media (min-width: 1440px) {
        width: 40px;
        height: 40px;

        & > p {
            font-size: 1.7rem;
        }
    }
`

export default () => {
    const { users, setLogged } = useContext(Context)
    return (
        <Settings>
            <p>{users.email.charAt(0).toUpperCase()}</p>
            <div className="loggout">
                <p>Signed in as</p>
                <p>
                    <strong>{users.email.split('@gmail.com')}</strong>
                </p>
                <hr />
                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        localStorage.removeItem('authorization')
                        setLogged(false)
                    }}
                >
                    Loggout
                </h3>
            </div>
        </Settings>
    )
}
