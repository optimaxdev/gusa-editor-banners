import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./competents/navbar/navbar";
import "./styles/main.scss";
import variables from "./styles/variables.module.scss";
const roboto = Roboto({
  weight: ["400", "300", "500"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
