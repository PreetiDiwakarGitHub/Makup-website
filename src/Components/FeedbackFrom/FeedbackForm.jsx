import React, { useState } from 'react';
import './FeedBackFrom.css'; // For styling

function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Simulate form submission
        console.log('Feedback submitted:', formData);

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            feedback: '',
        });

        // Hide success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>
        <h1>Feedback from</h1>
        <div className="feedback-form-container">
            {submitted && <p className="success-message">Thank you for your feedback!</p>}
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />

                {/* Email Field */}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />

                {/* Feedback Field */}
                <label htmlFor="feedback">Feedback:</label>
                <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="Enter your feedback"
                    rows="5"
                    required
                ></textarea>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default FeedbackForm;
