'use client'

import { AuthForm } from "@/components/ui/authForm";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { ForgotPasswordSchema } from "./schemas/ForgotPasswordSchema";
import useForgotPassword from "@/hooks/api/auth/useForgotPassword";

const ForgotPasswordPage = () => {
  const { mutateAsync, isPending: isLoading } = useForgotPassword();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      await mutateAsync(values);
      resetForm();
    },
  });
  return (
    <AuthForm>
      <Link
        href="/"
        className="hover:text-orange1 text-sm font-bold text-black1"
      >
        <img src="/tixLogo300.png" className="mx-auto w-40" />
      </Link>
      <p className="my-2 mt-4 rounded-xl border bg-blue3 p-1 text-center text-xl font-semibold text-blue2">
        Trouble logging in?
      </p>
      <p className="text-sm text-gray-600 text-center p-1">
        Enter your email and we'll send you a link to get back into your
        account.
      </p>
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <div className="mt-8">
            <label htmlFor="email" className="block font-semibold mb-1 text-center">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              placeholder="leroy@jenkins.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full rounded-md border px-3 py-2 border-gray-300 bg-gray-50 text-gray-800"
            />
            {!!formik.touched.email && !!formik.errors.email ? (
              <p className="text-xs text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-blue1 px-8 py-3 font-semibold text-white hover:bg-blue3"
        >
          Send reset password request
        </button>
      </form>
      <div className="my-8 flex w-full items-center">
        <hr className="w-full dark:text-gray-600" />
        <p className="px-3 dark:text-gray-600">OR</p>
        <hr className="w-full dark:text-gray-600" />
      </div>
      <div className="my-4 text-center">
        <Link
          href={"/login"}
          className="flex h-10 w-full items-center justify-center space-x-4 rounded-full border bg-grey1 p-4 font-bold hover:bg-grey2 focus:ring-2 focus:ring-offset-1"
        >
          Sign in to an account
        </Link>
      </div>
    </AuthForm>
  );
};

export default ForgotPasswordPage;
