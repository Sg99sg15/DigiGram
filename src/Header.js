import React from 'react'

function Header() {
    return (
        <>
            <header>
                <div className="page-banner home-banner">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div class="col-lg-6 py-3 wow fadeInUp">
                                <h1 class="mb-4">Great Companies are built on great Products</h1>
                                <p class="text-lg mb-5">Ignite the most powerfull growth engine you have ever built for your company</p>

                                <a href="#" class="btn btn-outline border text-secondary">More Info</a>
                                <a href="#" class="btn btn-primary btn-split ml-2">Watch Video <div class="fab"><span class="mai-play"></span></div></a>
                            </div>
                            <div className="col-lg-6 py-3 wow zoomIn">
                                <div className="img-place">
                                    <img src="./assets/img/bg_image_1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
