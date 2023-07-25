import StockForm from "@/components/stockform";
import UserRouteProtection from "@/components/userRouteProtection";
import React from "react";

const Page = () => {
    return (
        <UserRouteProtection>
            <StockForm />
        </UserRouteProtection>
    )
}

export default Page