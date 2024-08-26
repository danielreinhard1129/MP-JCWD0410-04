// id            Int      @id @default(autoincrement())
// title         String
// desc          String   @db.LongText
// img           String
// price         Int
// quota         Int
// availableSeat Int
// location      String
// startDate     DateTime
// endDate       DateTime
// userId        Int
// categoryId    Int
// isDeleted     Boolean  @default(false)
// createdAt     DateTime @default(now())
// updatedAt     DateTime @updatedAt

// user      User       @relation(fields: [userId], references: [id])
// category  Category   @relation(fields: [categoryId], references: [id])


export interface Event {
id: number;
title: string;
desc: string;
price: number;
quota: number;
img: string;
availableSeat: number;
location: string;
startDate: string;
endDate: string;
userId: number;
categoryId: number
isDeleted: boolean;   
}