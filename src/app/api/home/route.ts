import { NextResponse } from 'next/server'
import homeData from '@/json/hompage.json'
import products from '@/json/products.json'
export async function GET() {

    return NextResponse.json({homeData, products})

}

