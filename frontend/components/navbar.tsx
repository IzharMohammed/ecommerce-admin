import Link from "next/link";
import AuthButtons from "@/components/auth-buttons";
import { Store } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between  items-center py-3 px-4 fixed top-0 left-0 right-0 z-50 ">
        {/* <Link href="/" className="text-xl font-bold">
          Store Admin
        </Link> */}
        <div className="flex h-14 items-center px-4">
          <Store className="mr-2 h-6 w-6" />
          <span className="font-bold">StoreAdmin</span>
        </div>
        <AuthButtons />
      </nav>
      <div className="h-[4rem]"></div>
    </>
  );
}
