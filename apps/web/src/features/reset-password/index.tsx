'use client'

import { AuthForm } from "@/components/ui/authForm";
import useResetPassword from "@/hooks/api/auth/useResetPassword";
import { useFormik } from "formik";
import Link from "next/link";
import { FC } from "react";
import { ResetSchema } from "./schemas/ResetSchema";

interface ResetPasswordPageProps {
  token: string,
}

const ResetPasswordPage: FC<ResetPasswordPageProps> = ({token}) => {
  const { mutateAsync, isPending: isLoading } = useResetPassword();

  const formik = useFormik({
    initialValues: {
      password: "",
      token,
    },
    validationSchema: ResetSchema,
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
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <div className="mt-8">
            <label htmlFor="password" className="block font-semibold mb-1 text-center">
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              placeholder="******"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full rounded-md border px-3 py-2 border-gray-300 bg-gray-50 text-gray-800"
            />
            {!!formik.touched.password && !!formik.errors.password ? (
              <p className="text-xs text-red-500">{formik.errors.password}</p>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          className="w-full my-2 mt-4 rounded-xl border bg-blue3 p-1 text-center text-xl font-semibold text-blue2"
        >
          Reset your password
        </button>
      </form>
    </AuthForm>
  );
};

export default ResetPasswordPage;
