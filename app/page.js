import Link from "next/link";
import Image from "next/image";
import { FiFileText, FiSearch, FiClock, FiBell } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a0404]/90 to-[#2d0202]/90" />
        <Image
          src="/hero-bg.jpg" // Make sure this file exists in public folder
          alt="Chateaux de Paris"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif text-[#e5d3b3] mb-6">
              Welcome to Chateaux de Paris
            </h1>
            <p className="text-lg md:text-xl text-[#e5d3b3]/90 mb-8">
              Your premier homeowner's association management portal. Submit and
              track maintenance requests, access community updates, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="btn-primary text-center text-lg py-3 px-8"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="border border-[#e5d3b3] text-[#e5d3b3] hover:bg-[#e5d3b3]/10 
                  transition rounded text-center text-lg py-3 px-8"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#1c2516]/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-[#e5d3b3] text-center mb-12">
            Manage Your Requests with Ease
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FiFileText}
              title="Submit Tickets"
              description="Easily submit maintenance requests and track their progress"
            />
            <FeatureCard
              icon={FiSearch}
              title="Track Status"
              description="Monitor the status of your requests in real-time"
            />
            <FeatureCard
              icon={FiClock}
              title="Quick Response"
              description="Get timely updates on your maintenance requests"
            />
            <FeatureCard
              icon={FiBell}
              title="Notifications"
              description="Receive instant updates on your ticket status"
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c2516]/80 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-[#e5d3b3] mb-4">
                Submit a Ticket
              </h2>
              <p className="text-[#e5d3b3]/90 mb-4">
                Need assistance? Submit a ticket to get help from our management
                team.
              </p>
              <Link href="/tickets/new" className="btn-primary inline-block">
                Create Ticket
              </Link>
            </div>
            <div className="bg-[#1c2516]/80 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-[#e5d3b3] mb-4">
                Track Status
              </h2>
              <p className="text-[#e5d3b3]/90 mb-4">
                Check the status of your existing tickets and view responses.
              </p>
              <Link href="/tickets" className="btn-primary inline-block">
                View Tickets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-[#1c2516]/60 rounded-lg p-6 text-center">
      <div className="inline-block p-4 bg-[#4a0404] rounded-full mb-4">
        <Icon size={24} className="text-[#e5d3b3]" />
      </div>
      <h3 className="text-xl font-serif text-[#e5d3b3] mb-2">{title}</h3>
      <p className="text-[#e5d3b3]/70">{description}</p>
    </div>
  );
}
