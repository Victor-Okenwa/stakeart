import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { splitCamelCaseToWords } from "@/lib/utils";

const CustomFormSelect = ({
  control,
  name,
  label = "",
  placeholder = "",
  defaultOption = "",
  defaultValue = "",
  options,
  setValue,
}: CustomFormSelectProps) => {
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem className="form-item">
          <div className="flex w-full gap-1 flex-col bg-popover ring-0 ring-primary rounded-lg p-2 shadow-md focus-within:bg-primary-foreground">
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                setValue!(value);
              }}
              value={field.value || defaultValue || defaultOption}
            >
              <FormLabel className="text-sm font-bold capitalize">
                {label || splitCamelCaseToWords(name)}
              </FormLabel>
              <SelectTrigger className="text-gray-500 bg-secondary rounded-none p-1 border h-auto focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent>
                {options.map((option, index) => (
                  <SelectItem
                    key={index}
                    value={option}
                    onSelect={() => alert()}
                  >
                    <span className="flex items-center capitalize">
                      {option}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <FormMessage className="form-message" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormSelect;
