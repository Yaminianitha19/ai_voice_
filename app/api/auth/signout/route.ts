import { NextResponse } from "next/server";
import { signOut } from "@/lib/actions/auth.action";

export async function POST() {
  try {
    await signOut();
    return NextResponse.json({ success: true, message: "Signed out successfully" });
  } catch (error) {
    console.error("Sign out error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
} 