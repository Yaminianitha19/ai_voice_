import { NextResponse } from "next/server";
import { signIn } from "@/lib/actions/auth.action";
import { AuthResponse } from "@/types/auth";

export async function POST(request: Request) {
  try {
    const { email, idToken } = await request.json();

    if (!email || !idToken) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await signIn({ email, idToken });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Sign in error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
} 