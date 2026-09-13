import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import * as React from "react";

import { cn } from "@/lib/utils";

const NumberFieldContext = React.createContext<{ fieldId: string } | null>(null);

function NumberField({
  id,
  className,
  size = "default",
  ...props
}: NumberFieldPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg";
}) {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;

  return (
    <NumberFieldContext.Provider value={{ fieldId }}>
      <NumberFieldPrimitive.Root
        className={cn("flex w-full flex-col items-start gap-2", className)}
        data-size={size}
        data-slot="number-field"
        id={fieldId}
        {...props}
      />
    </NumberFieldContext.Provider>
  );
}

function NumberFieldGroup({ className, ...props }: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group
      className={cn(
        "relative flex h-8 w-full justify-between rounded-lg border border-input bg-background text-sm text-foreground inset-shadow-xs transition-[border-color,box-shadow] focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="number-field-group"
      {...props}
    />
  );
}

function NumberFieldDecrement({ className, ...props }: NumberFieldPrimitive.Decrement.Props) {
  return (
    <NumberFieldPrimitive.Decrement
      className={cn(
        "relative flex shrink-0 cursor-pointer items-center justify-center rounded-l-[calc(var(--radius-lg)-1px)] px-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none in-data-[size=sm]:px-2",
        className,
      )}
      data-slot="number-field-decrement"
      {...props}
    >
      <RiSubtractLine />
    </NumberFieldPrimitive.Decrement>
  );
}

function NumberFieldIncrement({ className, ...props }: NumberFieldPrimitive.Increment.Props) {
  return (
    <NumberFieldPrimitive.Increment
      className={cn(
        "relative flex shrink-0 cursor-pointer items-center justify-center rounded-r-[calc(var(--radius-lg)-1px)] px-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none in-data-[size=sm]:px-2",
        className,
      )}
      data-slot="number-field-increment"
      {...props}
    >
      <RiAddLine />
    </NumberFieldPrimitive.Increment>
  );
}

function NumberFieldInput({ className, ...props }: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input
      className={cn(
        "h-full w-full min-w-0 grow bg-transparent px-2.5 text-center text-foreground tabular-nums outline-none selection:bg-primary selection:text-primary-foreground focus-visible:outline-none",
        className,
      )}
      data-slot="number-field-input"
      {...props}
    />
  );
}

function NumberFieldScrubArea({
  className,
  label,
  ...props
}: NumberFieldPrimitive.ScrubArea.Props & { label: string }) {
  const context = React.useContext(NumberFieldContext);

  if (!context) {
    throw new Error("NumberFieldScrubArea must be used within a NumberField component.");
  }

  return (
    <NumberFieldPrimitive.ScrubArea
      className={cn("flex cursor-ew-resize touch-none select-none", className)}
      data-slot="number-field-scrub-area"
      {...props}
    >
      <label className="cursor-ew-resize" htmlFor={context.fieldId}>
        {label}
      </label>
      <NumberFieldPrimitive.ScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
        <CursorGrowIcon />
      </NumberFieldPrimitive.ScrubAreaCursor>
    </NumberFieldPrimitive.ScrubArea>
  );
}

function CursorGrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      aria-hidden="true"
      fill="black"
      height="14"
      stroke="white"
      viewBox="0 0 26 14"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 5.5L6.497 5.518V2L1 7l5.5 5-.003-3.5H19.5V12L25 7l-5.5-5v3.5Z" />
    </svg>
  );
}

export {
  CursorGrowIcon,
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldPrimitive,
  NumberFieldScrubArea,
};
