import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
//styles
import "../styles/config.css";
//compents
import { AppData } from "@/context";
import AdminLayout from "./AdminLayout";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "SPIT",
  description: "CLB Hỗ trợ lập trình SPIT",
  icons: ["./logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <AppData>
          <AdminLayout>{children}</AdminLayout>
        </AppData>
      </body>
    </html>
  );
}
