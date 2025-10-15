"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    setErrorMsg("");
    if (!name.trim()) return "Please enter your name.";
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) return "Please enter a valid email.";
    if (password.length < 7) return "Password should be at least 7 characters.";
    if (password !== passwordConfirm) return "Passwords do not match.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Signup failed (${res.status})`);
      }

      setSuccessMsg("Account created — you can now log in.");
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    } catch (err) {
      setErrorMsg(err?.message || "Signup failed.");
      console.error("signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900">
      <Card className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        <CardHeader className="bg-white/60 dark:bg-black/40 px-6 py-6">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <CardTitle className="text-2xl font-semibold">Create an account</CardTitle>
              <CardDescription className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Sign up to get started — no credit card required.
              </CardDescription>
            </div>
            <CardAction className="pt-1">
              <Button variant="link" className="text-sm" asChild onClick={() => router.push('/login')}>
                <a href="/login">Sign In</a>
              </Button>
            </CardAction>
          </div>
        </CardHeader>

        <CardContent className="px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="text-sm text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20 p-2 rounded">
                {successMsg}
              </div>
            )}

            <div>
              <Label htmlFor="name" className="text-sm">Full name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            <div>
              <Label htmlFor="passwordConfirm" className="text-sm">Confirm password</Label>
              <Input
                id="passwordConfirm"
                type="password"
                placeholder="••••••••"
                required
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="mt-2 w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            <Button
              type="submit"
              className="my-5 w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-md"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>

            <div className="flex my-2 items-center gap-3">
              <hr className="flex-1 border-gray-200 dark:border-gray-700" />
              <span className="text-xs text-gray-500 dark:text-gray-300">or</span>
              <hr className="flex-1 border-gray-200 dark:border-gray-700" />
            </div>

          <Button
            type="button"
            variant="outline"
            className="w-full my-3 py-3 rounded-lg"
            onClick={() => alert("SignUp with Google (implement)")}
            >
            SignUp with Google
            </Button>

            <Button
            type="button"
            variant="outline"
            className="w-full my-3 py-3 rounded-lg"
            onClick={() => alert("SignUp with Github (implement)")}
            >
            SignUp with Github
            </Button>
        </CardContent>
        
        
      </Card>
    </div>
  );
}
