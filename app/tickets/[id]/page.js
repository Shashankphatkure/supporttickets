"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiMessageCircle,
  FiPaperclip,
  FiSend,
} from "react-icons/fi";
import StatusBadge from "../../components/StatusBadge";

// Dummy data for demonstration
const dummyTicket = {
  id: 1,
  title: "Leaking Faucet in Master Bathroom",
  category: "Maintenance",
  status: "in-progress",
  priority: "normal",
  description:
    "The kitchen faucet has been leaking consistently for the past two days. Water is dripping even when the handle is fully closed.",
  createdAt: "2024-03-15T10:30:00Z",
  lastUpdated: "2024-03-16T14:30:00Z",
  unit: "304",
  images: ["/sample-image.jpg"],
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

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="card max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link
                href="/tickets"
                className="text-accent/70 hover:text-accent flex items-center gap-2 mb-2"
              >
                <FiArrowLeft /> Back to Tickets
              </Link>
              <h1 className="section-title mb-2">{ticket.title}</h1>
              <div className="flex items-center gap-4 text-accent/70">
                <span>Ticket #{ticket.id.toString().padStart(5, "0")}</span>
                <span>•</span>
                <span>Unit {ticket.unit}</span>
                <span>•</span>
                <StatusBadge status={ticket.status} />
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2 space-y-6">
              <div className="card bg-background-glass">
                <h2 className="text-xl font-serif text-accent mb-3">
                  Description
                </h2>
                <p className="text-accent/90">{ticket.description}</p>
              </div>

              {ticket.images?.length > 0 && (
                <div className="card bg-background-glass">
                  <h2 className="text-xl font-serif text-accent mb-3">
                    Attachments
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {ticket.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`Attachment ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="card bg-background-glass">
                <h2 className="text-xl font-serif text-accent mb-4">Details</h2>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-accent/70">Category</dt>
                    <dd className="text-accent">{ticket.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-accent/70">Priority</dt>
                    <dd className="text-accent capitalize">
                      {ticket.priority}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-accent/70">Created</dt>
                    <dd className="text-accent">
                      {new Date(ticket.createdAt).toLocaleDateString()}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-accent/70">Last Updated</dt>
                    <dd className="text-accent">
                      {new Date(ticket.lastUpdated).toLocaleDateString()}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Updates and Comments */}
          <div className="border-t border-accent/10 pt-8">
            <h2 className="text-xl font-serif text-accent mb-6">Updates</h2>

            <div className="space-y-4 mb-8">
              {ticket.updates.map((update) => (
                <div key={update.id} className="card bg-background-glass">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-accent font-medium">
                      {update.author}
                    </span>
                    <span className="text-accent/70 text-sm">
                      {update.timestamp}
                    </span>
                  </div>
                  <p className="text-accent/90">{update.content}</p>
                </div>
              ))}
            </div>

            {/* Add Comment Form */}
            <form
              onSubmit={handleAddComment}
              className="card bg-background-glass"
            >
              <h3 className="text-lg font-serif text-accent mb-4">
                Add Response
              </h3>
              <div className="space-y-4">
                <textarea
                  rows={3}
                  className="input-field"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Type your response here..."
                />
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    className="text-accent/70 hover:text-accent flex items-center gap-2"
                  >
                    <FiPaperclip /> Attach Files
                  </button>
                  <button type="submit" className="btn-primary">
                    <FiSend />
                    Send Response
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
