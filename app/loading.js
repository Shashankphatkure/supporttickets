export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-light to-secondary-dark flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-accent/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-accent/10 rounded-full backdrop-blur-sm"></div>
        </div>
      </div>
    </div>
  );
}
