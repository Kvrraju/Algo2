import React from 'react';

const SignupComponent = () => {
    return (
        <div className="flex bg-gradient-to-br from-purple-800 to-pink-600 p-4 items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
                <div className="flex justify-center mb-4">
                    <img src="https://via.placeholder.com/100" alt="Company Logo" className="rounded-full" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form>
                    <label className="block text-gray-700">Username</label>
                    <input type="text" placeholder="Username" className="w-full px-4 py-2 mb-3 border rounded" />

                    <label className="block text-gray-700">Email</label>
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-3 border rounded" />

                    <label className="block text-gray-700">Contact Number</label>
                    <input type="tel" placeholder="Contact Number" className="w-full px-4 py-2 mb-3 border rounded" />

                    <label className="block text-gray-700">Password</label>
                    <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-3 border rounded" />

                    <label className="block text-gray-700">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 mb-4 border rounded" />

                    <button className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Sign Up</button>
                </form>
                <p className="text-center mt-4">Already have an account? <a href="/sign-in" className="text-purple-600">Login here</a></p>
            </div>
        </div>
    );
};

export default SignupComponent;
