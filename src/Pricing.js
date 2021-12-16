import React from 'react'

function Pricing() {
    return (
        <>

            <div className="page-section border-top">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        <h2 className="title-section">Pricing Plan</h2>
                        <div className="divider mx-auto"></div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-auto py-3 wow fadeInLeft">
                            <div className="card-pricing">
                                <div className="header">
                                    <div className="price-icon"><span className="mai-people"></span></div>
                                    <div className="price-title">Membership</div>
                                </div>
                                <div className="body py-3">
                                    <div className="price-tag">
                                        <span className="currency">$</span>
                                        <h2 className="display-4">30</h2>
                                        <span className="period">/monthly</span>
                                    </div>
                                    <div className="price-info">
                                        <p>Choose the plan that right for you</p>
                                    </div>
                                </div>
                                <div className="footer">
                                    <a href="#" className="btn btn-outline rounded-pill">Choose Plan</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-auto py-3 wow fadeInUp">
                            <div className="card-pricing active">
                                <div className="header">
                                    <div className="price-labled">Best</div>
                                    <div className="price-icon"><span className="mai-business"></span></div>
                                    <div className="price-title">Dedicated</div>
                                </div>
                                <div className="body py-3">
                                    <div className="price-tag">
                                        <span className="currency">$</span>
                                        <h2 className="display-4">60</h2>
                                        <span className="period">/monthly</span>
                                    </div>
                                    <div className="price-info">
                                        <p>Choose the plan that right for you</p>
                                    </div>
                                </div>
                                <div className="footer">
                                    <a href="#" className="btn btn-outline rounded-pill">Choose Plan</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-auto py-3 wow fadeInRight">
                            <div className="card-pricing">
                                <div className="header">
                                    <div className="price-icon"><span className="mai-rocket-outline"></span></div>
                                    <div className="price-title">Private</div>
                                </div>
                                <div className="body py-3">
                                    <div className="price-tag">
                                        <span className="currency">$</span>
                                        <h2 className="display-4">90</h2>
                                        <span className="period">/monthly</span>
                                    </div>
                                    <div className="price-info">
                                        <p>Choose the plan that right for you</p>
                                    </div>
                                </div>
                                <div className="footer">
                                    <a href="#" className="btn btn-outline rounded-pill">Choose Plan</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="page-section bg-light">
                <div className="container">

                    <div className="owl-carousel wow fadeInUp" id="testimonials">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-md-6 py-3">
                                    <div className="testi-image">
                                        <img src="../assets/img/person/person_1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 py-3">
                                    <div className="testi-content">
                                        <p>Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo.</p>
                                        <div className="entry-footer">
                                            <strong>Melvin Platje</strong> &mdash; <span className="text-grey">CEO Slurin Group</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-md-6 py-3">
                                    <div className="testi-image">
                                        <img src="../assets/img/person/person_2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 py-3">
                                    <div className="testi-content">
                                        <p>Repudiandae vero assumenda sequi labore ipsum eos ducimus provident a nam vitae et, dolorum temporibus inventore quaerat consectetur quos! Animi, qui ratione?</p>
                                        <div className="entry-footer">
                                            <strong>George Burke</strong> &mdash; <span className="text-grey">CEO Letro</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> 
            </div>

        </>
    )
}

export default Pricing
