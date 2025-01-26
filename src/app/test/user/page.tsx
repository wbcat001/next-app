"use client";

import React from "react";


export default function UserPage() {
    const [userName, setUserName] = React.useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const res = await fetch('/api/postUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: userName})
            })
            if (res.ok) {
                const resJson = await res.json()
                console.log(resJson)
            }

        }catch(error: unknown){
            if (error instanceof Error){
                console.error(error.message)
            }else{
                console.error('An unknown error occurred')
            }
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}