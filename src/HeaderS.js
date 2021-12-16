import React from 'react'
import {NavLink} from 'react-router-dom'

function HeaderS() {
    return (
        <>
            <header>
                <div className="container container-md mt-5">
                    <div className="page-banner">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-md-6">
                                <nav aria-label="Breadcrumb">
                                    <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active">Services</li>
                                    </ul>
                                </nav>
                                <h1 className="text-center">Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderS
