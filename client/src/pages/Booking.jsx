import React from 'react'
import Book from '../Components/BookShow/Book'
import Navbar from '../Components/Homepage/Navbar'
import styled from 'styled-components'

export default function Booking() {
    return (
        <Cont>
            <Navbar/>
            <Book/>
        </Cont>
    )
}

const Cont = styled.div`
background-color: #131a27;
`
