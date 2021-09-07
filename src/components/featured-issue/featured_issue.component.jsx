import React from "react";
import './Style.css'

export default function FeaturedIssue({ featured_magazine_issue }) {
  let featured_issue = featured_magazine_issue[0];
  return (
    <div className='featured_img'>    
      <div className='grid_img'
          title={featured_issue.date}><img src={featured_issue.image_url} alt='FIREHOUSE' />
      </div> 
    </div>
  );
}