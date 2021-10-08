import React from 'react'
import styled from 'styled-components'


export default function ShowCard() {
    return (
        <CardCont>
            <Card>
                <img src="showcard.jpg" alt="" />
            </Card>
            <Details>
                <div>Show Name</div>
                <div>Artist Name</div>
                <div>Time</div> 
            </Details>
        </CardCont>
    )
}


const CardCont = styled.div`
    width:220px;
    height:300px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 5px;
    overflow: hidden;
`
const Card = styled.div`
    width:100%;
    height:80%;
    img{
        width:100%;;
        height: 100%;
        object-fit: cover;
    }
`
const Details = styled.div`
padding: 0.5rem;
background-color: #080311;
color: #fff;
margin-top:-1rem;
height: 150px;
width: 100%;
display: flex;
flex-direction: column;
`