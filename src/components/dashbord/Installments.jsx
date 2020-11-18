import React from 'react'
import styled from 'styled-components'

const Installments = styled.div`
    width: 100%;
    height: 50px;
    background-color: #01102c;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: white;

    & > .status {
        grid-column: 1;
        color: ${({ payd }) => (payd ? 'green' : 'red')};
        display: flex;
        align-items: center;
    }
    & > .value {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 0.8rem;
        justify-content: center;
    }

    @media (min-width: 350px) {
        & > .status {
            margin-left: 10%;
        }
        & > .value {
            margin-right: 10%;
        }
    }
`

export default ({ value, dueDate, payd }) => {
    return (
        <Installments>
            <div className="status">
                <p>Status: {!payd ? 'não pago' : 'pago'}</p>
            </div>
            <div className="value">
                <p>{value}</p>
                <p>val: {dueDate}</p>
            </div>
        </Installments>
    )
}
