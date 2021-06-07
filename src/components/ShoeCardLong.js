import React from 'react';
import '../css/ShoeCardLong.css'

function ShoeCardLong(prop) {
    return (
        <div className="ShoeCardLong">
             <li>{prop.name}</li>
        </div>
    );
}

export default ShoeCardLong;