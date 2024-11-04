export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202] py-8">
      <div className="container mx-auto px-4">
        <div className="card max-w-4xl mx-auto">
          <div className="animate-pulse space-y-8">
            {/* Header */}
            <div className="flex justify-between">
              <div className="space-y-2">
                <div className="h-4 bg-[#e5d3b3]/10 rounded w-24"></div>
                <div className="h-8 bg-[#e5d3b3]/10 rounded w-64"></div>
              </div>
              <div className="h-6 bg-[#e5d3b3]/10 rounded w-20"></div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                  <div className="h-6 bg-[#e5d3b3]/10 rounded w-32"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-[#e5d3b3]/10 rounded"></div>
                    <div className="h-4 bg-[#e5d3b3]/10 rounded"></div>
                    <div className="h-4 bg-[#e5d3b3]/10 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              <div className="bg-[#e5d3b3]/5 p-4 rounded h-48"></div>
            </div>

            {/* Updates */}
            <div className="space-y-4">
              <div className="h-6 bg-[#e5d3b3]/10 rounded w-24"></div>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-[#e5d3b3]/5 p-4 rounded space-y-2">
                    <div className="h-4 bg-[#e5d3b3]/10 rounded w-1/4"></div>
                    <div className="h-4 bg-[#e5d3b3]/10 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
