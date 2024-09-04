"use client";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/UI/ScrollToTop";
import Loading from "@/components/UI/Loading";
import { usePathname } from "next/navigation";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  if (pathname === "/admin") {
    return <>{children}</>;
  } else {
    return (
      <>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <Loading />
      </>
    );
  }
}
