import CustomFormField from "@/components/form/CustomFormField";
import CustomFormSelect from "@/components/form/CustomFormSelect";
import SubmitButton from "@/components/form/SubmitButton";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import Topbar from "@/layouts/Topbar";
import { mintFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const MintAsset = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const formSchema = mintFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [artCategory, setArtCategory] = useState("art");

  const avatarRef = form.register("avatar");

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const {
      avatar,
      category,
      country,
      netWeight,
      owner,
      title,
      description,
      dimension,
      medium,
    } = data;
    console.log({
      avatar,
      category,
      country,
      netWeight,
      owner,
      title,
      description,
      dimension,
      medium,
    });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("New asset added to gallery");
    }, 2000);
  };

  return (
    <main>
      <Topbar text="Mint Asset" />

      <Form {...form}>
        <form
          className="p-4 flex flex-col gap-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <CustomFormField
            control={form.control}
            name="title"
            placeholder="Input text here"
            label="Title"
          />

          <CustomFormSelect
            control={form.control}
            name="category"
            placeholder="Select asset category"
            options={["art", "craft", "photography"]}
            // defaultValue={"art"}
            setValue={setArtCategory}
          />

          {artCategory === "art" ? (
            <CustomFormField
              control={form.control}
              name="medium"
              placeholder="eg. Oil on Canvas"
              label="medium"
            />
          ) : (
            ""
          )}

          <CustomFormField
            control={form.control}
            name="dimension"
            placeholder="eg. 45 x 45 inches"
            label="dimension"
          />
          <CustomFormField
            control={form.control}
            name="netWeight"
            placeholder="eg. 5 pounds"
            label="net weight"
          />
          <CustomFormField
            control={form.control}
            name="country"
            placeholder="Input the art location"
            label="country"
          />

          <FormField
            control={form.control}
            name="avatar"
            render={() => (
              <FormItem>
                <div className="flex flex-col bg-popover ring-1 shadow-md ring-secondary rounded-lg py-2 px-3 gap-2 focus-within:ring-destructive focus-within:bg-primary-foreground">
                  <FormLabel className="text-xs text-destructive">
                    Upload
                  </FormLabel>

                  <FormControl className="p-0 bg-transparent border-none outline-none focus-visible:ring-0">
                    <Input
                      type="file"
                      className="file:hidden"
                      placeholder="Select a JPG File to Upload"
                      accept="image/jpg"
                      {...avatarRef}
                    />
                  </FormControl>
                </div>
                <FormMessage className="form-message" />
              </FormItem>
            )}
          />

          <CustomFormField
            control={form.control}
            name="description"
            placeholder="Describe your art"
            label="description"
            inputType="textarea"
          />

          {/* <p className="text-sm mx-auto">
            Once your asset is uploaded to the chain it cannot be undone.
          </p> */}

          <div className="flex gap-2 text-sm items-center">
            <input
              id="accepted"
              type="checkbox"
              checked={isAccepted}
              onChange={() => setIsAccepted(!isAccepted)}
              className="cursor-pointer size-5 accent-gold"
            />
            <label htmlFor="accepted">Accept terms and conditions</label>
          </div>
{/* <Button type="submit"></Button> */}
          <SubmitButton
            variant={"purple"}
            isLoading={isLoading}
            child={"Mint new asset"}
          />
        </form>
      </Form>
    </main>
  );
};

export default MintAsset;
