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

// Dummy data for categories
const categories = [
  {
    id: 1,
    name: "Fashion",
    image: "/placeholder.svg?height=40&width=40",
    parent: null,
    storeCount: 12,
    productCount: 156,
  },
  {
    id: 2,
    name: "Men's Clothing",
    image: "/placeholder.svg?height=40&width=40",
    parent: "Fashion",
    storeCount: 8,
    productCount: 87,
  },
  {
    id: 3,
    name: "Women's Clothing",
    image: "/placeholder.svg?height=40&width=40",
    parent: "Fashion",
    storeCount: 10,
    productCount: 112,
  },
  {
    id: 4,
    name: "Electronics",
    image: "/placeholder.svg?height=40&width=40",
    parent: null,
    storeCount: 15,
    productCount: 203,
  },
  {
    id: 5,
    name: "Smartphones",
    image: "/placeholder.svg?height=40&width=40",
    parent: "Electronics",
    storeCount: 7,
    productCount: 45,
  },
]

export function CategoryTable({ onEdit }: any) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead className="hidden md:table-cell">Parent</TableHead>
            <TableHead>Stores</TableHead>
            <TableHead className="hidden md:table-cell">Products</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={category.image || "/placeholder.svg"} alt={category.name} />
                    <AvatarFallback>{category.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{category.name}</div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{category.parent || "—"}</TableCell>
              <TableCell>{category.storeCount}</TableCell>
              <TableCell className="hidden md:table-cell">{category.productCount}</TableCell>
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
                    <DropdownMenuItem onClick={() => onEdit(category)}>
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
