import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { FaCircleQuestion } from "react-icons/fa6";

const TooltipInfo = ({ trigger, content }: TooltipInfoProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{trigger ?? <FaCircleQuestion />}</TooltipTrigger>
        <TooltipContent className="max-w-[85vw]">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipInfo;
