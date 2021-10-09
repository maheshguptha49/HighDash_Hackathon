import React from 'react'
import styled from 'styled-components'
import Banner from '../Components/Banner'
import Navbar from '../Components/Homepage/Navbar'

export default function Homepage() {
    return (
        <Container>
            <Navbar />
            <Banner />
           
        </Container>
    )
}

const Container = styled.div`
    
`

