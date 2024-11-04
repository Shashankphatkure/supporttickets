import { Inter } from "next/font/google";
import AdminSidebar from "../components/admin/AdminSidebar";
import Logo from "../components/Logo";
import { AdminProvider } from "../contexts/AdminContext";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#4a0404] to-[#2d0202]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="border-b border-[#e5d3b3]/10 bg-[#1c2516]/90">
          <div className="px-6 py-4">
            <Logo size="small" />
          </div>
        </header>
        <AdminProvider>
          <main className="flex-1 p-6">{children}</main>
        </AdminProvider>
      </div>
    </div>
  );
}
