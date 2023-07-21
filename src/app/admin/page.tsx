'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import DashBoard from "@/components/dashboard";

function Page() {
    const  user  = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user == null) router.push("/");
    }, [user]);

    return (
        <div>
            <DashBoard />
        </div>
    );
}

export default Page;