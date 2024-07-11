import { Roboto } from "next/font/google";
import "./styles/main.scss";
import "./competents/layout/layout.scss";
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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
