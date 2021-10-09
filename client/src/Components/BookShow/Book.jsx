import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useParams} from "react-router-dom"
import { backurl } from '../../utils/url'
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
export default function Book() {

    const {user,token}=useSelector((state)=>state.auth)
    const {id}=useParams()
    const [show,setShow]=useState({})
    const history = useHistory()
    useEffect(() => {
       getData()
    }, [])
    async function getData(){
        const {data}=await axios.get(`${backurl}/api/show/${id}`)
        console.log(data.show)
        setShow(data.show)
    }
    async function bookShow(){

       history.push(`/payment?show_id=${show._id}&user_id=${user._id}`)

    }
    return (
        <Cont>
            <Wrapper>
                <Image>
                    <img src={show.imageURL?show.imageURL:"https://pbs.twimg.com/profile_images/1234759443193180161/5qmltfjB.jpg"} alt="streamline" />
                </Image>
                <Detail>
                    <ShowName>
                       {show.show}
                    </ShowName>
                    <Name>
                        {show?.artist?.name}
                    </Name>
                    <Catg>
                        {show.category}
                    </Catg>
                    <About>
                        {show.about?show.about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita libero magnam tenetur autem cum non amet ipsum iste odit adipisci?"}
                    </About>
                    <Price>
                        $ {show?.price} only
                    </Price>
                    <BookBtn>
                        <button onClick={bookShow}>Book Now</button>
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
const Price = styled.div`
font-size: 1.2rem;
font-weight: 500;
margin-top:1rem;`

