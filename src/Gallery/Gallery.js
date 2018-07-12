import React from 'react';
import Cover from '../Cover/Cover.js';
import "./Gallery.css";
import getGallery from './getGallery.js';

export default function Gallery() {
    return (
        <div className="container">
            {
                getGallery().map(cover => {
                    return (
                        <Cover img={cover.image} title={cover.title} id={cover.id} />
                    );
                })
            }
        </div>
    );
}

