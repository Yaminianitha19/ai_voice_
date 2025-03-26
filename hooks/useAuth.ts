import { useState, useEffect } from "react";
import { User } from "@/types/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me");
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
        return { success: true, message: data.message };
      }
      return { success: false, message: data.message };
    } catch (error) {
      console.error("Sign in failed:", error);
      return { success: false, message: "Failed to sign in" };
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      return { success: data.success, message: data.message };
    } catch (error) {
      console.error("Sign up failed:", error);
      return { success: false, message: "Failed to sign up" };
    }
  };

  const signOut = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" });
      setUser(null);
      return { success: true, message: "Signed out successfully" };
    } catch (error) {
      console.error("Sign out failed:", error);
      return { success: false, message: "Failed to sign out" };
    }
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
}
