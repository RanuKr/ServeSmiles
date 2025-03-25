import React from 'react';

const Account = () => {
    return (
        <div className="container mx-auto my-24">
            <h1 className="text-5xl font-bold text-center mb-8">Account Management</h1>
            <p className="text-lg text-center mb-4">
                Manage your account settings, view your order history, and update your personal information.
                Ensure your details are always up to date for seamless service.
            </p>
            <div className="flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Update Account
                </button>
            </div>
        </div>
    );
};

export default Account;