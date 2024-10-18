import type { Metadata } from "next";
import "./globals.css";
import PageWrapper from "./page-wrapper";

export const metadata: Metadata = {
  title: "Eileen Jonah",
  description:
    "This project enables users to easily search for and access residential real estate listings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
