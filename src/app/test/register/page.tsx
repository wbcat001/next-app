"use client";

import { useState } from "react";

const RegisterTestPage:React.FC = () => {

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [name, setName] = useState<string>("");

    const handleRegister = async () => {
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password, name })
            });

            if (res.ok) {
                const user = await res.json();
                console.log(user);
            } else {
                setError("Register failed");
            }
        } catch (error) {
            console.error("An unexpected error happened:", error);
            setError("An unexpected error happened");
        }
    };

    return (
        <div>
            <h1>Register Test</h1>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            {error && <p>{error}</p>}
        </div>
    );
};


export default RegisterTestPage;