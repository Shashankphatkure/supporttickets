"use client";
import { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiUpload, FiX } from "react-icons/fi";

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
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="card max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link
                href="/tickets"
                className="text-accent/70 hover:text-accent flex items-center gap-2 mb-2"
              >
                <FiArrowLeft /> Back to Tickets
              </Link>
              <h1 className="section-title">Submit New Ticket</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-accent mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                required
                className="input-field"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Brief description of the issue"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-accent mb-2">
                  Category
                </label>
                <select
                  id="category"
                  required
                  className="input-field"
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
                <label htmlFor="priority" className="block text-accent mb-2">
                  Priority
                </label>
                <select
                  id="priority"
                  required
                  className="input-field"
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
            </div>

            <div>
              <label htmlFor="description" className="block text-accent mb-2">
                Description
              </label>
              <textarea
                id="description"
                required
                rows={4}
                className="input-field"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Please provide detailed information about your issue..."
              />
            </div>

            <div>
              <label htmlFor="images" className="block text-accent mb-2">
                Attach Images (optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="input-field file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                    file:bg-primary file:text-white hover:file:bg-primary-light file:transition-colors"
                />
                <FiUpload className="absolute right-3 top-1/2 -translate-y-1/2 text-accent/50" />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/tickets" className="btn-secondary">
                Cancel
              </Link>
              <button type="submit" className="btn-primary">
                Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
