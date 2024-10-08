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
  placeholder="",
  defaultOption = "",
  defaultValue = "",
  options,
}: CustomFormSelectProps) => {
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem className="form-item">
          <div className="flex w-full gap-1 flex-col bg-secondary ring-2 ring-primary rounded-lg p-2 focus-within:bg-primary-foreground">
            <Select
              onValueChange={field.onChange}
              value={field.value || defaultValue || defaultOption}
            >
              <FormLabel className="text-xs font-bold capitalize">
                {label || splitCamelCaseToWords(name)}
              </FormLabel>
              <SelectTrigger className="text-gray-500 bg-transparent border-none p-0 h-auto focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent>
                {options.map((option, index) => (
                  <SelectItem key={index} value={option}>
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
