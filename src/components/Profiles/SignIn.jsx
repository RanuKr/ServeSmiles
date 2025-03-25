import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      alert('Sign In success!');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-[#7E8F90] text-white shadow-md rounded px-10 pt-10 pb-10 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="shadow border rounded w-full py-2 px-3"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            className="shadow border rounded w-full py-2 px-3"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Sign In
          </button>
        </div>
        <div className='flex pt-5 justify-center'>
          Don't have an account? <Link to="/signUp" className='font-bold underline ml-2'>Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
