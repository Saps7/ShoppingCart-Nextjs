import { NextResponse } from "next/server";
import coupons from "../../../data/coupons.json";

export const GET = async () => {
    try {
        return new NextResponse(JSON.stringify(coupons), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error in fetching coupons" + error.message, {
            status: 500
        });
    }
};