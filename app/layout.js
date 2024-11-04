import { Inter } from "next/font/google";
import { UserProvider } from "./contexts/UserContext";
import Navigation from "./components/Navigation";
import MobileNavigation from "./components/MobileNavigation";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chateaux de Paris HOA",
  description: "Homeowner's Association Management Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <div className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202] flex flex-col">
            <header className="border-b border-[#e5d3b3]/10 sticky top-0 bg-[#4a0404]/95 backdrop-blur-sm z-10">
              <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                  <Logo />
                  <Navigation />
                </div>
              </div>
            </header>
            <div className="flex-1 pb-16 md:pb-0">{children}</div>
            <Footer />
            <MobileNavigation />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
