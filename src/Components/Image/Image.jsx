import React, { useState, useEffect } from "react";
import makeup from '../Images/makeup.png';
import makeup1 from '../Images/makeup1.jpg';
import makeup4 from '../Images/makeup4.jpg';
import makeup2 from '../Images/makeup2.jpg';
import './Image.css';

function Image() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [makeup, makeup1, makeup2, makeup4];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className="slider">
            <div className="slider-container">
                <img src={images[currentIndex]} alt="makeup" />
            </div>
            <button className="prev" onClick={prevImage}>❮</button>
            <button className="next" onClick={nextImage}>❯</button>
        </div>
    );
}

export default Image;