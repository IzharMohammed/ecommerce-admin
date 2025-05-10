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

// Dummy data for products
const products = [
  {
    id: 1,
    name: "Summer T-Shirt",
    image: "/placeholder.svg?height=40&width=40",
    price: 29.99,
    category: "Men's Clothing",
    store: "Fashion Store",
    stock: 45,
  },
  {
    id: 2,
    name: "Smartphone X",
    image: "/placeholder.svg?height=40&width=40",
    price: 899.99,
    category: "Smartphones",
    store: "Electronics Hub",
    stock: 12,
  },
  {
    id: 3,
    name: "Organic Apples",
    image: "/placeholder.svg?height=40&width=40",
    price: 4.99,
    category: "Fruits",
    store: "Grocery Market",
    stock: 100,
  },
  {
    id: 4,
    name: "Decorative Lamp",
    image: "/placeholder.svg?height=40&width=40",
    price: 59.99,
    category: "Home Decor",
    store: "Home Decor",
    stock: 8,
  },
  {
    id: 5,
    name: "Running Shoes",
    image: "/placeholder.svg?height=40&width=40",
    price: 79.99,
    category: "Footwear",
    store: "Sports Outlet",
    stock: 23,
  },
]

export function ProductTable({ onEdit }: any) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="hidden md:table-cell">Category</TableHead>
            <TableHead className="hidden md:table-cell">Store</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={product.image || "/placeholder.svg"} alt={product.name} />
                    <AvatarFallback>{product.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{product.name}</div>
                </div>
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell className="hidden md:table-cell">{product.category}</TableCell>
              <TableCell className="hidden md:table-cell">{product.store}</TableCell>
              <TableCell>{product.stock}</TableCell>
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
                    <DropdownMenuItem onClick={() => onEdit(product)}>
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
