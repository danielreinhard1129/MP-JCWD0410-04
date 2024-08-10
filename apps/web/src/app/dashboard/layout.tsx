import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </section>
  );
}
