import { NextResponse } from 'next/server'
import menuData from '@/json/menu.json';
import categoriesData from '@/json/category.json';
export async function GET() {

    return NextResponse.json({menuData, categoriesData})

}

