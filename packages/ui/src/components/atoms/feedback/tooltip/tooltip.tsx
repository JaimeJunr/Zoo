/**
 * Tooltip Component - Flowtomic UI
 *
 * Componente Tooltip baseado em Radix UI
 */

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import { cn } from "@/lib/utils";

export type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;
export type TooltipTriggerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>;
export type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;

/**
 * TooltipProvider - Provider do tooltip
 */
const TooltipProvider = TooltipPrimitive.Provider;
TooltipProvider.displayName = "TooltipProvider";

/**
 * Tooltip - Container principal do tooltip
 */
const Tooltip = TooltipPrimitive.Root;
Tooltip.displayName = "Tooltip";

/**
 * TooltipTrigger - Trigger do tooltip
 */
const TooltipTrigger = TooltipPrimitive.Trigger;
TooltipTrigger.displayName = "TooltipTrigger";

/**
 * TooltipPortal - Portal do tooltip
 */
const TooltipPortal = TooltipPrimitive.Portal;
TooltipPortal.displayName = "TooltipPortal";

/**
 * TooltipContent - Conteúdo do tooltip
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipPortal };
