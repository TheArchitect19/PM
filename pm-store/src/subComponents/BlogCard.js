import React from "react";
import './BlogCard.css'

const BlogCard = () => {
  return (
    <>
      <div className="postCard-box">
        <div className="postCard-image">
          <img src="https://connections4success.net/app/uploads/2019/07/agenda-analysis-business-plan-990818-600x365.jpg" alt="" />
        </div>
        <div className="postCard-name">Post 1</div>
        <div className="postCard-details">
          Company belonging to this post is one the best companies
        </div>
        <div className="postCard-button">
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
