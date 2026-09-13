import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  orientation = "horizontal",
  "aria-label": ariaLabel,
  ...props
}: SliderPrimitive.Root.Props) {
  const currentValue = value ?? defaultValue ?? min;
  const thumbCount = Array.isArray(currentValue) ? currentValue.length : 1;
  const horizontal = orientation === "horizontal";
  const getThumbAriaLabel = ariaLabel
    ? (index: number) => (thumbCount > 1 ? `${ariaLabel} ${index + 1}` : ariaLabel)
    : undefined;

  return (
    <SliderPrimitive.Root
      className={cn(horizontal ? "w-full" : "h-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      orientation={orientation}
      aria-label={ariaLabel}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control
        className={cn(
          "relative flex touch-none select-none data-disabled:opacity-50",
          horizontal ? "h-2 w-full items-center" : "h-full min-h-40 w-2 flex-col",
        )}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "relative grow overflow-hidden rounded-full bg-muted select-none",
            horizontal ? "h-1 w-full" : "h-full w-1",
          )}
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className={cn("bg-primary select-none", horizontal ? "h-full" : "w-full")}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: thumbCount }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            index={index}
            getAriaLabel={getThumbAriaLabel}
            className="relative block size-4 shrink-0 rounded-full border-2 border-primary bg-background shadow-xs ring-ring/50 transition-shadow select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
