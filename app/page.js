import Link from "next/link";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202]">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <Logo size="large" />
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/login"
                  className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
                >
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1c2516]/80 p-8 rounded-lg">
            <h2 className="text-2xl font-serif text-[#e5d3b3] mb-4">
              Submit a Ticket
            </h2>
            <p className="text-[#e5d3b3]/90 mb-4">
              Need assistance? Submit a ticket to get help from our management
              team.
            </p>
            <Link
              href="/tickets/new"
              className="inline-block bg-[#4a0404] text-[#e5d3b3] px-6 py-2 rounded hover:bg-[#3d0303] transition"
            >
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
            <Link
              href="/tickets"
              className="inline-block bg-[#4a0404] text-[#e5d3b3] px-6 py-2 rounded hover:bg-[#3d0303] transition"
            >
              View Tickets
            </Link>
          </div>
        </section>

        <footer className="text-center text-[#e5d3b3]/70 text-sm">
          <p>© 2024 Chateaux de Paris HOA. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
