import React from 'react'
import styled from 'styled-components'

export default function Book() {
    return (
        <Cont>
            <Wrapper>
                <Image>
                    <img src="showcard.jpg" alt="streamline" />
                </Image>
                <Detail>
                    <ShowName>
                        Mahesh's Masai Journey
                    </ShowName>
                    <Name>
                        Mahesh Guptha
                    </Name>
                    <Catg>
                        Comedy
                    </Catg>
                    <About>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita libero magnam tenetur autem cum non amet ipsum iste odit adipisci?
                    </About>
                    <BookBtn>
                        <button>Book Now</button>
                    </BookBtn>
                </Detail>
            </Wrapper>
        </Cont>
    )
}

const Cont = styled.div`
    color: #fff;
    margin-top:3rem;
    padding-bottom: 3rem;
    
`
const Wrapper = styled.div`
display: flex;
width: 1000px;
margin: 0 auto;
//text-align: right;
`
const Image = styled.div`
/* width: 300px;*/
height: 500px; 
flex: 1;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Detail = styled.div`
flex: 2;
position: relative;
display: flex;
flex-direction: column;
margin: 2rem 1.5rem;
`
const ShowName = styled.div`
font-size: 3rem;
font-weight: 600;
margin: 1rem 0;
`
const Name = styled.div`
font-size: 1.2rem;
font-weight: 500;
//margin-top:1rem;
`
const Catg = styled.div`
margin-top:1rem;
`
const About = styled.div`
margin-top:1rem;
`
const BookBtn = styled.div`
    button{
        width: 130px;
        height: 50px;
        background: #0099ad;
        border-radius: 3px;
        position: absolute;
        bottom: 0;
        right: 0;
        border: none;
    }
`
