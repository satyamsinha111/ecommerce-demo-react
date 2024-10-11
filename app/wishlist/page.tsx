'use client';

const wishlistItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: "$20.00",
      imageUrl: "https://dummyimage.com/600x400/ff0000/ffffff&text=Red+T-Shirt",
    },
    {
      id: 2,
      name: "Black T-Shirt",
      price: "$22.00",
      imageUrl: "https://dummyimage.com/600x400/0000ff/ffffff&text=Blue+T-Shirt",
    },
  ];
  
  export default function WishlistPage() {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Your Wishlist</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                    <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Your wishlist is empty.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
  