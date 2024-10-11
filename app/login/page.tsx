'use client';

export default function Login(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded mt-4">Login</button>
          </form>
          <p className="text-center mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
          </p>
        </div>
      </div>
  
    )
}