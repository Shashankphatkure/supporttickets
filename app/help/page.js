import Link from "next/link";
import { FiHelpCircle, FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";

export default function Help() {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title">Help & Support</h1>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="card hover:scale-[1.02] transition-transform">
              <FiPhone className="text-primary-light mb-4" size={24} />
              <h2 className="text-xl font-serif text-accent mb-2">
                Emergency Contact
              </h2>
              <p className="text-accent/70 mb-4">
                For urgent maintenance issues or emergencies
              </p>
              <p className="text-accent text-lg">(555) 123-4567</p>
            </div>

            <div className="card hover:scale-[1.02] transition-transform">
              <FiMail className="text-primary-light mb-4" size={24} />
              <h2 className="text-xl font-serif text-accent mb-2">
                Email Support
              </h2>
              <p className="text-accent/70 mb-4">
                For general inquiries and non-urgent matters
              </p>
              <p className="text-accent">support@chateauxdeparis.com</p>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-serif text-accent mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="border-b border-accent/10 pb-4">
                <h3 className="text-accent mb-2">
                  How do I submit a maintenance request?
                </h3>
                <p className="text-accent/70">
                  You can submit a maintenance request through the "Submit
                  Ticket" option in your dashboard. Fill out the form with
                  detailed information about your issue, and our team will
                  respond promptly.
                </p>
              </div>
              {/* Add more FAQ items here */}
            </div>
          </div>

          <div className="text-center">
            <p className="text-accent/70 mb-4">
              Can't find what you're looking for?
            </p>
            <Link href="/tickets/new" className="btn-primary">
              <FiMessageCircle />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
