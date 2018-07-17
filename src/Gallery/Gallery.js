import React from 'react';
import Cover from '../Cover/Cover';
import "./Gallery.css";
import getShows from './getShows.js';

export default function Gallery() {
    return (
        <div className="container">
            {
                getShows().map(getShows => {
                    return (
                        <Cover img={getShows.image} title={getShows.title} id={getShows.id} />
                    );
                })
            }
        </div>
    );
}

