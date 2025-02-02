import NotFoundPage from "@/app/not-found";

type Params = {id: string}

const ProductDetailPage = async ({ params }:{ params: Params }) => {

    const response = await fetch(`http://localhost:3000/api/products/${params.id}`);
    const product = await response.json();

    return (
        !product
        ?   <NotFoundPage />
        :   <div className="container mx-auto p-8 flex flex-col md:flex-row">
                <div className="md:w-1/2 md-4 md:mb-0 md:mr-8">
                    <img
                        src={'/' + product.imageUrl}
                        alt="Product image"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
                    <h3 className="text-2xl font-semibold mb-2">Description</h3>
                    <p className="text-gray-700">{product.description}</p>
                </div>
            </div>
    )
}

export default ProductDetailPage;