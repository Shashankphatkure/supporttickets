export default function Loading() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="card">
          <div className="animate-pulse space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="h-8 bg-accent/10 rounded w-48"></div>
              <div className="h-10 bg-primary/20 rounded-lg w-32"></div>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 bg-accent/10 rounded"></div>
              ))}
            </div>

            {/* Ticket Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="card bg-accent/5 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <div className="h-6 bg-accent/10 rounded w-3/4"></div>
                    <div className="h-4 bg-accent/10 rounded w-1/2"></div>
                  </div>
                  <div className="h-8 bg-primary/20 rounded-full w-24"></div>
                </div>
                <div className="h-4 bg-accent/10 rounded w-full"></div>
                <div className="flex gap-4">
                  <div className="h-4 bg-accent/10 rounded w-24"></div>
                  <div className="h-4 bg-accent/10 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
