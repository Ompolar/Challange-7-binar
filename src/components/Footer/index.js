import React from 'react'

function Footer(){
    return(
        <div className="container">
            <div className="container py-5">
                <footer className="text-center text-lg-start bg-light" style={{"margin-top": "150px"}}>
                    <section>
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-start">
                                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                    <p>binarcarrental@gmail.com</p>
                                    <p>081-233-334-808</p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 fw-bold text-start">
                                    <h6 className="fw-bold mb-4">Our Services</h6>
                                    <p>Why Us</p>
                                    <p>Testimonial</p>
                                    <p>FAQ</p>
                                </div>
                                <div className="col-md-3 mx-auto mb-5 text-start">
                                    <h6 className="mb-4">Connect With Us</h6>
                                    <a href="#" className="text-reset" style={{"margin-right": "16px"}}><img src="images/fb.png" alt=""/></a>
                                    <a href="#" className="text-reset" style={{"margin-right": "16px"}}><img src="images/ig.png" alt=""/></a>
                                    <a href="#" className="text-reset" style={{"margin-right": "16px"}}><img src="images/twt.png" alt=""/></a>
                                    <a href="#" className="text-reset" style={{"margin-right": "16px"}}><img src="images/mail.png" alt=""/></a>
                                    <a href="#" className="text-reset"><img src="images/ttv.png" alt=""/></a>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-start">
                                    <p>Copyright Binar 2022</p>
                                    <img src="images/logo.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        </div>
    )
}

export default Footer