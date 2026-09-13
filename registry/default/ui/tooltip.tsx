"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { cn } from "@/lib/utils";

function TooltipProvider({ delay = 200, ...props }: TooltipPrimitive.Provider.Props) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" delay={delay} {...props} />;
}

function Tooltip<Payload = unknown>({ ...props }: TooltipPrimitive.Root.Props<Payload>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger<Payload = unknown>({ ...props }: TooltipPrimitive.Trigger.Props<Payload>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipViewport({ className, ...props }: TooltipPrimitive.Viewport.Props) {
  return (
    <TooltipPrimitive.Viewport
      data-slot="tooltip-viewport"
      className={cn(
        "relative h-full w-full overflow-clip [&_[data-current]]:box-border [&_[data-current]]:w-(--popup-width) [&_[data-current]]:translate-x-0 [&_[data-current]]:translate-y-0 [&_[data-current]]:px-3 [&_[data-current]]:py-1.5 [&_[data-current]]:opacity-100 [&_[data-current]]:transition-all [&_[data-current]]:duration-200 [&_[data-current]]:ease-out motion-reduce:[&_[data-current]]:transition-none [&_[data-current][data-starting-style]]:opacity-0 data-[activation-direction~='down']:[&_[data-current][data-starting-style]]:translate-y-1/2 data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-1/2 data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-1/2 data-[activation-direction~='up']:[&_[data-current][data-starting-style]]:-translate-y-1/2 [&_[data-previous]]:box-border [&_[data-previous]]:w-(--popup-width) [&_[data-previous]]:translate-x-0 [&_[data-previous]]:translate-y-0 [&_[data-previous]]:px-3 [&_[data-previous]]:py-1.5 [&_[data-previous]]:opacity-100 [&_[data-previous]]:transition-all [&_[data-previous]]:duration-200 [&_[data-previous]]:ease-out motion-reduce:[&_[data-previous]]:transition-none [&_[data-previous][data-ending-style]]:opacity-0 data-[activation-direction~='down']:[&_[data-previous][data-ending-style]]:-translate-y-1/2 data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-1/2 data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-1/2 data-[activation-direction~='up']:[&_[data-previous][data-ending-style]]:translate-y-1/2 [[data-instant]_&_[data-current]]:transition-none [[data-instant]_&_[data-previous]]:transition-none",
        className,
      )}
      {...props}
    />
  );
}

function TooltipContent({
  className,
  disableTransition = false,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<TooltipPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset"> & {
    disableTransition?: boolean;
  }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={cn(
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-all duration-200 ease-out data-instant:transition-none motion-reduce:transition-none",
          disableTransition && "transition-none",
        )}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "relative z-50 h-(--popup-height) w-(--popup-width) max-w-xs origin-(--transform-origin) overflow-visible rounded-md bg-foreground text-xs whitespace-nowrap text-background transition-all duration-200 ease-out has-data-[slot=kbd]:pr-1.5 data-instant:transition-none **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm motion-reduce:transition-none",
            disableTransition && "transition-none",
            className,
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

const createTooltipHandle = TooltipPrimitive.createHandle;

export {
  createTooltipHandle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipViewport,
};
