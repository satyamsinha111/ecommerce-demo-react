'use client';

const tshirtData = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: "$20.00",
      imageUrl: "https://dummyimage.com/600x400/0000ff/ffffff&text=Blue+T-Shirt",
    },
    {
      id: 2,
      name: "Black T-Shirt",
      price: "$22.00",
      imageUrl: "https://dummyimage.com/600x400/cccccc/000000&text=Graphic+T-Shirt",
    },
    {
      id: 3,
      name: "Graphic T-Shirt",
      price: "$25.00",
      imageUrl: "https://dummyimage.com/600x400/0000ff/ffffff&text=Blue+T-Shirt",
    },
  ];
  
  export default function TShirtProductList() {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">T-Shirts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tshirtData.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Add to Cart
                  </button>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  