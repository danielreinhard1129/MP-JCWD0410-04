'use client'

import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

const DashboardTransactionsPage = () => {
  const sessions = useSession();
  const params = useParams();
  const id = params.id as string;

  // const { data, isPending } = useGetEventDetail(id);

  // if (isPending) {
  //   return <Loader2 className="mx-auto animate-spin" />;
  // }

  // if (!data) {
  //   return <p className="text-center">Event not found</p>;
  // }

  // data.user.username !== sessions.data?.user.username ? (
  //   <p className="text-center">Permission denied</p>
  // ) : null;

  return (
    <div>DashboardTransactionsPage</div>
  )
}

export default DashboardTransactionsPage