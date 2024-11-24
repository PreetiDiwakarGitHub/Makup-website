import React from 'react';
import './Photo.css'; // Import the CSS file
import makeup from '../Images/makeup.png';
import Product from '../Images/Product.jpeg';
import Product1 from '../Images/Product1.jpeg';
import Product2 from '../Images/Product2.jpeg';
import Product4 from '../Images/Product4.jpg';
import Product5 from '../Images/Product5.jpg';

function Photo() {
    return (
        <>
        
            <div className='ProductImage'>
                <div>
                <h1>our makeup products</h1>
                    <img src={makeup} alt="Makeup Product" />
                    <img src={Product} alt="Product" />
                    <img src={Product5} alt="Product 5" />
                </div>
                <div>
                <h1>our services</h1>
                    <img src={Product2} alt="Product 2" />
                    <img src={Product4} alt="Product 4" />
                    <img src={Product1} alt="Product 1" />
                </div>
            </div>
        </>
    );
}

export default Photo;
