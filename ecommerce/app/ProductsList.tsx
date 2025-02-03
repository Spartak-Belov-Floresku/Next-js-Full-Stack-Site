'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Product } from "./product-data";

const ProductsList = ( { products, initUserCartProducts } : {products: Product[], initUserCartProducts: Product[]} ) => {

    const[userCartProducts, setUserCartProducts] = useState(initUserCartProducts);

    const addToCart = async (productId: string) => {
      const response = await fetch('http://localhost:3000/api/users/2/cart',
       {
        method: 'POST',
        body: JSON.stringify({
          productId
        }),
        headers: {
          'Content-Type': 'application/json',
        }
       }
      );
      const updatedUserCartProduct = await response.json();
      setUserCartProducts(updatedUserCartProduct);
    }

    const removeFromCart = async (productId: string) => {
      const response = await fetch('http://localhost:3000/api/users/2/cart',
       {
        method: 'DELETE',
        body: JSON.stringify({
          productId
        }),
        headers: {
          'Content-Type': 'application/json',
        }
       }
      );
      const updatedUserCartProduct = await response.json();
      setUserCartProducts(updatedUserCartProduct);
    }

    const checTheCart = (productId:string) => userCartProducts.some(p => p.id === productId);

    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {products.map(product => (
      <Link
        key={product.id}
        href={`/products/${product.id}`}
        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
      >
        <div className="flex justify-center mb-4 h-48 relative"> {/* Added height and relative positioning */}
          <Image
            src={'/' + product.imageUrl}
            alt="Product image"
            fill // Fill the container
            className="object-cover rounded-md" // Cover the container, maintaining aspect ratio
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        { !checTheCart(product.id)
            ? <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={e => {
                      e.preventDefault();
                      addToCart(product.id);
                    }}
              >Add To Cart</button>
            : <button
                  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={e => {
                      e.preventDefault();
                      removeFromCart(product.id);
                  }}
              >Remove From Cart</button>
        }
      </Link>
    ))}
  </div>
}

export default ProductsList;