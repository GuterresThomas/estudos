
import React from "react";
import ProductsApp from "@/components/products"
import UserRouteProtection from "@/components/userRouteProtection"
import Link from "next/link"

const testeDb = () => {
    return (
    <UserRouteProtection>
        <Link href="/user" className="font-semibold">Voltar</Link>
        <ProductsApp />
    </UserRouteProtection>
    )
}

export default testeDb
