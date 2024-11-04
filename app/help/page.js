import Link from "next/link";
import { FiHelpCircle, FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";

export default function Help() {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif text-[#e5d3b3] mb-8">
            Help & Support
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#2a3a1f]/60 rounded-lg p-6">
              <FiPhone className="text-[#e5d3b3] mb-4" size={24} />
              <h2 className="text-xl font-serif text-[#e5d3b3] mb-2">
                Emergency Contact
              </h2>
              <p className="text-[#e5d3b3]/70 mb-4">
                For urgent maintenance issues or emergencies
              </p>
              <p className="text-[#e5d3b3] text-lg">(555) 123-4567</p>
            </div>

            <div className="bg-[#2a3a1f]/60 rounded-lg p-6">
              <FiMail className="text-[#e5d3b3] mb-4" size={24} />
              <h2 className="text-xl font-serif text-[#e5d3b3] mb-2">
                Email Support
              </h2>
              <p className="text-[#e5d3b3]/70 mb-4">
                For general inquiries and non-urgent matters
              </p>
              <p className="text-[#e5d3b3]">support@chateauxdeparis.com</p>
            </div>
          </div>

          <div className="bg-[#2a3a1f]/60 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-serif text-[#e5d3b3] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {/* Add FAQ items here */}
              <div className="border-b border-[#e5d3b3]/10 pb-4">
                <h3 className="text-[#e5d3b3] mb-2">
                  How do I submit a maintenance request?
                </h3>
                <p className="text-[#e5d3b3]/70">
                  You can submit a maintenance request through the "Submit
                  Ticket" option in your dashboard...
                </p>
              </div>
              {/* Add more FAQ items */}
            </div>
          </div>

          <div className="text-center">
            <p className="text-[#e5d3b3]/70 mb-4">
              Can't find what you're looking for?
            </p>
            <Link
              href="/tickets/new"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FiMessageCircle />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
