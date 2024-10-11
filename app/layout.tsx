import './globals.css'; // Import global CSS for Tailwind styles

export const metadata = {
  title: 'E-commerce App',
  description: 'An awesome e-commerce app',
};

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body>
        {/* Common Header */}
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              My Store
            </a>
            <nav className="flex space-x-6">
              <a href="/products" className="hover:text-blue-500">Products</a>
              <a href="/wishlist" className="hover:text-blue-500">Wishlist</a>
              <a href="/cart" className="hover:text-blue-500">Cart</a>
              <a href="/login" className="hover:text-blue-500">Login</a>
              <a href="/signup" className="hover:text-blue-500">Signup</a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="min-h-screen bg-gray-100">
          {children} {/* This renders the page content */}
        </main>

        {/* Optional Footer */}
        <footer className="bg-white p-4 text-center mt-10">
          <p>&copy; 2024 My Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
