import Link from "next/link";
import Image from "next/image";
import { FiFileText, FiSearch, FiClock, FiBell } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6b1515]/95 via-[#4a0404]/90 to-[#2d0202]/95" />
        <Image
          src="/hero-bg.jpg"
          alt="Chateaux de Paris"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative">
          <div className="max-w-2xl text-center">
            <div className="inline-block px-4 py-2 bg-[#e5d3b3]/10 rounded-full border border-[#e5d3b3]/20 mb-6">
              <span className="text-[#e5d3b3] text-sm">
                Welcome to Your Community Portal
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#e5d3b3] mb-6 leading-tight">
              Chateaux de Paris <br />
              <span className="text-[#8b9b7c]">Resident Portal</span>
            </h1>
            <p className="text-lg md:text-xl text-[#e5d3b3]/90 mb-8 leading-relaxed">
              Your premier homeowner's association management portal. Submit and
              track maintenance requests, access community updates, and stay
              connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-[#8b9b7c] hover:bg-[#7a8a6c] text-white text-center text-lg 
                  py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="border-2 border-[#e5d3b3] text-[#e5d3b3] hover:bg-[#e5d3b3]/10 
                  transition rounded-lg text-center text-lg py-3 px-8 hover:scale-105"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#2a3a1f]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#e5d3b3] mb-4">
              Manage Your Requests with Ease
            </h2>
            <p className="text-[#e5d3b3]/70 max-w-2xl mx-auto">
              Our platform provides you with all the tools you need to manage
              your maintenance requests and stay updated with community
              announcements.
            </p>
          </div>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-[#2a3a1f]/30 rounded-xl p-8 border border-[#e5d3b3]/10
              hover:border-[#e5d3b3]/20 transition-all hover:transform hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-serif text-[#e5d3b3] mb-4">
                Submit a Ticket
              </h2>
              <p className="text-[#e5d3b3]/90 mb-6">
                Need assistance? Submit a ticket to get help from our management
                team. We're here to help you with any maintenance or
                community-related issues.
              </p>
              <Link
                href="/tickets/new"
                className="inline-flex items-center gap-2 bg-[#8b9b7c] hover:bg-[#7a8a6c] 
                  text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Create Ticket
                <FiFileText />
              </Link>
            </div>
            <div
              className="bg-[#2a3a1f]/30 rounded-xl p-8 border border-[#e5d3b3]/10
              hover:border-[#e5d3b3]/20 transition-all hover:transform hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-serif text-[#e5d3b3] mb-4">
                Track Status
              </h2>
              <p className="text-[#e5d3b3]/90 mb-6">
                Check the status of your existing tickets and view responses.
                Stay updated on the progress of your maintenance requests.
              </p>
              <Link
                href="/tickets"
                className="inline-flex items-center gap-2 bg-[#8b9b7c] hover:bg-[#7a8a6c] 
                  text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                View Tickets
                <FiSearch />
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
    <div
      className="bg-[#2a3a1f]/30 rounded-xl p-8 border border-[#e5d3b3]/10
      hover:border-[#e5d3b3]/20 transition-all hover:transform hover:scale-[1.02]"
    >
      <div className="inline-block p-4 bg-[#8b9b7c] rounded-lg mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-serif text-[#e5d3b3] mb-2">{title}</h3>
      <p className="text-[#e5d3b3]/70">{description}</p>
    </div>
  );
}
