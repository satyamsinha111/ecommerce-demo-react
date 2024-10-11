const cartItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: "$20.00",
      imageUrl: "https://dummyimage.com/600x400/ffffff/000000&text=White+T-Shirt",
      quantity: 2,
    },
    {
      id: 2,
      name: "Graphic T-Shirt",
      price: "$25.00",
      imageUrl: "https://dummyimage.com/600x400/000000/ffffff&text=Black+T-Shirt",
      quantity: 1,
    },
  ];
  
  export default function CartPage() {
    const total = cartItems.reduce((acc, item) => acc + item.quantity * parseFloat(item.price.slice(1)), 0);
  
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Your Cart</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Price: {item.price}</p>
                    <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                      Remove from Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="text-right mt-10">
              <p className="text-2xl font-semibold">Total: ${total.toFixed(2)}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  