import React from 'react';
import { Link } from 'react-router-dom';
import { zeroPad } from '../utils';

const Item = ({ number, children }) => (
    <li className="Item">
        <Link to={`/pokemon/${number}`} className="Item__link">
            {zeroPad(number, 3)} - {children}
        </Link>
        
        <button className="Item__add">+</button>
        {/* <button className="Item__remove">-</button> */}
    </li>
);

export default Item;