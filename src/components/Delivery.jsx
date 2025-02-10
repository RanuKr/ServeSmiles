import React from 'react';



const Delivery = () => {
    return (
        <div className="container mx-auto my-24">
            <h1 className="text-5xl font-bold text-center mb-8">Delivery Information</h1>
            <p className="text-lg text-center mb-4">
                We deliver meals every Monday, Wednesday, and Friday from 10 AM to 12 PM.
                Our team ensures that all meals are fresh and nutritious.
            </p>
            <div className="flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Order Now
                </button>
            </div>
        </div>
    );
};



export default Delivery;