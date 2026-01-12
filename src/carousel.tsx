import   { useState } from 'react';
import type { mediaItem } from './pages/HomePage';
import './carousel.css'


/**
 * The Carousel component. This puts together the images and videos into a single component to be presented.
 * params: items which is a list of mediaItems defined in app.tsx
 * returns: fully constructured carousel of images for a project to be presented.
 */



const Carousel = ({items}: { items: mediaItem[]}) => {
    const [index, setIndex] = useState(0);
    const length = items.length;

    console.log("item: ", )

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1: newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    }

        const item = items[index];
        console.log("item: ", item.type);



    //Returns a tree in react
    return (
        <div className="carousel">
            <button className="arrow leftArrow" onClick={handlePrevious}>&#10094;</button>

             <div className="section logo">
             {(item.type === "picture") && (<a href={item.href} target="_blank"><img src={item.src} alt = {item.alt} /></a>)}

            {(item.type === "video") && (<a href={item.href} target="_blank"> <iframe width="560" height = "315" src={item.src} data-allow="autoplay; encrypted-media" allowFullScreen></iframe> </a>)}

             </div>

             
            <button className="arrow rightArrow" onClick={handleNext}>&#10095;</button>



        </div>
    );
};


export default Carousel;