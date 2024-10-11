export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Homepage</h1>
      <p className="text-gray-600">This is a simple homepage.</p>
      <div className="mt-6">
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Login</a>
        <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</a>
      </div>
    </div>
  </div>
  );
}
