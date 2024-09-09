import CustomFormField from "@/components/form/CustomFormField";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Topbar from "@/layouts/Topbar";
import { mintFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MintAsset = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const formSchema = mintFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const avatarRef = form.register("avatar");

  return (
    <main>
      <Topbar text="Mint Asset" />

      <Form {...form}>
        <form className="p-4 flex flex-col gap-4">
          <CustomFormField
            control={form.control}
            name="title"
            placeholder="Input text here"
            label="Title"
          />
          <CustomFormField
            control={form.control}
            name="medium"
            placeholder="eg. Oil on Canvas"
            label="medium"
          />
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
          <CustomFormField
            control={form.control}
            // name="avatar(art snapshot)"
            placeholder="Snapshot of art"
            label="avatar"
            fieldType="file"
            inputClassName="file:hidden"
            accepts="jpg"
            {...avatarRef}
          />

          <CustomFormField
            control={form.control}
            name="description"
            placeholder="Snapshot of art"
            label="description"
            inputType="textarea"
          />

          <p className="text-sm mx-auto">
            Once your asset is uploaded to the chain it cannot be undone.
          </p>

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
          <Button disabled={!isAccepted || isLoading} variant={"purple"} className="mt-10">
            {isLoading ? <Loader type="all" /> : "Mint"}
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default MintAsset;
