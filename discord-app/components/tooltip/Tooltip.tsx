import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

interface DSTooltipProps {
  label?: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

const DSTooltip = ({ label, children, side, align }: DSTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className=" font-semibold text-sm capitalize"
          side={side}
          align={align}>
          {label && <p>{label.toLowerCase()}</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DSTooltip;
