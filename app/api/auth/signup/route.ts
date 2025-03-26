import { NextResponse } from "next/server";
import { signUp } from "@/lib/actions/auth.action";
import { AuthResponse } from "@/types/auth";

export async function POST(request: Request) {
  try {
    const { name, email, uid } = await request.json();

    if (!name || !email || !uid) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await signUp({ name, email, uid });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Sign up error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
} 