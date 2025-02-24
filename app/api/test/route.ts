import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export function GET(request: NextRequest) {
  const inputSchema = z.object({
    name: z.string().max(10).min(3),
    email: z.string().max(10).min(3),
  });

  const query = request.nextUrl.searchParams;
  const name = query.get("name");
  const email = query.get("email");

  try {
    const result = inputSchema.parse({
      name,
      email,
    });
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      err: error.message,
    });
  }
}
