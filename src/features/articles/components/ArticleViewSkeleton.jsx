const ArticleViewSkeleton = () => {
  return (
    <div className="mt-6 bg-white/[0.84] border border-[rgba(17,34,48,0.12)] rounded-2xl p-6 shadow-[0_12px_32px_rgba(15,35,53,0.12)]">
      {/* Topic badge */}
      <div className="h-3 w-16 rounded bg-gray-200 animate-pulse mb-2" />

      {/* Title */}
      <div className="space-y-2 mb-3">
        <div className="h-8 w-full rounded bg-gray-200 animate-pulse" />
        <div className="h-8 w-4/5 rounded bg-gray-200 animate-pulse" />
      </div>

      {/* Author + date */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-28 rounded-lg bg-gray-200 animate-pulse" />
        <div className="h-4 w-20 rounded bg-gray-200 animate-pulse" />
      </div>

      {/* Image */}
      <div className="w-full rounded-xl my-5 bg-gray-200 animate-pulse" style={{ height: "24rem" }} />

      {/* Body lines */}
      <div className="space-y-2 mb-5">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={`h-4 rounded bg-gray-200 animate-pulse ${i === 5 ? "w-2/3" : "w-full"}`} />
        ))}
      </div>

      {/* Vote + comment */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-[rgba(17,34,48,0.08)]">
        <div className="h-8 w-24 rounded-lg bg-gray-200 animate-pulse" />
        <div className="h-8 w-20 rounded-lg bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
};

export default ArticleViewSkeleton;
