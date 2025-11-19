"use client";
import { useState } from "react";
import { apiFetch } from "@/app/Utils/api";
import { FormEvent } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    //     const formData = new FormData(event.currentTarget);
    //     const email = formData.get("email");
    //     const password = formData.get("password");

    //     const response = await fetch("/api/login", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ email, password }),
    //     });

    //     if (response.ok) {
    //       router.push("/ProductsCard");
    //     } else {
    //     }
    //   }
    const response = await fetch(
      "https://furniro-7nnb.onrender.com/api/login/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.access);
      localStorage.setItem("refresh", data.refresh);
      alert("Login successful!");
      router.push("/ProductsCard");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}
