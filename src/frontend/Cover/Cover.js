import React from 'react';
import { Link } from 'react-router-dom';
import "./Cover.css";

export default function Cover(props) {
    return (
        <div className="cover">
            <Link to={props.id} className='item'>
                <img src={props.img} className="image" alt={props.title} />
                <div className="movieTitle"><h1>{props.title}</h1></div>
            </Link>
        </div>
    );
}
