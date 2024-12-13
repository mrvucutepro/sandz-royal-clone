"use client";

import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface DropdownProps {
  label: string; 
  items: { key: string, label: string }[]; 
  onValueChange: (value: string) => void;
  disabled?: boolean;
}


export function Dropdown({ label, items, onValueChange, disabled   }: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value: string) => {
    setSelectedValue(value); 
    onValueChange(value); 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button variant="outline" className="w-[200px]">{selectedValue || label}</Button>
      </DropdownMenuTrigger>
      {!disabled && (
        <DropdownMenuContent className="w-[200px]">
          <DropdownMenuRadioGroup value={selectedValue} onValueChange={handleValueChange}>
            {items.map((item) => (
              <DropdownMenuRadioItem key={item.key} value={item.key}>
                {item.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
