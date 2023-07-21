import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function CardClientes() {
  return (
    <Card className="w-56">
      <CardHeader>
        <CardTitle>Clientes </CardTitle>
        <CardDescription>+222222</CardDescription>
      </CardHeader>
      <CardContent>
        <p>+20% que o último mês</p>
      </CardContent>
    </Card>
  )
}

