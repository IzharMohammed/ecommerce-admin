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

// Dummy data for stores
const stores = [
  {
    id: 1,
    name: "Fashion Store",
    image: "/placeholder.svg?height=40&width=40",
    location: "New York, NY",
    contactEmail: "contact@fashionstore.com",
    contactPhone: "+1 (555) 123-4567",
    createdAt: "2023-05-15",
  },
  {
    id: 2,
    name: "Electronics Hub",
    image: "/placeholder.svg?height=40&width=40",
    location: "San Francisco, CA",
    contactEmail: "info@electronicshub.com",
    contactPhone: "+1 (555) 987-6543",
    createdAt: "2023-06-22",
  },
  {
    id: 3,
    name: "Grocery Market",
    image: "/placeholder.svg?height=40&width=40",
    location: "Chicago, IL",
    contactEmail: "support@grocerymarket.com",
    contactPhone: "+1 (555) 456-7890",
    createdAt: "2023-07-10",
  },
  {
    id: 4,
    name: "Home Decor",
    image: "/placeholder.svg?height=40&width=40",
    location: "Los Angeles, CA",
    contactEmail: "info@homedecor.com",
    contactPhone: "+1 (555) 234-5678",
    createdAt: "2023-08-05",
  },
  {
    id: 5,
    name: "Sports Outlet",
    image: "/placeholder.svg?height=40&width=40",
    location: "Miami, FL",
    contactEmail: "contact@sportsoutlet.com",
    contactPhone: "+1 (555) 876-5432",
    createdAt: "2023-09-18",
  },
]

export function StoreTable({ onEdit }: any) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Store</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="hidden md:table-cell">Contact</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stores.map((store) => (
            <TableRow key={store.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={store.image || "/placeholder.svg"} alt={store.name} />
                    <AvatarFallback>{store.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{store.name}</div>
                </div>
              </TableCell>
              <TableCell>{store.location}</TableCell>
              <TableCell className="hidden md:table-cell">{store.contactEmail}</TableCell>
              <TableCell className="hidden md:table-cell">{store.createdAt}</TableCell>
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
                    <DropdownMenuItem onClick={() => onEdit(store)}>
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
