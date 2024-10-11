'use client';

export default function Signup(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <button className="w-full bg-green-500 text-white p-2 rounded mt-4">Sign Up</button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </div>
      </div>
  
    )
}