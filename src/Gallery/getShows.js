import img3 from '../img_folder/3.jpg';
import img4 from '../img_folder/4.jpg';
import img5 from '../img_folder/5.jpg';
import img6 from '../img_folder/6.jpg';
import img7 from '../img_folder/7.jpg';
import img8 from '../img_folder/8.jpg';

//Create a function that returns change an array of objects

// rename get-Galerry to getShows - that has the getShows function instead of get-Gallery
export default function getShows() {
    return [
        { image: img3, title: 'Black Mirror', id: 'black_mirror' },
        { image: img4, title: 'Breaking Bad', id: 'breaking_bad' },
        { image: img5, title: 'Death Note', id: 'death_note' },
        { image: img6, title: 'Games of Thrones', id: 'games_of_thrones' },
        { image: img7, title: 'The Walking Dead', id: 'the_walking_dead' },
        { image: img8, title: 'The Wire', id: 'the_wire' }
    ];
}
