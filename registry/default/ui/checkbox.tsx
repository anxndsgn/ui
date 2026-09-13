import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { RiCheckLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-input bg-background text-primary-foreground outline-none not-disabled:inset-shadow-[0_0.4px_0_--theme(--color-white/12%)] not-data-checked:inset-shadow-xs focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-checked:border-black/10 data-checked:bg-primary",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center"
      >
        <RiCheckLine className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
