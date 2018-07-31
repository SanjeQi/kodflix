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
        {
            image: img3,
            title: 'Black Mirror',
            id: 'black_mirror',
            synopsis:`
                An anthology series exploring a twisted, high-tech world where
                humanity's greatest innovations and darkest instincts collide.`,
        },
        {
            image: img4,
            title: 'Breaking Bad',
            id: 'breaking_bad',
            synopsis:`
                A high school chemistry teacher diagnosed with inoperable lung 
                cancer turns to manufacturing and selling methamphetamine in order
                to secure his family's future.`,
        },
        {
            image: img5,
            title: 'Death Note',
            id: 'death_note',
            synopsis:`
                An intelligent high school student goes on a secret crusade to
                eliminate criminals from the world after discovering a notebook
                capable of killing anyone whose name is written into it.`,
        },
        {
            image: img6,
            title: 'Games of Thrones',
            id: 'games_of_thrones',
            synopsis:`
                Nine noble families fight for control over the mythical lands 
                of Westeros, while an ancient enemy returns after being dormant 
                for thousands of years.`,
        },
        {
            image: img7,
            title: 'The Walking Dead',
            id: 'the_walking_dead',
            synopsis:`
                Sheriff Deputy Rick Grimes wakes up from a coma to learn the 
                world is in ruins, and must lead a group of survivors to stay 
                alive`,
        },
        {
            image: img8,
            title: 'The Wire',
            id: 'the_wire',
            synopsis:`
                Baltimore drug scene, seen through the eyes of drug dealers and
                law enforcement.`,
        }
    ];
}
