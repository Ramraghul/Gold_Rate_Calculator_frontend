import React from 'react'
import './Rate.css'

function Rate() {

    let data =[{
        Carate:"18K",
        Day:'Gold Today Rate',
        Rate:'4867.90',
        Text:'text-success'
    },{
        Carate:"20K",
        Day:'Gold Today Rate',
        Rate:'4786.87',
        Text:'text-danger'
    },{
        Carate:"22K",
        Day:'Gold Today Rate',
        Rate:'5089.23',
        Text:'text-success'
    },{
        Carate:"22K",
        Day:'Gold Today Rate',
        Rate:'5269.70',
        Text:'text-danger'
    }]

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">

                        <span className='test'>
                        {
                            data.map((item,i)=>{
                                return(
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