export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  pfp: string;
  role: Role;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

enum Role {
  EO = "EO",
  CUSTOMER = "CUSTOMER",
}

enum Provider {
  CREDENTIALS = "CREDENTIALS",
  GOOGLE = "GOOGLE",
}
