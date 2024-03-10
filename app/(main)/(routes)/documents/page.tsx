"use client";

import Image from "next/image";
import { PlusCircle } from "lucide-react";

import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {

  const { user } = useUser();

  return ( 
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty state image"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty state image"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notion
      </h2>
      <Button>
        <PlusCircle/>
      </Button>
    </div>
   );
}
 
export default DocumentsPage;