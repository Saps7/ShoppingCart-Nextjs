import { NextResponse } from "next/server";
import products from "../../../data/products.json";

export const GET = async () => {
    try {
        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error in fetching products" + error.message, {
            status: 500
        });
    }
};
