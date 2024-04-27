import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ButtonCollection() {
  return (
    <Tabs defaultValue="account" className="w-[400px] pt-3">
      <TabsList className="rounded-[5px] inline-flex h-9 items-center justify-center  bg-muted p-1 mb-10  text-muted-foreground bg-gray-50">
        <TabsTrigger className="rounded-[5px] inline-flex items-center justify-center  whitespace-nowrap  px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" value="account">Overview</TabsTrigger>
        <TabsTrigger className="rounded-[5px] inline-flex items-center justify-center  whitespace-nowrap  px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" value="sales">Sales</TabsTrigger>
        <TabsTrigger className="rounded-[5px] inline-flex items-center justify-center  whitespace-nowrap  px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" value="Reports">Reports</TabsTrigger>
        <TabsTrigger className="rounded-[5px] inline-flex items-center justify-center  whitespace-nowrap  px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" value="notifications">notifications</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

