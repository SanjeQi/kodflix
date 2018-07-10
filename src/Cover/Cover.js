import React from 'react';

export default function Cover(props) {
    return (
        <div className="item">
            <img src={props.img} className="image" alt={props.title} />
            <div className="movieTitle"><h1>{props.title}</h1></div>
        </div>
    );
}