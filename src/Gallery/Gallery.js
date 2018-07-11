import React from 'react';
import Cover from '../Cover/Cover.js';
import "./Gallery.css";

import img3 from '../img_folder/3.jpg';
import img4 from '../img_folder/4.jpg';
import img5 from '../img_folder/5.jpg';
import img6 from '../img_folder/6.jpg';
import img7 from '../img_folder/7.jpg';
import img8 from '../img_folder/8.jpg';

export default function Gallery() {
    return (
        <div>
            <div className="container">
                <Cover img={img3} title="Black Mirror" id="black_mirror" />
                <Cover img={img4} title="Breaking Bad"id="breaking_bad"/>
                <Cover img={img5} title="Death Note "id="death_note"/>
            </div>

            <div className="container">
                <Cover img={img6} title="Games of Thrones" id="games_of_thrones"/>
                <Cover img={img7} title="The Walking Dead" id="the_walking_dead"/>
                <Cover img={img8} title="The Wire" id="the_wire"/>
            </div>
            
        </div>

    );
}
