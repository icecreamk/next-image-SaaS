import { NextRequest, NextResponse } from "next/server";
export function GET(request: NextRequest) {
  return NextResponse.json({a: "Hello, Next.js!"});
}
