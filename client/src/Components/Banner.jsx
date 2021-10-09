import React from 'react'
import ShowCard from './Homepage/ShowCard'
import styled from 'styled-components'

export default function Banner() {
    return (
        <BannerCont>
            <BannerName>
                Comedy
            </BannerName>
            <Cards>
            <ShowCard />
            <ShowCard />
            <ShowCard/>
            <ShowCard/>
            <ShowCard/>
            </Cards>
        </BannerCont>
    )
}

const BannerCont = styled.div`
    display: flex;
    flex-direction: column;
    background: #131a27;
    height: 350px;
    padding: 0 1rem;
`
const BannerName = styled.div` 
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    padding-top: 1rem;
    padding-left: 5rem;
`
const Cards = styled.div` 
    display: flex;
    justify-content: space-evenly;
`
