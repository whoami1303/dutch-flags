import "./globals.css";
import type { Metadata } from "next";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto my-5 bg-neutral-300">
        <div className="bg-white min-h-screen px-8 py-8">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
