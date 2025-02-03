import ShoppingCartList from "./ShoppingCartList";

const CartPage = async () => {

    const response = await fetch(`http://localhost:3000/api/users/2/cart`,{cache: 'no-cache'})
    const cartProducts = await response.json();

    return <ShoppingCartList initCartProducts={cartProducts} />
}

export default CartPage;