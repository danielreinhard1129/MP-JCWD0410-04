import { cn } from "@/lib/utils";
import Link from "next/link";

import React from "react";

const AuthFormBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "container mx-auto flex min-h-screen max-w-full items-center justify-center bg-grey1",
      className,
    )}
    {...props}
  />
));
AuthFormBackground.displayName = "AuthFormBackground";

const AuthFormContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-96 rounded-3xl bg-white p-4 text-black1 shadow sm:p-8",
      className,
    )}
    {...props}
  >
  </div>
));
AuthFormContainer.displayName = "AuthFormContainer";

const AuthForm = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)}>
    <AuthFormBackground>
      <AuthFormContainer {...props}></AuthFormContainer>
    </AuthFormBackground>
  </div>
));
AuthForm.displayName = "AuthForm";

export { AuthFormBackground, AuthFormContainer, AuthForm };
