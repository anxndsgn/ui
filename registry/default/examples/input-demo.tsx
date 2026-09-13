import { Input } from "../ui/input";

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Input type="email" placeholder="Email" />
      <Input type="email" placeholder="Disabled" disabled />
    </div>
  );
}
