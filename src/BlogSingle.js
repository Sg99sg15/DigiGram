import React from 'react'
import Footer from './Footer'
import BlogSingleMain from './BlogSingleMain'
import Navbar from './Navbar'

function BlogSingle() {
    return (
        <>
            <div className="back-to-top"></div>
            <Navbar />
            <BlogSingleMain />
            <Footer />
        </>
    )
}

export default BlogSingle
