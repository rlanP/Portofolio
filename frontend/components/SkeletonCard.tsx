export default function SkeletonCard({ variant = "project" }: { variant?: "project" | "skill" | "certificate" | "testimonial" }) {
  if (variant === "project") {
    return (
      <div className="flex flex-col h-full rounded-2xl bg-gray-900/50 border border-gray-800/50 overflow-hidden animate-pulse">
        <div className="aspect-video bg-gray-800 border-b border-gray-800/50" />
        <div className="p-6 flex flex-col flex-1">
          <div className="h-4 bg-gray-800 rounded-md w-1/4 mb-3" />
          <div className="h-6 bg-gray-800 rounded-md w-3/4 mb-4" />
          <div className="space-y-2 mb-6">
            <div className="h-4 bg-gray-800 rounded-md w-full" />
            <div className="h-4 bg-gray-800 rounded-md w-5/6" />
          </div>
          <div className="flex gap-1.5 mt-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 bg-gray-800 rounded-md w-16" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "skill") {
    return (
      <div className="p-4 bg-gray-900/50 rounded-2xl border border-gray-800/50 animate-pulse">
        <div className="flex justify-between items-center mb-2">
          <div className="h-5 bg-gray-800 rounded-md w-1/3" />
          <div className="h-5 bg-gray-800 rounded-md w-12" />
        </div>
        <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
          <div className="h-full bg-gray-700 w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 animate-pulse">
      <div className="h-6 bg-gray-800 rounded-md w-1/2 mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-800 rounded-md w-full" />
        <div className="h-4 bg-gray-800 rounded-md w-5/6" />
      </div>
    </div>
  );
}
