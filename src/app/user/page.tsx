'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import DashBoard from "@/components/dashboard";
import Link from "next/link";
import AdminRouteProtection from "@/components/adminrouteprotection";
import UserRouteProtection from "@/components/userRouteProtection";


function Page() {
    const  user  = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            return router.push('/');
        };
    }, [user]);
    return (
        <div>
            <UserRouteProtection>
                <DashBoard />
            </UserRouteProtection>
        </div>
    );
}

export default Page;