import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, name } = body;

    if (!message || !name) {
      return NextResponse.json(
        { error: "Message and name are required" },
        { status: 400 }
      );
    }

    const wish = await db.wishes.create({
      data: {
        message,
        name,
        createdAt: new Date().toISOString(),
      },
    });

    return NextResponse.json(wish);
  } catch (error) {
    console.error("Error creating wish:", error);
    return NextResponse.json(
      { error: "Error creating wish" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const wishes = await db.wishes.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(wishes);
  } catch (error) {
    console.error("Error fetching wishes:", error);
    return NextResponse.json(
      { error: "Error fetching wishes", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}