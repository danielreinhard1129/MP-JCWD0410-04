import { cn } from "@/lib/utils";

import React from 'react';

const DashboardCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-40 w-72 rounded-lg border-[2px] border-grey2 p-1 bg-blue2",
      className
    )}
    {...props}
  />
));
DashboardCard.displayName = "DashboardCard";

const DashboardCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-12 items-center border-b-2 pl-1", className)}
    {...props}
  />
));
DashboardCardContent.displayName = "dashboardCardContent";

export { DashboardCard, DashboardCardContent };

