import React from "react";
import { Button } from "../ui/button";
import Loader from "../Loader";

const SubmitButton = ({
  child,
  variant = "default",
  className = "",
  loaderType = "all",
  isLoading,
}: SubmitButtonProps) => {
  return (
    <Button
      disabled={isLoading}
      type="submit"
      variant={variant}
      className={className}
    >
      {isLoading ? <Loader type={loaderType} /> : child}
    </Button>
  );
};

export default SubmitButton;
