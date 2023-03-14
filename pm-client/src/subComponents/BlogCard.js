import React from 'react'

import './BlogCard.css'

const EventCard = () => {
  return (
    <div className="blogcard-card">
        <img class='blogcard-image' src="https://macln.files.wordpress.com/2011/01/blog_logo.jpg"></img>
        <div className="blogcard-cardtitle">
           <div>Blog Title</div>  <div className='card-icon'>❤️</div>
        </div>
        <div className="blogcard-line">
        </div>
        <div className="blogcard-carddetails">
            Blog Details
        </div>
    </div>
  )
}

export default EventCard