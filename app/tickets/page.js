"use client";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "../contexts/UserContext";
import TicketCard from "../components/TicketCard";

// Enhanced dummy data
const dummyTickets = [
  {
    id: 1,
    title: "Leaking Faucet in Master Bathroom",
    category: "Maintenance",
    status: "open",
    priority: "normal",
    description:
      "The faucet has been leaking consistently for the past two days. Water is dripping even when the handle is fully closed.",
    createdAt: "2024-03-15T10:30:00Z",
    lastUpdated: "2024-03-15T14:30:00Z",
    updates: 2,
  },
  {
    id: 2,
    title: "Noise Complaint - Unit 304",
    category: "Noise Complaint",
    status: "in-progress",
    priority: "high",
    description:
      "Excessive noise from the unit above during quiet hours (after 10 PM). This has been ongoing for the past week.",
    createdAt: "2024-03-14T08:15:00Z",
    lastUpdated: "2024-03-15T09:00:00Z",
    updates: 3,
  },
  // Add more dummy tickets as needed
];

export default function Tickets() {
  const { user } = useUser();
  const [filters, setFilters] = useState({
    status: "all",
    category: "all",
    priority: "all",
    search: "",
  });

  const categories = [
    "Maintenance",
    "Noise Complaint",
    "Common Areas",
    "Safety",
    "Parking",
    "Other",
  ];
  const priorities = ["low", "normal", "high", "urgent"];

  const filteredTickets = dummyTickets.filter((ticket) => {
    if (filters.status !== "all" && ticket.status !== filters.status)
      return false;
    if (filters.category !== "all" && ticket.category !== filters.category)
      return false;
    if (filters.priority !== "all" && ticket.priority !== filters.priority)
      return false;
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        ticket.title.toLowerCase().includes(searchTerm) ||
        ticket.description.toLowerCase().includes(searchTerm)
      );
    }
    return true;
  });

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-[#1c2516]/40 rounded-xl border border-[#e5d3b3]/10 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-serif text-[#e5d3b3]">My Tickets</h1>
            <Link href="/tickets/new" className="btn-primary">
              New Ticket
            </Link>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                focus:outline-none focus:border-[#e5d3b3]/50"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                focus:outline-none focus:border-[#e5d3b3]/50"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                focus:outline-none focus:border-[#e5d3b3]/50"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={filters.priority}
              onChange={(e) =>
                setFilters({ ...filters, priority: e.target.value })
              }
              className="p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                focus:outline-none focus:border-[#e5d3b3]/50"
            >
              <option value="all">All Priorities</option>
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {filteredTickets.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#e5d3b3]/70 text-lg">No tickets found</p>
            </div>
          ) : (
            filteredTickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
