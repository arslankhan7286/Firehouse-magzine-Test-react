import React from "react";
import './Style.css'

export default function GridIssues({ magazines_data  }) {

  return (
    <div className='grid'>
          {magazines_data.map((rec,i) =>
              <div key={i} className='grid_card'>
                  <img key={i} src={rec.image_url} alt='rec-images' />
              </div>
          )}
    </div>
  );
}
