import ProductsList from "../ProductsList";

const ProductsPage = async () => {

    const response = await fetch('http://localhost:3000/api/products')
    const products = await response.json();

    const response2 = await fetch('http://localhost:3000/api/users/2/cart', {cache: 'no-cache'});
    const userCartProducts = await response2.json();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList products={products} initUserCartProducts={userCartProducts}/>
        </div>
    )
}

export default ProductsPage;