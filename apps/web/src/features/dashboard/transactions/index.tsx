"use client";

import useGetPaymentDashboard from "@/hooks/api/dashboard/useGetPaymentDashboard";
import useUpdateStatusPayment from "@/hooks/api/dashboard/useUpdateStatusPayment";
import { Payment_Status } from "@/types/payment";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

const DashboardEventTransactionsPage = () => {
  const sessions = useSession();
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading } = useGetPaymentDashboard(id);
  const {mutateAsync} = useUpdateStatusPayment();

  if (isLoading) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data || data.length === 0) {
    return <p className="text-center">No Payment Found</p>;
  }

  data[0].event.userId !== sessions.data?.user.id ? (
    <p className="text-center">Permission denied</p>
  ) : null;

  const formatToRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  interface UpdateValues {
    status: string;
    id: number;
  }
  const handleButton = (values:UpdateValues) => {
    mutateAsync(values)
  };

  return (
    <div>
      <div className="rounded-lg bg-white p-2 shadow-md">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="border px-2 py-2">User</th>
              <th className="border px-2 py-2">Qty</th>
              <th className="border px-2 py-2">Total</th>
              <th className="border px-2 py-2">Proof</th>
              <th className="border px-2 py-2">Status</th>
              <th className="border px-2 py-2">Date</th>
              <th className="border px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((payment) => (
              <tr key={payment.id} className="py-2 text-center">
                <td className="border py-2">{payment.user.username}</td>
                <td className="border py-2">{payment.qty}</td>
                <td className="border py-2">{formatToRupiah(payment.total)}</td>
                <td className="border py-2">
                  {payment.paymentProof ? (
                    <div className="flex justify-center">
                      <img
                        src={payment.paymentProof}
                        alt="Bukti bayar"
                        className="h-12 w-12 object-cover"
                      />
                    </div>
                  ) : (
                    "Pending"
                  )}
                </td>
                <td className="border py-2 text-sm">
                  {payment.status.toLowerCase()}
                </td>
                <td className="border py-2">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </td>
                {payment.status === "WAITING_FOR_ADMIN_CONFIRMATION" ? (
                  <td className="border py-2">
                    <div className="flex justify-evenly gap-1">
                      <button className="rounded-md bg-green-500 p-1" onClick={() => handleButton({id: payment.id, status: "DONE"})}>
                        ACCEPT
                      </button>
                      <button className="rounded-md bg-red-500 p-1" onClick={() => handleButton({id: payment.id, status: "REJECTED"})}>
                        REJECT
                      </button>
                    </div>
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))}
            {/* {isPending && (
              <tr>
              <td colSpan={9} className="text-center p-4">
              Loading...
              </td>
              </tr>
              )}
              {!isPending && data?.data?.map(event => (
                <tr key={event.id}>
                <td className="border px-4 py-2">{event.category?.title || "No Category"}</td>
                <td className="border px-4 py-2">{event.name}</td>
                <td className="border px-4 py-2">
                <img src={event.thumbnail} alt={event.name} className="w-12 h-12 object-cover" />
                </td>
                <td className="border px-4 py-2">{new Date(event.startDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{new Date(event.endDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{formatToRupiah(event.price)}</td>
                <td className="border px-4 py-2">{event.discount}%</td>
                <td className="border px-4 py-2">{event.quota}</td>
                </tr>
                ))}
                {!isPending && data?.data?.length === 0 && (
                  <tr>
                  <td colSpan={9} className="text-center p-4">
                  No events found.
                  </td>
                  </tr>
                  )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardEventTransactionsPage;
