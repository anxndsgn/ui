import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function Tabs({ className, orientation = "horizontal", ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      data-horizontal={orientation === "horizontal" ? "" : undefined}
      data-vertical={orientation === "vertical" ? "" : undefined}
      className={cn("group/tabs flex gap-2 data-horizontal:flex-col", className)}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list relative inline-flex w-fit shrink-0 items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
      size: {
        default: "h-8",
        xs: "h-6 text-xs",
        sm: "h-7 text-[0.8rem]",
        lg: "h-9",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        size: "xs",
        class: "rounded-[min(var(--radius-md),10px)]",
      },
      {
        variant: "default",
        size: "sm",
        class: "rounded-[min(var(--radius-md),12px)]",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const tabsIndicatorVariants = cva(
  "pointer-events-none absolute z-0 transition-[translate,width,height] duration-150 ease-in-out motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default:
          "top-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) translate-y-(--active-tab-top) rounded-md bg-background shadow-sm group-data-[size=sm]/tabs-list:rounded-[min(var(--radius-sm),10px)] group-data-[size=xs]/tabs-list:rounded-[min(var(--radius-sm),8px)] dark:border dark:border-input dark:bg-input/30",
        line: "bg-foreground group-data-horizontal/tabs:bottom-0 group-data-horizontal/tabs:left-0 group-data-horizontal/tabs:h-0.5 group-data-horizontal/tabs:w-(--active-tab-width) group-data-horizontal/tabs:translate-x-(--active-tab-left) group-data-vertical/tabs:top-0 group-data-vertical/tabs:right-0 group-data-vertical/tabs:h-(--active-tab-height) group-data-vertical/tabs:w-0.5 group-data-vertical/tabs:translate-y-(--active-tab-top)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      data-size={size}
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    >
      <TabsIndicator variant={variant} />
      {children}
    </TabsPrimitive.List>
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative z-10 inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-colors group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start group-data-[size=sm]/tabs-list:gap-1 group-data-[size=sm]/tabs-list:rounded-[min(var(--radius-sm),10px)] group-data-[size=sm]/tabs-list:text-[0.8rem] group-data-[size=xs]/tabs-list:gap-1 group-data-[size=xs]/tabs-list:rounded-[min(var(--radius-sm),8px)] group-data-[size=xs]/tabs-list:text-xs hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-active:text-foreground dark:text-muted-foreground dark:hover:text-foreground dark:data-active:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-[size=sm]/tabs-list:[&_svg:not([class*='size-'])]:size-3.5 group-data-[size=xs]/tabs-list:[&_svg:not([class*='size-'])]:size-3",
        className,
      )}
      {...props}
    />
  );
}

function TabsIndicator({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.Indicator.Props & VariantProps<typeof tabsIndicatorVariants>) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(tabsIndicatorVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsIndicator, TabsContent, tabsListVariants };
