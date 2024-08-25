"use client";

import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { EditProfileSchema } from "./schemas/EditProfileSchema";
import { ChangeEvent, useRef, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { EditPFPSchema } from "./schemas/EditPFPSchema";
import useUpdateProfile from "@/hooks/api/profile/useUpdateProfile";
import useUpdatePFP from "@/hooks/api/profile/useUpdatePFP";

// id           Int           @id @default(autoincrement())
// username     String        @unique
// email        String        @unique
// password     String
// pfp          String
// referral     String        @unique
// role         Role
// provider     Provider
// isDeleted    Boolean       @default(false)
// createdAt    DateTime      @default(now())
// updatedAt    DateTime      @updatedAt
// events       Event[]
// vouchers     Voucher[]
// checkouts    Checkout[]
// userVouchers UserVoucher[]
// userRewards  UserReward[]
// point        Point?

const EditProfilePage = () => {
  const session = useSession();
  const {mutateAsync: updateProfile} = useUpdateProfile();
  const {mutateAsync: updatePFP} = useUpdatePFP();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: EditProfileSchema,
    onSubmit: async (values, { resetForm }) => {
      await updateProfile(values);
      resetForm();
    },
  });

  const pfpFormik = useFormik({
    initialValues: {
      pfp: null,
    },
    validationSchema: EditPFPSchema,
    onSubmit: async (values, { resetForm }) => {
      await updatePFP(values);
      resetForm();
    },
  });

  const [selectedImage, setSelectedImage] = useState<string>("");
  const pfpRef = useRef<HTMLInputElement>(null);

  const onChangePfp = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      pfpFormik.setFieldValue("pfp", files[0]);
      setSelectedImage(URL.createObjectURL(files[0]));
    }
  };

  const removeSelectedImage = () => {
    pfpFormik.setFieldValue("pfp", null);
    setSelectedImage("");
    if (pfpRef.current) {
      pfpRef.current.value = "";
    }
  };

  return (
    <div className="container mx-auto flex max-w-7xl items-center justify-center bg-grey1">
      <div className="m-4 flex w-[420px] justify-center rounded-3xl bg-[#cee0f7] p-4 shadow">
        <div className="w-96">
          <p className="mb-4 rounded-xl bg-blue3 p-1 text-center text-2xl font-semibold text-blue2">
            Edit Profile
          </p>

          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username" className="p-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formik.values.username}
              placeholder={session.data?.user.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="my-2 mb-4 w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-800"
            />
            {!!formik.touched.username && !!formik.errors.username ? (
              <p className="text-xs text-red-500">{formik.errors.username}</p>
            ) : null}
            <label htmlFor="email" className="p-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              placeholder={session.data?.user.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="my-2 w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-800"
            />
            {!!formik.touched.email && !!formik.errors.email ? (
              <p className="text-xs text-red-500">{formik.errors.email}</p>
            ) : null}
            <label htmlFor="password" className="p-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              placeholder={session.data?.user.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="my-2 w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-800"
            />
            {!!formik.touched.password && !!formik.errors.password ? (
              <p className="text-xs text-red-500">{formik.errors.password}</p>
            ) : null}
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-blue-300 p-1 text-center text-xl font-semibold"
            >
              Confirm Update
            </button>
          </form>
          <form onSubmit={pfpFormik.handleSubmit} className="mt-6">
            {selectedImage ? (
              <>
                <div className="relative h-[150px] w-[200px]">
                  <Image src={selectedImage} alt="Blog thumbnail" fill />
                </div>
                <button onClick={removeSelectedImage}>remove</button>
              </>
            ) : null}

            <Label className="p-1 text-base font-semibold">
              Profile Picture
            </Label>
            <Input
              ref={pfpRef}
              type="file"
              accept="image/*"
              onChange={onChangePfp}
              className="my-1"
            />
            <button
              type="submit"
              className="mt-1 w-40 rounded-xl bg-blue-300 text-center font-semibold"
            >
              Update Picture
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
