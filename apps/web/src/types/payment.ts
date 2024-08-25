export interface Payment {
  id: number;
  total: number;
  qty: number;
  status: Payment_Status;
  ponumberUsed: number;
  voucherUsed: number;
  rewardUsed: number;
  paymentProof: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  eventId: number;
}

enum Payment_Status {
  WAIITNG_FOR_PAYMENT = "WAIITNG_FOR_PAYMENT",
  WAITING_FOR_ADMIN_CONFIRMATION = "WAITING_FOR_ADMIN_CONFIRMATION",
  DONE = "DONE",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
  CANCELED = "CANCELED",
}
