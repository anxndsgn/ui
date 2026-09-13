import { Kbd, KbdGroup } from "../ui/kbd";

export function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </div>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span className="text-muted-foreground">+</span>
        <Kbd>Shift</Kbd>
        <span className="text-muted-foreground">+</span>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  );
}
