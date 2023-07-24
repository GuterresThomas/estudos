'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import DashBoard from "@/components/dashboard";
import Link from "next/link";

function Page() {
    const  user  = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user == null) {
            return  window.location.replace('/');
        };
    }, [user]);
    return (
        <div>
            <DashBoard />
        </div>
    );
}

export default Page;