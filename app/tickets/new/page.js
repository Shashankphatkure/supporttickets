"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewTicket() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    priority: "normal",
    images: [],
  });

  const categories = [
    "Maintenance",
    "Noise Complaint",
    "Common Areas",
    "Safety Concern",
    "Parking",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement ticket submission logic
    console.log("Ticket submission:", formData);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202] py-8">
      <div className="container mx-auto px-4">
        <div className="card max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-serif text-[#e5d3b3]">
              Submit New Ticket
            </h1>
            <Link
              href="/tickets"
              className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
            >
              Back to Tickets
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-[#e5d3b3] mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                required
                className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                  focus:outline-none focus:border-[#e5d3b3]/50"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-[#e5d3b3] mb-2">
                Category
              </label>
              <select
                id="category"
                required
                className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                  focus:outline-none focus:border-[#e5d3b3]/50"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="priority" className="block text-[#e5d3b3] mb-2">
                Priority
              </label>
              <select
                id="priority"
                required
                className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                  focus:outline-none focus:border-[#e5d3b3]/50"
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-[#e5d3b3] mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                required
                rows={4}
                className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                  focus:outline-none focus:border-[#e5d3b3]/50"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="images" className="block text-[#e5d3b3] mb-2">
                Attach Images (optional)
              </label>
              <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                  focus:outline-none focus:border-[#e5d3b3]/50 file:mr-4 file:py-2 file:px-4
                  file:rounded file:border-0 file:bg-[#4a0404] file:text-[#e5d3b3]"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
