import { NextResponse } from "next/server";
import newsData from '@/json/news.json'

export async function GET() {
    return NextResponse.json(newsData)
}