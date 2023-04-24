import * as Slider from "@radix-ui/react-slider";
import { SetStateAction, Dispatch } from "react";

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
        <Slider.Thumb className="hover:bg-violet3 focus:shadow-blackA8 block h-5 w-5 rounded-[10px] bg-white shadow-[0_2px_10px] focus:shadow-[0_0_0_5px] focus:outline-none" />
        <Slider.Thumb className="hover:bg-violet3 focus:shadow-blackA8 block h-5 w-5 rounded-[10px] bg-white shadow-[0_2px_10px] focus:shadow-[0_0_0_5px] focus:outline-none" />
      </Slider.Root>
    </form>
  );
}

export default PriceSlider;
