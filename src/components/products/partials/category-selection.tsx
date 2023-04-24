"use client";

import { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "@/components/assets";

type item = string;

interface ICategorySelectionProps {
  selection: string[];
}

interface ISelectItem {
  children: React.ReactNode;
  item: item;
}

function CategorySelection({ selection }: ICategorySelectionProps) {
  return (
    <Select.Root>
      <Select.Trigger className="flex items-center justify-center space-x-1 border-2 border-primary px-3 py-2 text-sm font-semibold text-primary">
        <Select.Value placeholder="Select an option" />
        <Select.Icon>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="z-30 rounded-lg bg-white px-2 py-3 shadow-md">
          <Select.Viewport>
            {selection.map((item: item) => (
              <SelectItem item={item}>{item}</SelectItem>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef<HTMLDivElement, ISelectItem>(
  ({ children, item }, forwardedRef) => {
    return (
      <Select.Item
        className="selection_item select-none rounded-lg px-2 py-1 outline-primary hover:bg-primary hover:text-white hover:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-white"
        value={item}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator>✅</Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default CategorySelection;
