import { Switch } from "../ui/switch";

export function SwitchDemo() {
  return (
    <div className="grid gap-3 text-sm">
      <div className="flex items-center gap-2">
        <Switch id="airplane-mode" defaultChecked />
        <label htmlFor="airplane-mode">Airplane mode</label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="reduce-motion" size="sm" />
        <label htmlFor="reduce-motion">Reduce motion</label>
      </div>
    </div>
  );
}
