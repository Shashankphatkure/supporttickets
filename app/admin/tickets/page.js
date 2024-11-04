"use client";
import { useState } from "react";
import {
  FiFilter,
  FiSearch,
  FiCheckCircle,
  FiClock,
  FiMessageSquare,
  FiAlertCircle,
} from "react-icons/fi";
import StatusBadge from "../../components/StatusBadge";

// Enhanced dummy data for admin view
const dummyTickets = [
  {
    id: 1,
    title: "Leaking Faucet in Master Bathroom",
    category: "Maintenance",
    status: "open",
    priority: "normal",
    unit: "304",
    resident: "John Doe",
    description: "The faucet has been leaking consistently...",
    createdAt: "2024-03-15T10:30:00Z",
    lastUpdated: "2024-03-15T14:30:00Z",
    assignedTo: "Mike Maintenance",
  },
  // Add more dummy tickets
];

export default function AdminTickets() {
  const [selectedTickets, setSelectedTickets] = useState(new Set());
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    category: "all",
    search: "",
  });

  const handleStatusChange = async (ticketId, newStatus) => {
    // TODO: Implement status change logic
    console.log(`Changing ticket ${ticketId} status to ${newStatus}`);
  };

  const handleBulkAction = async (action) => {
    // TODO: Implement bulk actions
    console.log(
      `Performing ${action} on tickets:`,
      Array.from(selectedTickets)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-serif text-[#e5d3b3]">
          Ticket Management
        </h1>
        <div className="flex gap-3">
          <button className="btn-primary flex items-center gap-2">
            <FiFilter />
            Advanced Filters
          </button>
          <select
            className="bg-[#1c2516] text-[#e5d3b3] border border-[#e5d3b3]/20 rounded px-3"
            onChange={(e) => handleBulkAction(e.target.value)}
          >
            <option value="">Bulk Actions</option>
            <option value="assign">Assign Selected</option>
            <option value="resolve">Resolve Selected</option>
            <option value="close">Close Selected</option>
          </select>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2 relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e5d3b3]/50" />
          <input
            type="text"
            placeholder="Search tickets..."
            className="w-full pl-10 p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
              focus:outline-none focus:border-[#e5d3b3]/50"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>
        {["status", "priority", "category"].map((filterType) => (
          <select
            key={filterType}
            value={filters[filterType]}
            onChange={(e) =>
              setFilters({ ...filters, [filterType]: e.target.value })
            }
            className="p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
              focus:outline-none focus:border-[#e5d3b3]/50"
          >
            <option value="all">All {filterType}</option>
            {/* Add relevant options */}
          </select>
        ))}
      </div>

      {/* Tickets Table */}
      <div className="bg-[#1c2516]/40 rounded-lg border border-[#e5d3b3]/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e5d3b3]/10">
              <th className="p-4">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTickets(
                        new Set(dummyTickets.map((t) => t.id))
                      );
                    } else {
                      setSelectedTickets(new Set());
                    }
                  }}
                />
              </th>
              <th className="p-4 text-left text-[#e5d3b3]">Ticket</th>
              <th className="p-4 text-left text-[#e5d3b3]">Resident</th>
              <th className="p-4 text-left text-[#e5d3b3]">Status</th>
              <th className="p-4 text-left text-[#e5d3b3]">Assigned To</th>
              <th className="p-4 text-left text-[#e5d3b3]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyTickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-b border-[#e5d3b3]/10 hover:bg-[#e5d3b3]/5"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedTickets.has(ticket.id)}
                    onChange={(e) => {
                      const newSelected = new Set(selectedTickets);
                      if (e.target.checked) {
                        newSelected.add(ticket.id);
                      } else {
                        newSelected.delete(ticket.id);
                      }
                      setSelectedTickets(newSelected);
                    }}
                  />
                </td>
                <td className="p-4">
                  <div>
                    <div className="text-[#e5d3b3] font-medium">
                      {ticket.title}
                    </div>
                    <div className="text-sm text-[#e5d3b3]/70">
                      #{ticket.id} • {ticket.category}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div>
                    <div className="text-[#e5d3b3]">{ticket.resident}</div>
                    <div className="text-sm text-[#e5d3b3]/70">
                      Unit {ticket.unit}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <StatusBadge status={ticket.status} />
                </td>
                <td className="p-4">
                  <div className="text-[#e5d3b3]">
                    {ticket.assignedTo || "Unassigned"}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      className="p-2 text-[#e5d3b3]/70 hover:text-[#e5d3b3] transition"
                      title="Mark as resolved"
                    >
                      <FiCheckCircle />
                    </button>
                    <button
                      className="p-2 text-[#e5d3b3]/70 hover:text-[#e5d3b3] transition"
                      title="Add response"
                    >
                      <FiMessageSquare />
                    </button>
                    <button
                      className="p-2 text-[#e5d3b3]/70 hover:text-[#e5d3b3] transition"
                      title="Mark as pending"
                    >
                      <FiClock />
                    </button>
                    <button
                      className="p-2 text-[#e5d3b3]/70 hover:text-red-300 transition"
                      title="Mark as urgent"
                    >
                      <FiAlertCircle />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
