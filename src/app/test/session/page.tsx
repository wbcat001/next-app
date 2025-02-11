"use client";


// import useSession()
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { CheckSession } from "@/lib/session";
import { use, useState, useEffect } from "react";
import Provider from "@/components/provider";


const SessionTestPage = () =>{
    const [serverSession, setServerSession]= useState<Session | "fail" | null>();
    useEffect(() => {
        const fetchCheckSession = async () => {
            const response = CheckSession();
            setServerSession(await response);
    
        }
        fetchCheckSession();

    }, [])
    
    return(
        <div>

        <Provider>
            <SessionTestPageComponent/>
        </Provider>
        <p>Server Session: {JSON.stringify(serverSession)}</p>

        </div>
    )
}
const SessionTestPageComponent = () => {
   
    const { data: session } = useSession()
    

   
    return (
        
            <div>
                <h1>Session Test</h1>
                <p>Client Session: {JSON.stringify(session)}</p>
            </div>
        
    );
};

export default SessionTestPage;