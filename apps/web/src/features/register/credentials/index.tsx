"use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { RegisterSchema } from "./schemas/RegisterSchema";
import useRegister from "@/hooks/api/auth/useRegister";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthForm } from "@/components/ui/authForm";
// import Link from "next/link";

const RegisterCredentialsPage = () => {
  const { mutateAsync: register, isPending: isLoading } = useRegister();
  const pathname = usePathname();

  const role = pathname === "/register/creator" ? "EO" : "CUSTOMER";

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      referral: "",
      role,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      await register(values);
      resetForm();
    },
  });

  console.log(formik.errors);

  return (
    // <main className="flex justify-center pt-20">
    //   <Card className="w-[350px]">
    //   <CardHeader>
    //     <CardTitle>Sign Up</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <form onSubmit={formik.handleSubmit}>
    //       <div className="grid w-full items-center gap-4">
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="name">Name</Label>
    //           <Input name="name" type="text" placeholder="Your Name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    //           {!!formik.touched.name && !!formik.errors.name ? (<p className="text-xs text-red-500">{formik.errors.name}</p>) : null}
    //         </div>
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="email">Email</Label>
    //           <Input name="email" type="email" placeholder="Your Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    //           {!!formik.touched.email && !!formik.errors.email ? (<p className="text-xs text-red-500">{formik.errors.email}</p>) : null}
    //         </div>
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="password">Password</Label>
    //           <Input name="password" type="password" placeholder="Your Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    //           {!!formik.touched.password && !!formik.errors.password ? (<p className="text-xs text-red-500">{formik.errors.password}</p>) : null}
    //         </div>
    //       </div>
    //       <Button className="mt-6 w-full" disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</Button>
    //       <Link href={"/login"}><p className="text-xs mt-2">Already have an account? Login here</p></Link>
    //     </form>
    //   </CardContent>
    // </Card>
    // </main>
    <main>
      <AuthForm>
        <Link
          href="/"
          className="hover:text-orange1 text-sm font-bold text-black1"
        >
          <img src="/tixLogo300.png" className="mx-auto w-40" />
        </Link>
        <p className="my-4 text-center text-sm dark:text-gray-600">
          Already have an account?
          <Link
            href="/login"
            rel="noopener noreferrer"
            className="hover:underline focus:underline"
          >
            Sign in here
          </Link>
        </p>
        <p className="my-4 rounded-xl border bg-blue3 p-1 text-center text-xl text-blue2">
          {pathname === "/register/creator"
            ? "Event Organizer Form"
            : "Registering as Customer"}
        </p>
        <form className="space-y-8" onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
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
                className="w-full rounded-md border px-3 py-2 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {!!formik.touched.email && !!formik.errors.email ? (
                <p className="text-xs text-red-500">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formik.values.username}
                placeholder="LeroyJenkins"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border px-3 py-2 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {!!formik.touched.username && !!formik.errors.username ? (
                <p className="text-xs text-red-500">{formik.errors.username}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                placeholder="******"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border px-3 py-2 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {!!formik.touched.password && !!formik.errors.password ? (
                <p className="text-xs text-red-500">{formik.errors.password}</p>
              ) : null}
            </div>
            {pathname === "/register/creator" ? null : (
              <div className="space-y-2">
                <label htmlFor="referral" className="block text-sm">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  name="referral"
                  id="referral"
                  value={formik.values.referral}
                  placeholder="L3r0yJ"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-md border px-3 py-2 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-blue1 px-8 py-3 font-semibold text-white hover:bg-blue3"
          >
            Register
          </button>
        </form>
      </AuthForm>
    </main>
  );
};

export default RegisterCredentialsPage;
