import React from 'react';
import './Style.css'

export default function Button({ btn_text }) {

    return (
        <div>
            <button variant="contained" color="secondary">{btn_text}</button>
        </div>
    );
}
