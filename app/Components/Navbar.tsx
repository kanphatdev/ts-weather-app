"use client";
import React from "react";
import { ModeToggle } from "../context/Theme/ModeToggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Github } from "lucide-react";
import { github } from "../util/Icons";
import SearchDialog from "./SearchDialog/SearchDialog";

function Navbar() {
  const router = useRouter();
  
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog/>
        <div className="btn-group flex items-center gap-2">
              <ModeToggle /> 
        <Button className="source-code flex items-center gap-2 capitalize" onClick={() => {
          router.push("https://github.com/kanphatdev")
        }}>
          source Code {github}
        </Button> 
        </div>
   
      </div>
     
    </div>
  );
}

export default Navbar;
