import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

function Landing(){
    return(
        <>
            <NavBar/>
            <div className="container">
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="fw-bolder">Sewa Rental Mobil Terbaik di Kawasan Surabaya</h1>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <a className="btn btn-success text-light" href="cars">Mulai Sewa Mobil</a>
                        </div>
                        <div className="col-lg">
                            <img src="images/mobil.png" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-lg">
                            <img src="images/services.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="col">
                            <h2 id="ourservices">Best Car Rental for any kind of trip in Surabaya!</h2>
                            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                                <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                            <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                                <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                            <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                                <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Sewa Mobil Jangka Panjang Bulanan</p>
                            <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                                <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Gratis Antar - Jemput Mobil di Bandara</p>
                            <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#CFD4ED"/>
                                <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Layanan Airport Transfer / Drop In Out</p>
                        </div>
                    </div>
                    <div className="row py-5">
                        <h2 id="whyus">Why Us?</h2>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                        
                        <div className="row py-5" >
                            <div className="card col-lg card-1 me-2">
                                <div className="card-body">
                                    <img src="images/tup.png" alt="" className="py-1"/>
                                    <h5 className="card-title py-3">Mobil Lengkap</h5>
                                    <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </div>
                            </div>
                            <div className="card col-lg card-2 me-2">
                                <div className="card-body">
                                    <img src="images/label.png" alt="" className="py-1"/>
                                    <h5 className="card-title py-3">Harga Murah</h5>
                                    <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                </div>
                            </div>
                            <div className="card col-lg card-3 me-2">
                                <div className="card-body">
                                    <img src="images/clock.png" alt="" className="py-1"/>
                                    <h5 className="card-title py-3">Layanan 24 Jam</h5>
                                    <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                </div>
                            </div>
                            <div className="card col-lg card-4">
                                <div className="card-body">
                                    <img src="images/pro.png" alt="" className="py-1"/>
                                    <h5 className="card-title py-3">Sopir Profesional</h5>
                                    <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <section id="testimonial" className="py-5">
                        <div className="col">
                            <h2 className="h2 text-center fw-bold">Testimonial</h2>
                            <p className="text-center py-3">Berbagai review positif dari para pelanggan kami</p>
                            <div id="carouselExampleControls" className="carousel slide mx-auto" style={{"max-width": "60%"}} data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active bg-aliceblue">
                                        <div className="row mx-4 my-5">
                                            <div className="col-xl-2 m-auto">
                                                <img src="./images/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                                            </div>
                                            <div className="col-xl-10">
                                                <img src="images\Rate.png" className="testimonial-rating" alt="Rating"/>
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                                <p className="testimonial-name">John Dee 32, Bromo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item bg-aliceblue">
                                        <div className="row mx-4 my-5">
                                            <div className="col-xl-2 m-auto">
                                                <img src="./images/photo2-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                                            </div>
                                            <div className="col-xl-10">
                                                <img src="images\Rate.png" className="testimonial-rating" alt="Rating"/>
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                                <p className="testimonial-name">John Dee 32, Bromo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item bg-aliceblue">
                                        <div className="row mx-4 my-5">
                                            <div className="col-xl-2 m-auto">
                                                <img src="./images/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                                            </div>
                                            <div className="col-xl-10">
                                                <img src="images\Rate.png" className="testimonial-rating" alt="Rating"/>
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                                <p className="testimonial-name">John Dee 32, Bromo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>
                                <div className="text-center">
                                    <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="testimonial-media">&#8249;</a>
                                    <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="testimonial-media">&#8250;</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="row bg-primary-darkblue rounded py-5">
                        <div className="container col-sm-7 text-center text-light">
                            <h1 style={{"margin-top": "64px"}}>Sewa Mobil di Surabaya Sekarang</h1>
                            <p style={{"margin-top": "16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro ad temporibus sapiente ratione architecto blanditiis similique, qui debitis?</p>
                            <a className="btn btn-success" href="#" style={{"margin-top": "52px", "margin-bottom": "64px"}}>Mulai Sewa Mobil</a>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-lg">
                            <h2 id="faq">Frequently Asked Question</h2>
                            <p style={{"margin-top": "16px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                        <div className="col">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Apa saja syarat yang dibutuhkan?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> clas. This is the first item's accordion body.</div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> clas. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> clas. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Apakah Ada biaya antar-jemput?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> clas. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        Bagaimana jika terjadi kecelakaan
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> clas. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Landing