export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202] py-8">
      <div className="container mx-auto px-4">
        <div className="card">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-[#e5d3b3]/10 rounded w-1/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-[#e5d3b3]/10 rounded"></div>
              <div className="h-4 bg-[#e5d3b3]/10 rounded w-5/6"></div>
              <div className="h-4 bg-[#e5d3b3]/10 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
