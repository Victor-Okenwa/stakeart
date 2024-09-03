import { Button } from "./ui/button";

export default function ConnectButton() {
  return (
    <Button asChild className=":bg-destructive">
      <w3m-connect-Button />
    </Button>
  );
}
