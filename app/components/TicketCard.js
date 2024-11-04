import Link from "next/link";
import StatusBadge from "./StatusBadge";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

export default function TicketCard({ ticket }) {
  return (
    <div className="bg-[#1c2516]/40 border border-[#e5d3b3]/10 rounded-lg p-5 hover:border-[#e5d3b3]/20 transition group">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 mb-2">
            <StatusBadge status={ticket.status} />
            <span className="text-[#e5d3b3]/60 text-sm">
              #{ticket.id.toString().padStart(5, "0")}
            </span>
          </div>
          <Link href={`/tickets/${ticket.id}`}>
            <h3 className="text-xl font-serif text-[#e5d3b3] mb-2 group-hover:text-[#8b9b7c] transition">
              {ticket.title}
            </h3>
          </Link>
          <p className="text-[#e5d3b3]/70 text-sm line-clamp-2 mb-4">
            {ticket.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-[#e5d3b3]/60">
            <span>{ticket.category}</span>
            <span>•</span>
            <span>Priority: {ticket.priority}</span>
            <span>•</span>
            <span>
              Created {formatDistanceToNow(new Date(ticket.createdAt))} ago
            </span>
          </div>
        </div>
        {ticket.images?.length > 0 && (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-[#e5d3b3]/10">
            <Image
              src={ticket.images[0]}
              alt="Ticket attachment"
              fill
              className="object-cover"
            />
            {ticket.images.length > 1 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm">
                +{ticket.images.length - 1}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
