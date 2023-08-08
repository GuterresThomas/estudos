
import React from "react";
import ProductsApp from "@/components/products"
import UserRouteProtection from "@/components/userRouteProtection"

const testeDb = () => {
    return (
    <UserRouteProtection>
        <ProductsApp />
    </UserRouteProtection>
    )
}

export default testeDb
