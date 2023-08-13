import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardFinanc } from "./cardsFinanc"
import { CardClientes } from "./cardsClientes"
import CustomersApp from "@/components/customer"
import SalesApp from "@/components/sale"
import Storages from "@/components/products"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const TabsDashboard = () => {
    return (
        <div>
            <Tabs defaultValue="" className="rounded-2xl bg-zinc-300 mt-3">
                <TabsList>
                    <TabsTrigger value="opt1">Informações Financeiras</TabsTrigger>
                    <TabsTrigger value="opt3">+Clientes</TabsTrigger>
                    <TabsTrigger value="opt4">Vendas</TabsTrigger>
                    <TabsTrigger value="opt5">Produtos</TabsTrigger>
                    <TabsTrigger value="opt2">Opções da conta</TabsTrigger>  
                </TabsList>
                <TabsContent value="opt1" className="flex space-x-3 bg-zinc-300 ">
                    <CardFinanc />
                    <CardClientes />
                    <CardFinanc />
                    <CardClientes />
                </TabsContent>
                <TabsContent value="opt2" className="bg-zinc-50">
                    <Card className="bg-zinc-50">
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                            Change your password here. After saving, you ll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="opt3" >
                    <CustomersApp />
                </TabsContent>
                <TabsContent value="opt4" >
                    <SalesApp />
                </TabsContent>
                <TabsContent value="opt5">
                    <Storages />
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default TabsDashboard