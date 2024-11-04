import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#1c2516]/40 border-t border-[#e5d3b3]/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-serif text-[#e5d3b3] mb-4">About Us</h3>
            <p className="text-[#e5d3b3]/70 text-sm">
              Chateaux de Paris HOA is committed to maintaining the highest
              standards of community living and property management.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif text-[#e5d3b3] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tickets"
                  className="text-[#e5d3b3]/70 hover:text-[#e5d3b3]"
                >
                  Submit Ticket
                </Link>
              </li>
              <li>
                <Link
                  href="/announcements"
                  className="text-[#e5d3b3]/70 hover:text-[#e5d3b3]"
                >
                  Announcements
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className="text-[#e5d3b3]/70 hover:text-[#e5d3b3]"
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#e5d3b3]/70 hover:text-[#e5d3b3]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif text-[#e5d3b3] mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-[#e5d3b3]/70">
                <FiPhone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-[#e5d3b3]/70">
                <FiMail size={16} />
                <span>support@chateauxdeparis.com</span>
              </li>
              <li className="flex items-center gap-2 text-[#e5d3b3]/70">
                <FiMapPin size={16} />
                <span>123 Luxury Lane, Paris, TX 75460</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif text-[#e5d3b3] mb-4">
              Office Hours
            </h3>
            <ul className="space-y-2 text-sm text-[#e5d3b3]/70">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="mt-4 text-[#e5d3b3]">
                Emergency Support Available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e5d3b3]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#e5d3b3]/70 text-sm">
              © 2024 Chateaux de Paris HOA. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-[#e5d3b3]/70 hover:text-[#e5d3b3]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#e5d3b3]/70 hover:text-[#e5d3b3]"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-[#e5d3b3]/70 hover:text-[#e5d3b3]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
