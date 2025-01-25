'use client';

import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";

const CartPage = () => {
    const[cartIds] = useState<string[]>(['123', '345']);
    const cartProducts = cartIds.map(id => products.find(p => p.id === id));

    return(
        <>
            <h1>Shopping Cart</h1>
            {cartProducts.length > 0 ? (
                cartProducts.map((p) => (
                    p && <Link key={p.id} href={"/products/" + p.id}>
                            <h3>{p.name}</h3>
                            <p>${p.price}</p>
                        </Link>
                ))
            ) : (
                <p>Your cart is empty!</p>
            )}
      </>
    )
}

export default CartPage;