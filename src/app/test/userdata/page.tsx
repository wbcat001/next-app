// testpage for user user data: get all user, post user data
"use client";
import { use, useState, useEffect } from "react";

type User = {
    id: number;
    email: string;
    name: string;
}


export default function UserPage() {
    const [users, setUsers] = useState<User[]>([]);

    const [email, setEmail] = useState<string>('sample@gmail.com');
    const [name, setName] = useState<string>('userA');


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const res = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, name})
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

    

    useEffect(() => {

        const fetchAllUser = async () => {
            try{
                const res = await fetch('/api/user')
                if (res.ok) {
                    const resJson = await res.json()
                    setUsers(resJson)
                }
    
            }catch(error: unknown){
                if (error instanceof Error){
                    console.error(error.message)
                }else{
                    console.error('An unknown error occurred')
                }
            }
        }
        
        fetchAllUser();
    }, [])

// input text をblackにして
    return (
        <div>
            <form className="flex flex-col max-w-lg space-y-5" onSubmit={handleSubmit}>
                <input className="text-black" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="text-black" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.email} {user.name}</li>
                ))}
            </ul>
        </div>
    )
}