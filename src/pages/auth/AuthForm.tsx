import { GoogleIconSvg } from "@/assets/images";
import { StakeArtFullLogo } from "@/assets/logo";
import CustomFormField from "@/components/form/CustomFormField";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAppContext } from "@/context/AppContext";
import { authSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckedState } from "@radix-ui/react-checkbox";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const AuthForm = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState<CheckedState>(false);

  const { setIsAuth } = useAppContext();

  const formSchema = authSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const formType = pathname.includes("in") ? "sign in" : "sign up";
  const navigate = useNavigate();

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const { email, password } = data;

    setIsLoading(true);
    setTimeout(() => {
      setIsAuth(formType === "sign in" ? true : false);
      setIsLoading(false);
      toast.success("Authentication successful!");
      navigate(formType === "sign up" ? "/auth/otp-verification" : "/", {
        state: { email: email, verifyType: "auth" },
      });
    }, 2000);
  };

  return (
    <section className="w-full flex flex-col">
      <div className="w-full marker:flex flex-col gap-4">
        <div className="w-full flex flex-col gap-px py-4">
          <img src={StakeArtFullLogo} className="w-[10em]" alt="" />
          <h3 className="mt-5 text-lg font-bold">Welcome to STAKEART</h3>
          <p className="text-sm font-montserrat">
            Please Fill in the details below.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full">
        <Button
          type="button"
          onClick={() => navigate(-1)}
          variant={"outline"}
          className="mr-auto"
        >
          <ArrowLeft size={16} /> Back
        </Button>
        <Button asChild className="px-20 py-6">
          <Link to={""} className="flex gap-3 tex-lg">
            <img src={GoogleIconSvg} alt="google" />
            <span className="first-letter:uppercase">
              {formType} with google
            </span>
          </Link>
        </Button>

        <div className="w-full flex items-center justify-center text-primary/50 gap-1.5 *:flex-1">
          <Separator />
          or
          <Separator />
        </div>

        <Form {...form}>
          <form
            className="flex flex-col gap-4 pb-5"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <CustomFormField
              control={form.control}
              name="email"
              label="Email address"
              placeholder="eg. johndoe@example.com"
            />
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Input your password"
            />

            <div className="flex flex-col gap-3 mt-1 sm:mt-8">
              <div className="flex justify-between first-of-type:text-xs">
                <Link to="/auth/forgot-password">
                  {formType === "sign in" && "Forgot Password?"}
                </Link>
                <Link
                  to={`/auth/${formType === "sign in" ? "sign-up" : "sign-in"}`}
                  className="text-purple underline text-sm"
                >
                  {formType === "sign in" ? "Sign up" : "Sign in"}
                </Link>
              </div>

              {formType === "sign up" && (
                <div className="flex gap-1 items-center">
                  <Checkbox
                    id="accept"
                    checked={isAccepted}
                    onCheckedChange={(checked) => setIsAccepted(checked)}
                  />
                  <div className="inline-flex gap-1.5">
                    <Label htmlFor="accept" className="text-xs sm:text-sm">
                      Do you accept all our
                    </Label>
                    <Link
                      to="/t&c"
                      className="text-xs sm:text-sm underline text-purple"
                    >
                      Terms and conditions?
                    </Link>
                  </div>
                </div>
              )}

              <div className="flex w-full">
                <Button
                  disabled={
                    (formType === "sign up" && !isAccepted) || isLoading
                  }
                  className="sm:ml-auto basis-full sm:basis-[30%] capitalize"
                  // onClick={form.}
                  type="submit"
                >
                  {isLoading ? <Loader type="all" /> : formType}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AuthForm;
