import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type Params = {id: string}

export async function GET(request: NextRequest,  { params }:{ params: Params }){

    const prodId = params.id.trim();
    const product = products.find(p => p.id === prodId);

    return !product
        ? new Response('Product not found!', {
            status: 404,
        })
        : new Response(JSON.stringify(product), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        })
}