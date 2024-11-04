import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const CustomFormField = ({
  control,
  name,
  label = "",
  inputClassName = "",
  // isPasswordVisible,
  inputType = "input",
  placeholder,
  defaultValue = "",
  fieldType = "text",
  hidden = false,
  disabled = false,
  accepts = "",
}: CustomFormFieldProps) => {
  const isIdField = name === "id";
  const isPasswordField = name === "password";

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field }) => (
        <FormItem className="form-item" hidden={isIdField || hidden}>
          <div className="flex w-full gap-1 flex-col bg-popover ring-2 ring-secondary rounded-lg p-1.5 focus-within:bg-primary-foreground shadow-md">
            {label && (
              <FormLabel className="text-sm capitalize">{label}</FormLabel>
            )}
            <FormControl hidden={isIdField || hidden}>
              {inputType === "textarea" ? (
                <Textarea />
              ) : (
                <div className="flex">
                  <Input
                    className={cn(
                      "input_field text-primary outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0 rounded-none ring-0 placeholder:text-xs",
                      inputClassName
                    )}
                    placeholder={placeholder}
                    {...field}
                    type={
                      name === "password" && isPasswordVisible
                        ? "text"
                        : name === "password"
                        ? "password"
                        : fieldType
                    }
                    value={field.value || ""}
                    onChange={field.onChange}
                    accepts={accepts}
                  />

                  {name === "password" && (
                    <Button
                      type="button"
                      className="px-2 rounded-s-none border *:size-5"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      {!isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
                    </Button>
                  )}
                </div>
              )}
            </FormControl>
              <FormMessage className="form-message" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
