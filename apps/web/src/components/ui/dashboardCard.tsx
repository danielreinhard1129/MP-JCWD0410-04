import { cn } from "@/lib/utils";

import React from "react";

const DashboardCardBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-40 w-72 rounded-lg bg-white p-1 shadow-md", className)}
    {...props}
  />
));
DashboardCardBackground.displayName = "dashboardCardBackground";

const DashboardCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-12 items-center border-b-2 border-gray-300 pl-1",
      className,
    )}
    {...props}
  />
));
DashboardCardHeader.displayName = "dashboardCardHeader";

const DashboardCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)}>
    <DashboardCardBackground>
      <DashboardCardHeader {...props}></DashboardCardHeader>
    </DashboardCardBackground>
  </div>
));
DashboardCard.displayName = "dashboardCard";

export { DashboardCardBackground, DashboardCardHeader, DashboardCard };
