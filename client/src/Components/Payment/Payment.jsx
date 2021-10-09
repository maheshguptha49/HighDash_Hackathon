import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Payment.module.css";
import {useHistory} from "react-router-dom"
import swal from 'sweetalert';
import {useQuery} from "../../Hooks/useQuery"
import axios from "axios";
import { backurl } from "../../utils/url";
export function Payment() {
    const history = useHistory()
    const [cardNumber,setCardNumber] =useState("#### #### #### ####")
    const [cardHolder,setCardHolder] =useState("")
    const [month,setMonth] =useState("")
    const [year,setYear] =useState("")
    const [cvv,setCvv] =useState("")
    const {queriesObj}=useQuery()
   async  function handleSubmit(){
        await bookShow()
        swal({
            title: "Payment Successful",
            icon: "success",
            button: "Ok",
        });
        
        setTimeout(() => {
            history.push("/home")
        }, 1000)
    }

    async function bookShow(){
      const payload={
          user:queriesObj.user_id,
          booked:queriesObj.show_id
      }
      console.log(payload,"payload")
     let {data}= await axios.post(`${backurl}/api/book`,payload)

  }
  return (
    <div  className={styles.main}>
      <div className={styles.cardwrapper}>
        <div className={styles.card}>
          <div className={styles.cardheader} >
            
            <img
              src="streamline.svg"
              className={styles.logo}
              alt="df"
              style={{margin:"auto"}}
            />
          </div>
          <div className={styles.cardnumber}>
            <p className={styles.pcardnumber} style={{color:"#999",fontWeight:"bold"}}>{cardNumber}</p>
          </div>
          <div className={styles.cardbottom}>
            <div className={styles.cardnamewrapper}>
              <p className={styles.cardname}  style={{color:"#999",fontWeight:"bold"}}>{cardHolder}</p>
            </div>
            <div className={styles.datewrapper}>
              <p className={styles.cardmonth}  style={{color:"#999",fontWeight:"bold"}}>{month}</p>
              <p>/</p>
              <p className={styles.cardyear}  style={{color:"#999",fontWeight:"bold"}}>{year}</p>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.heading}>
            <h>card number</h>
          </div>
          <div className={styles.formcardnumber}>
            <input
              type="text"
              className={styles.inputnumber}
              onChange={(e)=>{
                  
                setCardNumber(e.target.value)
              }}
              onfocus="numdeco()"
              onblur="numnodeco()"
              maxLength={16}
              minLength={16}
            />
          </div>
          <div className={styles.heading}>
            <h>card holder</h>
          </div>
          <div className={styles.formcardholder}>
            <input
              type="text"
              className={styles.inputname}
              onChange={(e)=>setCardHolder(e.target.value)}
              maxLength={14}
              onfocus="namedeco()"
              onblur="namenodeco()"
            />
          </div>
          <div className={styles.heading}>
            <h>expiration date</h> <h>cvv</h>
          </div>
          <div className={styles.formbottom}>
            <input
              type="text"
              className={styles.month}
              onChange={(e)=>{setMonth(e.target.value)}}
              maxLength={2}
              min="1"
              max="12"
              placeholder="month"
              onfocus="expdeco()"
              onblur="expnodeco()"
            />
            <input
              type="text"
              maxLength={4}
              className={styles.year}
              onChange={(e)=>{setYear(e.target.value)}}
              onfocus="expdeco()"
              onblur="expnodeco()"
              placeholder="year"
            />
            <input
              type="text"
              className={styles.inputcvv}
              maxLength={3}
              min="1"
              max="3"
              oninput="cardcvv()"
            />
          </div>
          <div className={styles.formSubmit}>
            <button className={styles.submit} onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
