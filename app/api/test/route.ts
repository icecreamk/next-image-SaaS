import { createUserSchema } from "@/server/db/validate-schema";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const name = query.get("name");
  const email = query.get("email");
  const id = query.get("id");

  try {
    const result = createUserSchema.parse({
      name,
      email,
      id
    });
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      err: error.message,
    });
  }
}
