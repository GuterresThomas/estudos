import CustomersApp from "@/components/customer"
import UserRouteProtection from "@/components/userRouteProtection"
import Link from "next/link"


export default function Custumers() {
    return (
        <UserRouteProtection>
            <Link href="/user" className="font-semibold">Voltar</Link>
            <CustomersApp />
        </UserRouteProtection>
    )
}