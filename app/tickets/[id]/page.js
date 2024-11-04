"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Dummy data for demonstration
const dummyTicket = {
  id: 1,
  title: "Leaking Faucet",
  category: "Maintenance",
  status: "in-progress",
  priority: "normal",
  description:
    "The kitchen faucet has been leaking consistently for the past two days. Water is dripping even when the handle is fully closed.",
  createdAt: "2024-03-15",
  lastUpdated: "2024-03-16",
  images: [],
  updates: [
    {
      id: 1,
      type: "status",
      content: "Ticket status changed to In Progress",
      timestamp: "2024-03-15 14:30",
      author: "System",
    },
    {
      id: 2,
      type: "comment",
      content:
        "Maintenance team has been notified. They will visit tomorrow between 9 AM and 11 AM.",
      timestamp: "2024-03-15 15:00",
      author: "HOA Admin",
    },
  ],
};

export default function TicketDetail({ params }) {
  const [newComment, setNewComment] = useState("");
  const ticket = dummyTicket; // In real app, fetch ticket by params.id

  const handleAddComment = (e) => {
    e.preventDefault();
    // TODO: Implement comment submission logic
    console.log("New comment:", newComment);
    setNewComment("");
  };

  const getStatusColor = (status) => {
    const colors = {
      open: "bg-yellow-500",
      "in-progress": "bg-blue-500",
      resolved: "bg-green-500",
      closed: "bg-gray-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202] py-8">
      <div className="container mx-auto px-4">
        <div className="card max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link
                href="/tickets"
                className="text-[#e5d3b3]/70 hover:text-[#e5d3b3] transition mb-2 inline-block"
              >
                ← Back to Tickets
              </Link>
              <h1 className="text-3xl font-serif text-[#e5d3b3]">
                {ticket.title}
              </h1>
            </div>
            <span
              className={`px-3 py-1 rounded text-sm text-white ${getStatusColor(
                ticket.status
              )}`}
            >
              {ticket.status}
            </span>
          </div>

          {/* Ticket Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-serif text-[#e5d3b3] mb-3">
                  Description
                </h2>
                <p className="text-[#e5d3b3]/90">{ticket.description}</p>
              </div>

              {ticket.images.length > 0 && (
                <div>
                  <h2 className="text-xl font-serif text-[#e5d3b3] mb-3">
                    Attachments
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {ticket.images.map((image, index) => (
                      <div key={index} className="relative aspect-video">
                        <Image
                          src={image}
                          alt={`Attachment ${index + 1}`}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-[#e5d3b3]/5 p-4 rounded">
                <h2 className="text-xl font-serif text-[#e5d3b3] mb-3">
                  Details
                </h2>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="text-[#e5d3b3]/70">Category</dt>
                    <dd className="text-[#e5d3b3]">{ticket.category}</dd>
                  </div>
                  <div>
                    <dt className="text-[#e5d3b3]/70">Priority</dt>
                    <dd className="text-[#e5d3b3] capitalize">
                      {ticket.priority}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#e5d3b3]/70">Created</dt>
                    <dd className="text-[#e5d3b3]">{ticket.createdAt}</dd>
                  </div>
                  <div>
                    <dt className="text-[#e5d3b3]/70">Last Updated</dt>
                    <dd className="text-[#e5d3b3]">{ticket.lastUpdated}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Updates and Comments */}
          <div className="border-t border-[#e5d3b3]/20 pt-8">
            <h2 className="text-xl font-serif text-[#e5d3b3] mb-6">Updates</h2>

            <div className="space-y-4 mb-8">
              {ticket.updates.map((update) => (
                <div key={update.id} className="bg-[#e5d3b3]/5 p-4 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#e5d3b3] font-medium">
                      {update.author}
                    </span>
                    <span className="text-[#e5d3b3]/70 text-sm">
                      {update.timestamp}
                    </span>
                  </div>
                  <p className="text-[#e5d3b3]/90">{update.content}</p>
                </div>
              ))}
            </div>

            {/* Add Comment Form */}
            <form onSubmit={handleAddComment} className="space-y-4">
              <div>
                <label htmlFor="comment" className="block text-[#e5d3b3] mb-2">
                  Add Comment
                </label>
                <textarea
                  id="comment"
                  rows={3}
                  className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                    focus:outline-none focus:border-[#e5d3b3]/50"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary">
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
