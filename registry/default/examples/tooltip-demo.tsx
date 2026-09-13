import { Button } from "../ui/button";
import { Kbd } from "../ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipViewport,
} from "../ui/tooltip";

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent>
          <TooltipViewport>
            Add to library
            <Kbd>⌘K</Kbd>
          </TooltipViewport>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
