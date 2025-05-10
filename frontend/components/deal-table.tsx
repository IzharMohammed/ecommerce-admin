"use client"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Dummy data for deals
const deals = [
  {
    id: 1,
    title: "Summer Sale",
    image: "/placeholder.svg?height=40&width=40",
    discountPercentage: 25,
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    store: "Fashion Store",
    status: "active",
  },
  {
    id: 2,
    title: "Back to School",
    image: "/placeholder.svg?height=40&width=40",
    discountPercentage: 15,
    startDate: "2023-08-15",
    endDate: "2023-09-15",
    store: "Electronics Hub",
    status: "active",
  },
  {
    id: 3,
    title: "Holiday Special",
    image: "/placeholder.svg?height=40&width=40",
    discountPercentage: 30,
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    store: "Home Decor",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Flash Sale",
    image: "/placeholder.svg?height=40&width=40",
    discountPercentage: 50,
    startDate: "2023-07-15",
    endDate: "2023-07-16",
    store: "Sports Outlet",
    status: "expired",
  },
  {
    id: 5,
    title: "Weekend Offer",
    image: "/placeholder.svg?height=40&width=40",
    discountPercentage: 10,
    startDate: "2023-09-22",
    endDate: "2023-09-24",
    store: "Grocery Market",
    status: "active",
  },
]

export function DealTable({ onEdit }:any) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Deal</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead className="hidden md:table-cell">Store</TableHead>
            <TableHead className="hidden md:table-cell">Period</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deals.map((deal) => (
            <TableRow key={deal.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={deal.image || "/placeholder.svg"} alt={deal.title} />
                    <AvatarFallback>{deal.title.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{deal.title}</div>
                </div>
              </TableCell>
              <TableCell>{deal.discountPercentage}%</TableCell>
              <TableCell className="hidden md:table-cell">{deal.store}</TableCell>
              <TableCell className="hidden md:table-cell">
                {deal.startDate} - {deal.endDate}
              </TableCell>
              <TableCell>
                <Badge
                  variant={deal.status === "active" ? "default" : deal.status === "upcoming" ? "outline" : "secondary"}
                >
                  {deal.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onEdit(deal)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
