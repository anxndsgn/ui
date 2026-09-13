import { Slider } from "../ui/slider";

export function SliderDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Slider defaultValue={40} aria-label="Opacity" />
      <Slider defaultValue={[20, 70]} aria-label="Price range" />
    </div>
  );
}
