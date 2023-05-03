import { SetStateAction, Dispatch } from "react";
import * as Popover from "@radix-ui/react-popover";
import PriceSlider from "./slider";
import { FilterIcon, PopupClose } from "@/components/assets";

interface IPriceSlider {
  slideValues: number[];
  setSlideValues: Dispatch<SetStateAction<number[]>>;
}

export default function SliderPopout({
  slideValues,
  setSlideValues,
}: IPriceSlider) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="group rounded-full border border-primary bg-primary p-1.5 transition-all duration-150 hover:border-primary hover:bg-white">
          <FilterIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="z-20 border border-slate-100 bg-white p-6 font-sans shadow-md">
          <div>
            <div className="flex items-center justify-between py-4">
              <p>${slideValues[0]}</p>
              <p>${slideValues[1]}</p>
            </div>
            <PriceSlider setSlideValues={setSlideValues} />

            <button className="mt-6 w-full bg-primary px-3 py-1.5 text-center text-sm text-white">
              Filter
            </button>
          </div>

          <Popover.Close
            className=" absolute right-5 top-4 inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full outline-none"
            aria-label="Close"
          >
            <PopupClose />
          </Popover.Close>
          <Popover.Arrow className="fill-white" width={14} height={10} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
