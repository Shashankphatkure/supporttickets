import { Inter } from "next/font/google";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import { AdminProvider } from "../contexts/AdminContext";
import { UserProvider } from "../contexts/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <UserProvider>
      <AdminProvider>
        <div className="min-h-screen flex bg-gradient-to-b from-[#4a0404] to-[#2d0202]">
          <AdminSidebar />
          <div className="flex-1 flex flex-col">
            <AdminHeader />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </AdminProvider>
    </UserProvider>
  );
}
