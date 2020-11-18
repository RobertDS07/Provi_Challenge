import React, { useContext } from 'react'
import styled from 'styled-components'

import Settings from './Settings'

import Context from '../../utils/Context'

const Header = styled.header`
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    color: white;
    font-size: 0.6rem;

    @media (min-width: 1440px) {
        justify-content: space-evenly;
    }
`

export default () => {
    const { amountTaken, amountPayd, totalAmountInTaxes } = useContext(Context)
    return (
        <Header>
            <Settings />
            <p>AMOUNT TAKEN: {amountTaken}</p>
            <p>AMOUNT PAYD: {amountPayd}</p>
            <p>TOTAL TO PAY: {amountTaken + totalAmountInTaxes}</p>
        </Header>
    )
}
