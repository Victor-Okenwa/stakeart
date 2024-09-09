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

const CustomFormField = ({
  control,
  name,
  label = "",
  inputClassName = "",
  isPasswordVisible,
  inputType = "input",
  placeholder,
  defaultValue = "",
  fieldType = "text",
  hidden = false,
  disabled = false,
  accepts = "",
}: CustomFormFieldProps) => {
  const isIdField = name === "id";
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field }) => (
        <FormItem className="form-item" hidden={isIdField || hidden}>
          <div className="flex w-full gap-1 flex-col bg-secondary ring-2 ring-secondary rounded-lg p-1 focus-within:bg-primary-foreground">
            {label && (
              <FormLabel className="text-sm capitalize">{label}</FormLabel>
            )}
            <FormControl hidden={isIdField || hidden}>
              {inputType === "textarea" ? (
                <Textarea  />
              ) : (
                <Input
                  className={cn("input_field", inputClassName)}
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
              )}
            </FormControl>
          </div>
          <FormMessage className="form-message" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
