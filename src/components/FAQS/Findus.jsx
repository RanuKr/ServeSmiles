import React from 'react';


const Findus = () => {
    return (
        <div className="container mx-auto my-24">
            <h1 className="text-5xl font-bold text-center mb-8">Find Us</h1>
            <p className="text-lg text-center mb-4">
                We are located at 123 Serve Smiles Lane, Cityville. 
                Visit us during our operating hours: Monday to Friday, 9 AM to 5 PM.
            </p>
            <div className="flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Get Directions
                </button>
            </div>
        </div>
    );
};

export default Findus;