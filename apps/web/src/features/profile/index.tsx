"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const session = useSession();
  return (
    <div className="container mx-auto flex max-w-7xl items-center justify-center bg-grey1">
      <div className="m-4 w-[480px] rounded-3xl bg-[#cee0f7] p-4 shadow">
        <p className="mb-2 rounded-xl bg-blue3 p-1 text-center text-2xl font-semibold text-blue2">
          Profile
        </p>
        <div className="flex justify-between">
          <div className="w-48">
            <img
              src={session.data?.user.pfp}
              alt="Profile Picture"
              className="max-h-48 w-48 object-cover rounded-xl"
            />
            <p className="mt-2 rounded-xl bg-blue-300 p-1 text-center font-semibold">
              {session.data?.user.role}
            </p>
          </div>
          <div className="w-56">
            <p>Username</p>
            <p className="mb-3 rounded-xl bg-blue-300 p-1 text-center font-semibold">
              {session.data?.user.username}
            </p>
            <p>E-mail</p>
            <p className="mb-3 rounded-xl bg-blue-300 p-1 text-center font-semibold">
              {session.data?.user.email}
            </p>
            {session.data?.user.role === "CUSTOMER" ? (
              <div>
                <p>Referral Code</p>
                <p className="mb-3 rounded-xl bg-blue-300 p-1 text-center font-semibold">
                  {session.data?.user.referral}
                </p>
              </div>
            ) : (
              <div>
                <p>Go to dashboard</p>
                <Link href={"/dashboard"}>
                  <p className="mb-3 rounded-xl bg-blue-300 p-1 text-center font-semibold">
                    DASHBOARD
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <Link href={"/profile/edit"}>
          <p className="mt-4 rounded-xl bg-blue-300 p-1 text-center text-xl font-semibold">
            Edit your profile
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
