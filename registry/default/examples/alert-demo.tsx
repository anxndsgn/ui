import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-md gap-3">
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can add components to your app from the registry.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Almost there</AlertTitle>
        <AlertDescription>Your trial ends in three days.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>Your session has expired. Please sign in again.</AlertDescription>
      </Alert>
    </div>
  );
}
