import React from 'react';
import './Footer.css'; // For styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Social Media Links */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                {/* Contact Information */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: xyz@example.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: Pune Maharashtra</p>
                </div>

                {/* Copyright Section */}
                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} Thank you for visiting our website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
