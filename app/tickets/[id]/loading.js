export default function Loading() {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="card max-w-4xl mx-auto">
          <div className="animate-pulse space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="h-4 bg-accent/10 rounded w-24"></div>
              <div className="h-8 bg-accent/10 rounded w-2/3"></div>
              <div className="flex gap-4">
                <div className="h-4 bg-accent/10 rounded w-20"></div>
                <div className="h-4 bg-accent/10 rounded w-20"></div>
                <div className="h-6 bg-primary/20 rounded-full w-24"></div>
              </div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="card bg-accent/5">
                  <div className="h-6 bg-accent/10 rounded w-32 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-accent/10 rounded"></div>
                    <div className="h-4 bg-accent/10 rounded"></div>
                    <div className="h-4 bg-accent/10 rounded w-3/4"></div>
                  </div>
                </div>

                <div className="card bg-accent/5">
                  <div className="h-6 bg-accent/10 rounded w-32 mb-4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-accent/10 rounded"></div>
                    <div className="aspect-video bg-accent/10 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="card bg-accent/5 h-64">
                <div className="h-6 bg-accent/10 rounded w-24 mb-4"></div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 bg-accent/10 rounded w-20"></div>
                      <div className="h-4 bg-accent/10 rounded w-24"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-4">
              <div className="h-6 bg-accent/10 rounded w-24"></div>
              {[1, 2].map((i) => (
                <div key={i} className="card bg-accent/5 space-y-2">
                  <div className="flex justify-between">
                    <div className="h-4 bg-accent/10 rounded w-32"></div>
                    <div className="h-4 bg-accent/10 rounded w-24"></div>
                  </div>
                  <div className="h-4 bg-accent/10 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
