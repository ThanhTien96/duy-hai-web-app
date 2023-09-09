import { NextResponse } from "next/server";
import products from '@/json/products.json';
export async function GET () {
    return NextResponse.json({products})
}