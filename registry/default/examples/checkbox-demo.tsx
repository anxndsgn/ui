import * as React from "react";

import { Checkbox } from "../ui/checkbox";

export function CheckboxDemo() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="flex items-center gap-2 text-sm">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
      />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  );
}
