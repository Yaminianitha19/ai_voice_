import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/actions/auth.action";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }
    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Get current user error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
} 