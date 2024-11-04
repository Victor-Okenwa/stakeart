import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { onlyOTPFormSchema } from "@/lib/schemas";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import Loader from "@/components/Loader";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { z } from "zod";
import { useAppContext } from "@/context/AppContext";
import { toast } from "sonner";

const OtpVerification = () => {
  const MAXLENGTH = 5;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { setIsAuth } = useAppContext();

  const {
    state: { type: verifyType, email },
  } = useLocation();

  const formSchema = onlyOTPFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleOtpLastInput = (value: string) => {
    if (value.length === MAXLENGTH) setIsFilled(true);
    else setIsFilled(false);
  };

  const handleSubmit = ({ otp }: { otp: string }) => {
    console.log(otp);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Verification successful');
      if (verifyType === "forgot") {
        navigate("/auth/forgot-password/new-password");
      } else {
        setIsAuth(true);
        navigate("/");
      }
    }, 2000);
  };
  return (
    <Card>
      <CardContent className="p-5 sm:p-7">
        <CardHeader className="items-start gap-5 p-0 mb-5">
          <Button variant={"outline"} className="" onClick={() => navigate(-1)}>
            <ArrowLeftIcon size={20} /> Back
          </Button>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl font-bold">
              Email verification
            </h3>
            <p className="text-sm sm:text-base">
              An OTP code has been sent to your email {email}
            </p>
          </div>
        </CardHeader>
        <CardFooter className="p-0 w-full flex-col gap-3 justify-start">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full flex flex-col gap-3 justify-start"
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormControl {...field} autoFocus>
                      <InputOTP
                        maxLength={MAXLENGTH}
                        onChange={(value) => handleOtpLastInput(value)}
                        pattern={REGEXP_ONLY_DIGITS}
                        className="flex justify-center w-full"
                        containerClassName="w-full"
                      >
                        <InputOTPGroup
                          className="w-full flex gap-3 justify-between *:rounded-xl *:sm:size-12 *:size-10"
                          // onChange={(value) => handleOtpLastInput(value)}
                        >
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-1 w-full text-sm">
                Didn't receive any code?{" "}
                <Button
                  variant="transparent"
                  size="no-pad"
                  className="text-purple"
                  type="button"
                >
                  Resend
                </Button>
              </div>

              <Button disabled={!isFilled || isLoading} className="w-full mt-3">
                {isLoading ? <Loader type="all" /> : "Verify"}
              </Button>
            </form>
          </Form>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default OtpVerification;
