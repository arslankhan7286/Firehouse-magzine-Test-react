import React from 'react';
import './Style.css'
import GridIssues from "../../components/issues-grid/grid_issues.componet";
import FeaturedIssue from "../../components/featured-issue/featured_issue.component";

export default function Home({ magazines_data }) {

  let sorted_magazines_data = magazines_data.sort((a, b) => Date.parse(new Date(a.date.split("-").join("-"))) - Date.parse(new Date(b.date.split("-").join("-")))).reverse();
  let featured_magazine_issue = sorted_magazines_data.filter(issue => issue.is_featured === true).slice(0, 1);

    return (
      <div className='home_page'>
        <FeaturedIssue featured_magazine_issue={featured_magazine_issue} />
        <GridIssues magazines_data={sorted_magazines_data} />
      </div>
    );
}


