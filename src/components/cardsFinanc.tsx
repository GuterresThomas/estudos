import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function CardFinanc() {
  return (
    <div>
        <Card className="w-56">
            <CardHeader>
                <CardTitle>Total de vendas</CardTitle>
                <CardDescription>$9999999</CardDescription>
            </CardHeader>
            <CardContent>
            <p>+20% que o último mês</p>
            </CardContent>
    </Card>
    </div>
  )
}

