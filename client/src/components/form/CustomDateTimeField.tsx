import { format } from "date-fns";
import { CalendarIcon, Timer } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
const CustomDateTimeField = ({
  control,
  name,
  label = "",
  inputClassName = "",
  defaultValue = "",
  hidden = false,
  disabled = false,
  readOnly = false,
  min,
  max,
}: CustomDateTimeFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field }) => (
        <FormItem className="form-item">
          <div className="flex items-end w-full gap-1 bg-secondary ring-2 ring-secondary rounded-lg p-2 focus-within:ring-destructive focus-within:bg-primary-foreground">
            <Button asChild type="button" className="h-fit py-3" size={"sm"}>
              <FormLabel className="text-xs capitalize h-fit">
                <Timer size={16} />
              </FormLabel>
            </Button>

            <div className="flex flex-col gap-px flex-grow">
              {label && (
                <FormLabel className="text-xs capitalize h-fit">
                  {label}
                </FormLabel>
              )}
              <FormControl hidden={hidden} className="flex-grow">
                <Input
                  type="datetime-local"
                  className={cn("input_field", inputClassName)}
                  readOnly={readOnly}
                  min={min}
                  max={max}
                  {...field}
                  //   value={defaultValue}
                />
              </FormControl>
            </div>
          </div>
            <FormMessage className="form-message" />
        </FormItem>
      )}
    />
  );
};

export default CustomDateTimeField;
