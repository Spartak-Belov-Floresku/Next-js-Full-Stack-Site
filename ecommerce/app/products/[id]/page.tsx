import { products } from "@/app/product-data";

const ProductDetailPage = ({ params }:{ params: { id: string } }) => {

    const product = products.find(p=> p.id === params.id) || null;
    return <h1>{product && product.name}</h1>
}

export default ProductDetailPage;