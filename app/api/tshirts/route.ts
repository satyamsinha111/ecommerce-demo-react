import { NextResponse } from 'next/server';

export async function GET() {
  const tshirts = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: "$20.00",
      imageUrl: "https://dummyimage.com/600x400/ffffff/000000&text=White+T-Shirt",
    },
    {
      id: 2,
      name: "Black T-Shirt",
      price: "$22.00",
      imageUrl: "https://dummyimage.com/600x400/000000/ffffff&text=Black+T-Shirt",
    },
    {
      id: 3,
      name: "Red T-Shirt",
      price: "$18.00",
      imageUrl: "https://dummyimage.com/600x400/ff0000/ffffff&text=Red+T-Shirt",
    },
    {
      id: 4,
      name: "Blue T-Shirt",
      price: "$25.00",
      imageUrl: "https://dummyimage.com/600x400/0000ff/ffffff&text=Blue+T-Shirt",
    },
  ];

  return NextResponse.json(tshirts);
}
