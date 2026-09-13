import { Children, isValidElement, useMemo, type ReactElement, type ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "registry/default/ui/tabs";
import { ComponentSource } from "./component-source";

type TabValue = "preview" | "source";

export function ComponentTabs({
  children,
  preview,
  source,
  defaultValue = "preview",
}: {
  children?: ReactNode;
  preview?: ReactNode;
  source?: ReactNode | string;
  defaultValue?: TabValue;
}) {
  const slots = useMemo(() => resolveSlots(children, preview, source), [children, preview, source]);

  return (
    <Tabs className="gap-1.5" defaultValue={defaultValue}>
      <TabsList aria-label="Component view">
        <TabsTrigger className="text-xs" value="preview">
          Preview
        </TabsTrigger>
        <TabsTrigger className="text-xs" value="source">
          Source
        </TabsTrigger>
      </TabsList>
      <TabsContent className="min-h-65 text-base" value="preview">
        {slots.preview}
      </TabsContent>
      <TabsContent className="min-h-65 text-base [&>figure]:border-0" value="source">
        {slots.source}
      </TabsContent>
    </Tabs>
  );
}

function resolveSlots(children: ReactNode, preview?: ReactNode, source?: ReactNode | string) {
  const childArray = Children.toArray(children);
  const childPreview = childArray.find((child) => hasDisplayName(child, "ComponentPreview"));
  const childSource = childArray.find((child) => hasDisplayName(child, "ComponentSource"));

  return {
    preview: preview ?? childPreview ?? null,
    source:
      typeof source === "string" ? (
        <ComponentSource code={source} />
      ) : (
        (source ?? childSource ?? null)
      ),
  };
}

function hasDisplayName(child: ReactNode, displayName: string): child is ReactElement {
  return (
    isValidElement(child) &&
    typeof child.type !== "string" &&
    "displayName" in child.type &&
    child.type.displayName === displayName
  );
}
