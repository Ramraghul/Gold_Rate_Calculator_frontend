import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Rate from '../Auth/GoldRatebar/Rate'
import LineChart from '../Charts/linechart'
import Calculator from '../Calculator/Calculator';
function Home() {
    return (
        <>
                    <div id="content-wrapper" className="d-flex flex-column trans">
                        <div id="content">
                            <Nav></Nav>
                            <div className="container-fluid">
                                <Rate></Rate>
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className='trans rounded rounded mb-3'>
                                    {/* <LineChart></LineChart> */}
                                    </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <Calculator></Calculator>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
        </>
    )
}

export default Home