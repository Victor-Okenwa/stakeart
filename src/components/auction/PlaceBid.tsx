import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { bidFormSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomFormField from "../form/CustomFormField";
import { toast } from "sonner";
import { useState } from "react";
import SubmitButton from "../form/SubmitButton";
import { Separator } from "../ui/separator";

const PlaceBid = ({ minBid, topBid, userBid }: PlaceBidProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = bidFormSchema(minBid);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Bid has been placed");
    }, 1000);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="purple" className="text-lg" size="lg">
          Place Bid
        </Button>
      </DialogTrigger>
      <DialogContent className="px-2 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Place Your Bid</DialogTitle>
        </DialogHeader>
        <Separator />

        <div className="flex flex-col gap-2">
          <div className="flex gap-1 justify-center">
            <b>Top Bid:</b>
            <span className="text-purple">{topBid}</span>
          </div>
          <div className="flex gap-1 justify-center">
            <b>Minimum Bid:</b>
            <span className="text-purple">{minBid}</span>
          </div>

          {userBid && (
            <div className="flex gap-1 justify-center">
              <b>Your Bid:</b>
              <span className="text-purple">{userBid}</span>
            </div>
          )}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-5"
            >
              <CustomFormField
                control={form.control}
                name="bidAmount"
                placeholder="Place a bid more than the minimum bid"
                defaultValue={userBid ?? topBid ?? minBid}
                inputClassName="text-center text-lg"
                fieldType="number"
              />

              <SubmitButton
                child="Place Bid"
                isLoading={isLoading}
                variant={"purple"}
              />
              <Button variant={"destructive"}>Retreat from auction</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlaceBid;
