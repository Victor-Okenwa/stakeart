import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CustomFormField = ({
  control,
  name,
  label = "",
  inputClassName = "",
  isPasswordVisible,
  placeholder,
  defaultValue = "",
  fieldType="text",
}: CustomFormFieldProps) => {
  const isWhatsAppField = name === "phone";
  const isIdField = name === "id";
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem className="form-item" hidden={isIdField}>
          <div className="flex w-full gap-1 flex-col bg-secondary ring-2 ring-secondary rounded-lg p-1 focus-within:bg-primary-foreground">
            {label && (
              <FormLabel className="text-xs text-destructive capitalize">
                {label}
              </FormLabel>
            )}
            <FormControl hidden={isIdField}>
              {isWhatsAppField ? (
                <div className="whatsapp_input_container">
                  <div className=" inset-y-0 left-0 flex items-center">
                    <span className="text-white bg-primary rounded-xl px-3 py-2 ">
                      +234
                    </span>
                  </div>
                  <Input
                    type="tel"
                    name={name}
                    placeholder={placeholder}
                    value={field.value || ""}
                    onChange={field.onChange}
                    className={cn(
                      "input_field ml-2 border-none focus-visible:ring-0 bg-transparent",
                      inputClassName
                    )}
                  />
                </div>
              ) : (
                <Input
                  className={cn("input_field", inputClassName)}
                  placeholder={placeholder}
                  disabled={isIdField}
                  hidden={isIdField}
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
