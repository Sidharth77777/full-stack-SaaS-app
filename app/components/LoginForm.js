"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // replace with your login call
      console.log("submit", { email, password });
      await new Promise((r) => setTimeout(r, 700));
    } catch (err) {
      console.error(err);
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
              <CardTitle className="text-2xl font-semibold">Welcome back</CardTitle>
              <CardDescription className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Sign in to your account to continue
              </CardDescription>
            </div>
            <CardAction className="pt-1">
              <Button variant="link" className="text-sm" onClick={() => {router.push('/signup')}}>
                Sign Up
              </Button>
            </CardAction>
          </div>
        </CardHeader>

        <CardContent className="px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600"
              />
            </div>

            <div>
              <div className="flex items-center">
                <Label htmlFor="password" className="text-sm">
                  Password
                </Label>
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline text-gray-500 dark:text-gray-300"
                >
                  Forgot?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-md"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
            </Button>

            <div className="flex items-center gap-3">
              <hr className="flex-1 border-gray-200 dark:border-gray-700" />
              <span className="text-xs text-gray-500 dark:text-gray-300">or</span>
              <hr className="flex-1 border-gray-200 dark:border-gray-700" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full py-3 rounded-lg"
              onClick={() => alert("Login with Google (implement)")}
            >
              Login with Google
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full py-3 rounded-lg"
              onClick={() => alert("Login with Github (implement)")}
            >
              Login with Github
            </Button>
          </form>
        </CardContent>

      </Card>
    </div>
  );
}
