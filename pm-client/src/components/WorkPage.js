import React from 'react'

import './WorkPage.css'

import leftArrow from '../assets/Images/left-arrow.png'
import rightArrow from '../assets/Images/right-arrow.png'
import BlogCard from '../subComponents/BlogCard'
import { LogoComponent } from '../subComponents/LogoComponent'
import { PowerButton } from '../subComponents/PowerButton'

export const WorkPage = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
        current.scrollLeft -= 300;
        } else {
        current.scrollLeft += 300;
        }
    };
    return(
        <div className="workpage">
            <div className="workpage-body">
              <LogoComponent/>
              <PowerButton/>
                <div className="workpage-title">
                    Blogs
                </div>
                <div className="workpage-slider">
                    <div className="workpage-topbar-left" onClick={() => scroll('left')}>
                        Add Blog
                    </div>
                    <div className="workpage-topbar-right" onClick={() => scroll('right')}>
                        Delete Blog
                    </div>
                </div>
                <div className="workpage-events">
                    <div className="workpage-events-container" ref={scrollRef}>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    </div>
                </div>
                <div className="workpage-slider">
                    <div className="workpage-slider-left" onClick={() => scroll('left')}>
                        <img src={leftArrow} alt="leftArrow"></img>
                    </div>
                    <div className="workpage-slider-right" onClick={() => scroll('right')}>
                        <img src={rightArrow} alt="rightArrow"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};