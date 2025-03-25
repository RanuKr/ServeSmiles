
import React from 'react';

const Registration = () => {
    return (
        <div className="container mx-auto my-24">
            <h1 className="text-5xl font-bold text-center mb-8">Registration</h1>
            <p className="text-lg text-center mb-4">
                To sign up for our feeding program, please fill out the registration form.
                We look forward to having you on board!
            </p>
            <div className="flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default Registration;