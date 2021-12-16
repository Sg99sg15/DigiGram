import {NavLink} from 'react-router-dom'
import React from 'react'

function HeaderA() {
    return (
        <>
            <header>
                <div className="container mt-5">
                    <div className="page-banner">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-md-6">
                                <nav aria-label="Breadcrumb">
                                    <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active">About</li>
                                    </ul>
                                </nav>
                                <h1 className="text-center">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderA
