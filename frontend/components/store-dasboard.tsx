"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Building2,
  CircleUser,
  LayoutDashboard,
  Package,
  Plus,
  Settings,
  ShoppingBag,
  Store,
  Tag,
  X,
} from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StoreTable } from "@/components/store-table";
import { DealTable } from "@/components/deal-table";
import { CategoryTable } from "@/components/category-table";
import { ProductTable } from "@/components/product-table";
import { AnalyticsDashboard } from "@/components/analytics-dashboard";
import { UserProfile } from "@/components/user-profile";

export function StoreDashboard() {
  const [activeSection, setActiveSection] = useState("stores");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const [editData, setEditData] = useState(null);

  const openDrawer = (type, data = null) => {
    setDrawerType(type);
    setEditData(data);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => {
      setEditData(null);
    }, 300);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Stores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Deals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-muted-foreground">
                  +12 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">
                  +3 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">
                  +28 from last month
                </p>
              </CardContent>
            </Card>
          </div>
        );
      case "analytics":
        return <AnalyticsDashboard />;
      case "stores":
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Stores</CardTitle>
                <CardDescription>
                  Manage your stores and their details.
                </CardDescription>
              </div>
              <Button onClick={() => openDrawer("store")}>
                <Plus className="mr-2 h-4 w-4" />
                Add Store
              </Button>
            </CardHeader>
            <CardContent>
              <StoreTable onEdit={(data: any) => openDrawer("store", data)} />
            </CardContent>
          </Card>
        );
      case "deals":
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Deals</CardTitle>
                <CardDescription>
                  Manage deals and promotions for your stores.
                </CardDescription>
              </div>
              <Button onClick={() => openDrawer("deal")}>
                <Plus className="mr-2 h-4 w-4" />
                Add Deal
              </Button>
            </CardHeader>
            <CardContent>
              <DealTable onEdit={(data: any) => openDrawer("deal", data)} />
            </CardContent>
          </Card>
        );
      case "categories":
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Categories</CardTitle>
                <CardDescription>
                  Manage store categories and subcategories.
                </CardDescription>
              </div>
              <Button onClick={() => openDrawer("category")}>
                <Plus className="mr-2 h-4 w-4" />
                Add Category
              </Button>
            </CardHeader>
            <CardContent>
              <CategoryTable
                onEdit={(data: any) => openDrawer("category", data)}
              />
            </CardContent>
          </Card>
        );
      case "products":
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  Manage products across your stores.
                </CardDescription>
              </div>
              <Button onClick={() => openDrawer("product")}>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </CardHeader>
            <CardContent>
              <ProductTable
                onEdit={(data: any) => openDrawer("product", data)}
              />
            </CardContent>
          </Card>
        );
      case "settings":
        return <UserProfile />;
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader className="border-b">
            {/* <div className="flex h-14 items-center px-4">
              <Store className="mr-2 h-6 w-6" />
              <span className="font-bold">StoreAdmin</span>
            </div> */}
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <div className="mt-[1.5rem]">
              <SidebarGroupLabel>Overview</SidebarGroupLabel>
                </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      tooltip="Dashboard"
                      isActive={activeSection === "dashboard"}
                      onClick={() => setActiveSection("dashboard")}
                    >
                      <a href="#dashboard">
                        <LayoutDashboard className="h-5 w-5" />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      tooltip="Analytics"
                      isActive={activeSection === "analytics"}
                      onClick={() => setActiveSection("analytics")}
                    >
                      <a href="#analytics">
                        <BarChart3 className="h-5 w-5" />
                        <span>Analytics</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Store Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={activeSection === "stores"}
                      tooltip="Stores"
                      onClick={() => setActiveSection("stores")}
                    >
                      <a href="#stores">
                        <Building2 className="h-5 w-5" />
                        <span>Stores</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      tooltip="Deals"
                      isActive={activeSection === "deals"}
                      onClick={() => setActiveSection("deals")}
                    >
                      <a href="#deals">
                        <Tag className="h-5 w-5" />
                        <span>Deals</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      tooltip="Categories"
                      isActive={activeSection === "categories"}
                      onClick={() => setActiveSection("categories")}
                    >
                      <a href="#categories">
                        <Package className="h-5 w-5" />
                        <span>Categories</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      tooltip="Products"
                      isActive={activeSection === "products"}
                      onClick={() => setActiveSection("products")}
                    >
                      <a href="#products">
                        <ShoppingBag className="h-5 w-5" />
                        <span>Products</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>User Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Users">
                      <a href="#users">
                        <CircleUser className="h-5 w-5" />
                        <span>Users</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Settings"
                  isActive={activeSection === "settings"}
                  onClick={() => setActiveSection("settings")}
                >
                  <a href="#settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <div className="flex h-full flex-col">
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-lg font-semibold capitalize">
                  {activeSection}
                </h1>
              </div>
              {activeSection !== "settings" &&
                activeSection !== "analytics" &&
                activeSection !== "dashboard" && (
                  <Button
                    size="sm"
                    onClick={() => openDrawer(activeSection.slice(0, -1))}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add {activeSection.slice(0, -1)}
                  </Button>
                )}
            </header>
            <main className="flex-1 p-4 lg:p-6">{renderContent()}</main>
          </div>
        </SidebarInset>
      </div>

      {/* Slide-in drawer for forms */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-md bg-background p-6 shadow-lg sm:w-[400px]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold capitalize">
                  {editData ? `Edit ${drawerType}` : `Add ${drawerType}`}
                </h2>
                <Button variant="ghost" size="icon" onClick={closeDrawer}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <ScrollArea className="h-[calc(100vh-100px)] pr-4">
                {drawerType === "store" && (
                  <StoreForm initialData={editData} onClose={closeDrawer} />
                )}
                {drawerType === "deal" && (
                  <DealForm initialData={editData} onClose={closeDrawer} />
                )}
                {drawerType === "category" && (
                  <CategoryForm initialData={editData} onClose={closeDrawer} />
                )}
                {drawerType === "product" && (
                  <ProductForm initialData={editData} onClose={closeDrawer} />
                )}
              </ScrollArea>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarProvider>
  );
}

function StoreForm({ initialData, onClose }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      name: "",
      location: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="image">Store Image</Label>
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-md border">
            <img
              src={initialData?.image || "/placeholder.svg?height=96&width=96"}
              alt="Store preview"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <Input id="image" type="file" accept="image/*" />
            <p className="mt-1 text-xs text-muted-foreground">
              Upload a store logo or image
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Store Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Store name is required" })}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors?.name?.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && (
          <p className="text-xs text-destructive">{errors.location.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register("description")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactEmail">Contact Email</Label>
        <Input
          id="contactEmail"
          type="email"
          {...register("contactEmail", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.contactEmail && (
          <p className="text-xs text-destructive">
            {errors.contactEmail.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactPhone">Contact Phone</Label>
        <Input id="contactPhone" {...register("contactPhone")} />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? "Update Store" : "Create Store"}
        </Button>
      </div>
    </form>
  );
}

function DealForm({ initialData, onClose }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      title: "",
      description: "",
      discountPercentage: "",
      startDate: "",
      endDate: "",
      storeId: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="image">Deal Image</Label>
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-md border">
            <img
              src={initialData?.image || "/placeholder.svg?height=96&width=96"}
              alt="Deal preview"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <Input id="image" type="file" accept="image/*" />
            <p className="mt-1 text-xs text-muted-foreground">
              Upload a deal banner image
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Deal Title</Label>
        <Input
          id="title"
          {...register("title", { required: "Deal title is required" })}
        />
        {errors.title && (
          <p className="text-xs text-destructive">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register("description")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="discountPercentage">Discount Percentage</Label>
        <Input
          id="discountPercentage"
          type="number"
          {...register("discountPercentage", {
            required: "Discount percentage is required",
            min: {
              value: 1,
              message: "Discount must be at least 1%",
            },
            max: {
              value: 100,
              message: "Discount cannot exceed 100%",
            },
          })}
        />
        {errors.discountPercentage && (
          <p className="text-xs text-destructive">
            {errors.discountPercentage.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            {...register("startDate", { required: "Start date is required" })}
          />
          {errors.startDate && (
            <p className="text-xs text-destructive">
              {errors.startDate.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            type="date"
            {...register("endDate", { required: "End date is required" })}
          />
          {errors.endDate && (
            <p className="text-xs text-destructive">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="storeId">Store</Label>
        <Select defaultValue={initialData?.storeId || "1"}>
          <SelectTrigger>
            <SelectValue placeholder="Select a store" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Fashion Store</SelectItem>
            <SelectItem value="2">Electronics Hub</SelectItem>
            <SelectItem value="3">Grocery Market</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? "Update Deal" : "Create Deal"}
        </Button>
      </div>
    </form>
  );
}

function CategoryForm({ initialData, onClose }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      name: "",
      description: "",
      parentId: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="image">Category Icon</Label>
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-md border">
            <img
              src={initialData?.image || "/placeholder.svg?height=96&width=96"}
              alt="Category preview"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <Input id="image" type="file" accept="image/*" />
            <p className="mt-1 text-xs text-muted-foreground">
              Upload a category icon
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Category Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Category name is required" })}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register("description")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="parentId">Parent Category (Optional)</Label>
        <Select defaultValue={initialData?.parentId || "none"}>
          <SelectTrigger>
            <SelectValue placeholder="Select a parent category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None (Top Level)</SelectItem>
            <SelectItem value="1">Fashion</SelectItem>
            <SelectItem value="2">Electronics</SelectItem>
            <SelectItem value="3">Food & Beverages</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? "Update Category" : "Create Category"}
        </Button>
      </div>
    </form>
  );
}

function ProductForm({ initialData, onClose }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      name: "",
      description: "",
      price: "",
      categoryId: "",
      storeId: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="image">Product Image</Label>
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-md border">
            <img
              src={initialData?.image || "/placeholder.svg?height=96&width=96"}
              alt="Product preview"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <Input id="image" type="file" accept="image/*" />
            <p className="mt-1 text-xs text-muted-foreground">
              Upload a product image
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Product name is required" })}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register("description")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          step="0.01"
          {...register("price", {
            required: "Price is required",
            min: {
              value: 0.01,
              message: "Price must be greater than 0",
            },
          })}
        />
        {errors.price && (
          <p className="text-xs text-destructive">{errors.price.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="categoryId">Category</Label>
        <Select defaultValue={initialData?.categoryId || "1"}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Fashion</SelectItem>
            <SelectItem value="2">Electronics</SelectItem>
            <SelectItem value="3">Food & Beverages</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="storeId">Store</Label>
        <Select defaultValue={initialData?.storeId || "1"}>
          <SelectTrigger>
            <SelectValue placeholder="Select a store" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Fashion Store</SelectItem>
            <SelectItem value="2">Electronics Hub</SelectItem>
            <SelectItem value="3">Grocery Market</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? "Update Product" : "Create Product"}
        </Button>
      </div>
    </form>
  );
}
