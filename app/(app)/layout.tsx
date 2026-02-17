import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden">{children}</main>
      <SiteFooter />
    </>
  );
}
