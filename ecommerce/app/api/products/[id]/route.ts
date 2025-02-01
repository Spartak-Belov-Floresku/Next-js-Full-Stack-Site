import { NextRequest } from "next/server";
import connectToDb from "../../../db";

type Params = {id: string}

export async function GET(request: NextRequest,  { params }:{ params: Params }){
    const { db } = await connectToDb();
    const prodId = params.id.trim();
    const product = await db.collection('products').findOne({id: prodId});

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