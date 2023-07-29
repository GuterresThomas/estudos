import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardFinanc } from "./cardsFinanc"
import { CardClientes } from "./cardsClientes"

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
            <Tabs defaultValue="" className="rounded-md bg-zinc-300 mb-3 mt-3">
                <TabsList>
                    <TabsTrigger value="opt1">Informações Financeiras</TabsTrigger>
                    <TabsTrigger value="opt1">Informações Financeiras</TabsTrigger>
                    <TabsTrigger value="opt1">Informações Financeiras</TabsTrigger>
                    <TabsTrigger value="opt1">Informações Financeiras</TabsTrigger>
                    <TabsTrigger value="opt2">Opções da conta</TabsTrigger>  
                </TabsList>
                <TabsContent value="opt1" className="flex space-x-3 bg-zinc-300 p-3 ">
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
            </Tabs>

        </div>
    )
}

export default TabsDashboard