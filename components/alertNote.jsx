import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { RocketIcon } from "lucide-react"

export default function AlertNote() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(user);

  return (
    <>
      {showMessage && (
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Hello, {user.username}! You can preview your dashboard below.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}
