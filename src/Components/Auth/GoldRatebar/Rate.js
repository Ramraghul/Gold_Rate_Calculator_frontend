import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Rate.css'

function Rate() {

    const [data,setData]=useState([])

    useEffect(()=>{
        today()
    },[])

    let today = async()=>{
        try {
            let value = await axios.get('https://gold-rate-calculator.herokuapp.com/Rate_card')
            setData(value.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">

                        <span className='test'>
                            {
                                data.map((item, i) => {
                                    return (
                                        <div key={i} className="flip-card ">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <form className='d-flex justify-content-center align-item-center mt-3'>
                                                        <h4>{item.Carate}</h4><br />
                                                        <small>{item.Day}</small>
                                                    </form>
                                                </div>
                                                <div className="flip-card-back">
                                                    <h3 className={`mt-3 d-flex justify-content-center ${item.Text}`} >{item.Rate}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rate