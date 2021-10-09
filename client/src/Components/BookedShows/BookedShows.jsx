import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ShowCard from '../Homepage/ShowCard'
import axios from "axios"
import {useSelector} from "react-redux"
import {backurl} from '../../utils/url'
import { Link } from 'react-router-dom'
export function BookedShows() {
    const {user}=useSelector((state) => state.auth)
    const [bookedShowsArray,setBookedShowsArray]=useState([])
    useEffect(() => {
        getData()
    },[])
    async function getData() {
        try {
            let {data}=await axios.get(`${backurl}/api/users/${user._id}`)
            setBookedShowsArray(data.bookedShows)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <Cards>
                {bookedShowsArray.map((item) => {
                    return <Link to={`bookedshows/${item._id}`}>
                    <ShowCard {...item}/>
                    </Link>
                })}
            </Cards>
        </div>
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
