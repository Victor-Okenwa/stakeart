import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ArrowBigUpDash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { pleadFormSchema } from "@/lib/schemas";
import { Form } from "./ui/form";
import CustomFormField from "./form/CustomFormField";
import SubmitButton from "./form/SubmitButton";
import { toast } from "sonner";
import CustomFormSelect from "./form/CustomFormSelect";
import { useState } from "react";
import { Separator } from "./ui/separator";

const Plead = ({ type, interest, duration, minAmount }: PleadProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = pleadFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Plead has been placed");
    }, 1000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"gold"} className="text-lg">
          Plead <ArrowBigUpDash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Plead  {type === "stake" ? "for Stake" : "to Collect"}
          </DialogTitle>
        </DialogHeader>
        <Separator />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-5"
          >
            {type === "stake" ? (
              <>
                <CustomFormSelect
                  control={form.control}
                  name={"interest"}
                  placeholder="Plead interest"
                  defaultOption={interest}
                  options={[
                    "1%",
                    "2%",
                    "3%",
                    "5%",
                    "10%",
                    "12%",
                    "20%",
                    "25%",
                    "50%",
                  ]}
                />

                <CustomFormSelect
                  control={form.control}
                  name={"duration"}
                  placeholder="Plead duration"
                  defaultOption={duration}
                  options={[
                    "7 days",
                    "10 days",
                    "30 days",
                    "50 days",
                    "60 days",
                    "120 days",
                    "365 days",
                  ]}
                />

                <CustomFormField
                  control={form.control}
                  name="minAmount"
                  defaultValue={minAmount}
                  fieldType="number"
                  placeholder=""
                  inputClassName="text-center text-lg"
                />
              </>
            ) : (
                <div className="flex flex-col gap-3">
                  <p>
                    &bull; You are not required to send any payments or transactions to owner.</p>
                  <CustomFormField
                    control={form.control}
                    name="minAmount"
                    defaultValue={minAmount}
                    fieldType="number"
                    placeholder=""
                    inputClassName="text-center text-lg"
                    disabled={true}
                    hidden={true}
                  />
                </div>
            )}

            <SubmitButton child={"Make Plea"} isLoading={isLoading} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Plead;
