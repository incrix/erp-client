import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#0080FF",
};

export const metadata = {
  title: "Slipze ERP",
  description: "Streamline Your Business, Simplify Success: ERP Made Easy",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "incrix",
    "Slipze",
    "invoice",
    "invoicing",
    "erp",
    "billing",
    "incrixerp",
    "erp software",
    "free erp",
  ],
  authors: [
    { name: "Incrix Techlutions LLP", url: "https://www.incrix.com" },
    {
      name: "Incrix Techlutions LLP",
      url: "https://www.linkedin.com/company/incrix/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icon-192x192.png" },
    { rel: "icon", url: "favicon.ico" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </body>
    </html>
  );
}
