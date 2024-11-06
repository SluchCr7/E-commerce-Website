import { Inter } from "next/font/google";
import { Prata } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import ShopContextProvider from "./Context/ShopContext";
import Footer from "./Components/Footer";
import Layout from "./Components/Layout";

const inter = Inter({ subsets: ["latin"] });
const pt = Prata({ subsets: ["latin"] , weight: "400" });
export const metadata = {
  title: "Sluch.",
  description: "Sluch. The Best Online Store to Shop New Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pt.className} bg-ModeOne-primary dark:bg-ModeTwo-primary `}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
