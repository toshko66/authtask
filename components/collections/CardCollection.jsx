import { Activity, CreditCard, DollarSign, Users } from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const cardData = [
    {
        title: "Total Revenue",
        icon: DollarSign,
        amount: "$45,231.89",
        change: "+20.1% from last month"
    },
    {
        title: "Subscription",
        icon: Users,
        amount: "+2350",
        change: "+180.1% from last month"
    },
    {
        title: "Sales",
        icon: CreditCard,
        amount: "+12,234",
        change: "+19% from last month"
    },
    {
        title: "Active Now",
        icon: Activity,
        amount: "+573",
        change: "+201 since last hour"
    }
];

export default function cardCollection() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {cardData.map((card, index) => (
                <Card className="max-w-md" key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                        <card.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{card.amount}</div>
                        <p className="text-xs text-muted-foreground">{card.change}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
};