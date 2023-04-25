import { SetStateAction, Dispatch } from "react";
import * as Slider from "@radix-ui/react-slider";

interface IPriceSlider {
  setSlideValues: Dispatch<SetStateAction<number[]>>;
}

function PriceSlider({ setSlideValues }: IPriceSlider) {
  return (
    <form>
      <Slider.Root
        className="relative flex h-5 w-[200px] touch-none select-none items-center"
        defaultValue={[0, 150]}
        minStepsBetweenThumbs={1}
        max={150}
        step={10}
        aria-label="Volume"
        onValueChange={(values: number[]) => setSlideValues(values)}
      >
        <Slider.Track className="relative h-[3px] grow rounded-full bg-slate-400">
          <Slider.Range className="absolute h-full rounded-full bg-primary" />
        </Slider.Track>
        <Slider.Thumb className="block h-6 w-6 rounded-full border-2 border-primary bg-white shadow-sm focus:outline-none" />
        <Slider.Thumb className="block h-6 w-6 rounded-full border-2 border-primary bg-white shadow-sm focus:outline-none" />
      </Slider.Root>
    </form>
  );
}

export default PriceSlider;
