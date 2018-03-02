import React from 'react';
import { Link } from 'react-router-dom';
import { zeroPad } from '../../utils';

const Item = ({ number, children }) => (
    <li className="All__item">
        <Link to={`/pokemon/${number}`} className="All__link">
            {zeroPad(number, 3)} - {children}
        </Link>
        
        <button className="All__add">+</button>
        {/* <button className="All__remove">-</button> */}
    </li>
);

export default Item;