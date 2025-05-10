import Link from "next/link";
import AuthButtons from "@/components/auth-buttons";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between  items-center py-3 px-4 fixed top-0 left-0 right-0 z-50 ">
        <Link href="/" className="text-xl font-bold">
          better-auth
        </Link>
        <AuthButtons />
      </nav>
      <div className="h-[4rem]"></div>
    </>
  );
}

/*
Represent data in table format with dummy data with image also in the data 
make the dashboard mobile responsive 
when i click on add new category or stores or deals or producs then i should see the form coming from right side 
smoothly which contains the fields to create a new category or store or deal or product from i can add information about it 
and also i can upload image currently by selecting from my desktop or by drag and drop(currently for image upload add it from front-end side
i will manage uploading feature by myself) 

*/
