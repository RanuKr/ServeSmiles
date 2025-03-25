import React from 'react';


const JoinUs = () => {
    return (
        <div className="container mx-auto my-24">
            <h1 className="text-5xl font-bold text-center mb-8">Join Us</h1>
            <p className="text-lg text-center mb-4">
                Become a part of our community! Join us as a volunteer or partner organization.
                Together, we can make a difference.
            </p>
            <div className="flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default JoinUs;