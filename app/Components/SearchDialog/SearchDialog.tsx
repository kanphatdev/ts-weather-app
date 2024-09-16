"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { CommandIcon } from "lucide-react";

const SearchDialog = () => {
  return (
    <div className="search-btn">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100 ease-in-out duration-200"
          >
            <p className="capitalize text-sm text-muted-foreground">
              search here
            </p>
            <div className="command dark:bg-[#262626] bg-slate-200 py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-center gap-2">
              <CommandIcon />
              <span className="text-sm uppercase">f</span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="type Command or search" />
            <ul className="px-3 pb-2">
<p className="p-2 text-sm text-muted-foreground capitalize">
    suggestions
</p>
            </ul>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchDialog;