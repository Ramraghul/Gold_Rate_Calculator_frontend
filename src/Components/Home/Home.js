import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Rate from '../Auth/GoldRatebar/Rate'
import LineChart from '../../linechart.js'
function Home() {
    return (
        <>
            {/* <div id="page-top">
                <div id="wrapper"> */}
                    
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Nav></Nav>
                            <div className="container-fluid">
                                <Rate></Rate>
                                <div className="row">
                                    <div className="col-lg-12">
                                    <LineChart></LineChart>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
                {/* </div>
            </div> */}
        </>
    )
}

export default Home