import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Link } from "react-router-dom";
import {
  BadgeDollarSign,
  BoxIcon,
  EyeIcon,
  GavelIcon,
  InfoIcon,
  Timer,
} from "lucide-react";
import { cn, convertToReadableNumber } from "@/lib/utils";
import { Button } from "../ui/button";
import Countdown from "@/components/Countdown";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { auctionAssetFormSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomFormField from "../form/CustomFormField";
import CustomDateTimeField from "../form/CustomDateTimeField";
import { useState } from "react";
import CustomFormSelect from "../form/CustomFormSelect";

const GalleryCard = ({ id, avatar, date, type }: GalleryCardProps) => {
  const auctionFormSchema = auctionAssetFormSchema();
  const auctionForm = useForm<z.infer<typeof auctionFormSchema>>({
    resolver: zodResolver(auctionFormSchema),
  });

  const stakeFormSchema = auctionAssetFormSchema();
  const stakeForm = useForm<z.infer<typeof stakeFormSchema>>({
    resolver: zodResolver(stakeFormSchema),
  });

  const dateTime = new Date(date ?? "");

  const titleSwitch = (type: "auction" | "stake" | "collectible") => {
    switch (type) {
      case "auction":
        return "Put asset on auction";
        break;
      case "stake":
        return "Stake your asset";
        break;
      case "collectible":
        return "Make asset a collectible";
        break;
      default:
        break;
    }
  };

  const handleAuctionFormSubmit = () => {};
  const handleStakeFormSubmit = () => {};
  const handleCollectibleFormSubmit = () => {};

  const dialogFormat = (type: "auction" | "stake" | "collectible") => {
    const currentForm = type === "auction" ? auctionForm : stakeForm;
    const interests = [
      "0.5%",
      "1%",
      "2%",
      "3%",
      "5%",
      "10%",
      "12%",
      "15%",
      "20%",
      "25%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
      "60%",
      "70%",
    ];

    const timeDurations = [
      "15 mins",
      "30 mins",
      "1 hour",
      "2 hours",
      "2 hours",
      "5 hours",
      "7 hours",
      "10 hours",
      "12 hours",
      "12 hours",
      "15 hours",
      "1 day",
      "2 days",
      "2 days",
      "5 days",
      "7 days",
    ];

    return (
      <Dialog>
        <DialogTrigger className="p-1 hover:bg-primary hover:text-secondary">
          {type === "auction" ? (
            <GavelIcon />
          ) : type === "stake" ? (
            <BadgeDollarSign />
          ) : (
            <BoxIcon />
          )}
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto px-0 pb-0 bg-popover">
          <DialogHeader className="">
            <DialogTitle>{titleSwitch(type)}</DialogTitle>
          </DialogHeader>

          <CardFooter className="bg-accent border-t border-t-primary/20 py-3">
            <Form {...currentForm}>
              <form
                onSubmit={currentForm.handleSubmit(
                  type === "auction"
                    ? handleAuctionFormSubmit
                    : type === "stake"
                    ? handleStakeFormSubmit
                    : handleCollectibleFormSubmit
                )}
                className="flex flex-col gap-5 w-full"
              >
                {type === "stake" && (
                  <CustomFormSelect
                    control={stakeForm.control}
                    name="interest"
                    options={interests}
                    placeholder="Money you are willing to give back"
                  />
                )}

                {type !== "collectible" && (
                  <div className="flex w-full flex-1">
                    {/* <div className="text-sm mt-auto p-2 bg-purple text-popover">
                      RWA
                    </div> */}
                    <div className="flex-grow">
                      <CustomFormField
                        control={currentForm.control}
                        name={type === "auction" ? "minBid" : "minAmount"}
                        label={
                          type === "auction" ? "minimum bid" : "minimum amount"
                        }
                        placeholder="Input number here"
                        inputClassName="px-2 py-1.5 h-7 flex-grow"
                      />
                    </div>
                  </div>
                )}
                {type !== "collectible" && (
                  <CustomFormSelect
                    control={auctionForm.control}
                    name="duration"
                    label="duration"
                    options={timeDurations}
                    defaultValue={"15 mins"}
                  />
                )}

                {type === "auction" && (
                  <div className="flex flex-col">
                    <CustomFormSelect
                      control={auctionForm.control}
                      name="exhibition"
                      label="exhibition"
                      options={timeDurations}
                      defaultValue={"15 mins"}
                    />
                    <p className="text-xs text-primary/60">
                      Put your art on exhibition and announce NFT sale to users
                    </p>
                  </div>
                )}

                <Button
                  variant={
                    type === "auction"
                      ? "purple"
                      : type === "stake"
                      ? "gold"
                      : undefined
                  }
                >
                  Confirm
                </Button>
              </form>
            </Form>
          </CardFooter>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <Card>
      <CardContent className="p-0 relative">
        <CardHeader className="p-0">
          <img src={avatar} className="w-full h-[15rem] object-cover" alt="" />
        </CardHeader>
        <div className="absolute flex justify-between top-2 bottom-2 right-2 left-2">
          {type !== "gallery" && (
            <div className="flex flex-col h-full">
              <div
                className={cn("rounded-full drop-shadow-xl p-1 h-5 w-5", {
                  "bg-purple": type === "auction",
                  "bg-destructive": type === "stake",
                  "bg-green-500": type === "collectible",
                  "bg-gold": type === "exhibition",
                })}
              ></div>

              <Button
                className="mt-auto px-4  rounded-full bg-primary/60 font-bold text-[10px] text-gold hover:bg-primary/60 hover:text-gold"
                size={"icon"}
                variant="outline"
              >
                {convertToReadableNumber(29)}
              </Button>
            </div>
          )}

          <div className="flex flex-col ml-auto">
            <div className=" ml-auto right-2 rounded-sm flex flex-col bg-secondary h-fit overflow-hidden">
              {type === "gallery" ? (
                <>
                  {dialogFormat("auction")}
                  {dialogFormat("stake")}
                  {dialogFormat("collectible")}
                </>
              ) : (
                <Link
                  to="/"
                  className="p-1 hover:bg-primary hover:text-secondary"
                >
                  <EyeIcon />
                </Link>
              )}
              <Link to="" className="p-1 hover:bg-primary hover:text-secondary">
                <InfoIcon />
              </Link>
            </div>

            {type === "auction" ||
              (type === "exhibition" && (
                <time className="text-right font-montserrat mt-auto text-xs">
                  <Countdown startDateTime={dateTime} />
                </time>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
