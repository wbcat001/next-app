"use client";

import { useState } from "react";

import { useRouter } from 'next/navigation'
import React from 'react'
import { signIn } from 'next-auth/react'

const LoginPage = () => {
    const router = useRouter()  

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const handleLogin = async () => {
        try {
            
        
            const response = await fetch("/api/register",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password,
            }),
          })

          await signIn('credentials', {
            redirect: false,
            email: email,
            password,
          })
            .then((res) => {
              if (res?.error) {
                alert(res.error)
              }
              router.push('/')
            })
            .catch((err) => {
              console.log(err)
            })
        
        } catch (error) {
            console.error("An unexpected error happened:", error);
            setError("An unexpected error happened");
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            
            <input
                className="text-black"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="text-black"

                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Sign In</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default LoginPage;