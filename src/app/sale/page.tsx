import SalesApp from "@/components/sale"
import UserRouteProtection from "@/components/userRouteProtection"
import Link from "next/link"

export default function home() {
    return (
        <UserRouteProtection>
            <Link href="/user" className="font-semibold">Voltar</Link>
            <SalesApp />
        </UserRouteProtection>
    )
}