import React from 'react';
import './Style.css'
import Button from '../button/button.component';
import moment from 'moment';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className='footer-container'>
            <div className='moment_date'>
              {moment().format('MMMM YYYY')}
            </div>
          <div className='footer_btn'>
            <Button btn_text={"Subscribe"} />
            <Button btn_text={"Archives"} />
            <Button btn_text={"Renewal"} />
          </div>
        </div>
      </footer>
    </div>
  );
}
