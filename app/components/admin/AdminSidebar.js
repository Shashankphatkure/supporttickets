"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiTicket,
  FiUsers,
  FiSettings,
  FiPieChart,
  FiMessageSquare,
  FiAlertCircle,
} from "react-icons/fi";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: FiHome, label: "Dashboard", href: "/admin" },
    { icon: FiTicket, label: "Tickets", href: "/admin/tickets" },
    { icon: FiUsers, label: "Users", href: "/admin/users" },
    {
      icon: FiMessageSquare,
      label: "Announcements",
      href: "/admin/announcements",
    },
    { icon: FiPieChart, label: "Reports", href: "/admin/reports" },
    { icon: FiSettings, label: "Settings", href: "/admin/settings" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <aside className="w-64 bg-[#1c2516]/90 border-r border-[#e5d3b3]/10">
      <div className="p-4">
        <div className="px-4 py-3 bg-red-500/10 rounded-lg border border-red-500/20">
          <div className="flex items-center gap-2 text-red-200">
            <FiAlertCircle />
            <span className="text-sm font-medium">5 Urgent Tickets</span>
          </div>
        </div>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm
                ${
                  isActive(item.href)
                    ? "bg-[#e5d3b3]/10 text-[#e5d3b3] border-r-2 border-[#e5d3b3]"
                    : "text-[#e5d3b3]/70 hover:bg-[#e5d3b3]/5"
                }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
