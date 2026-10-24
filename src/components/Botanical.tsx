export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0Z" />
    </svg>
  );
}

/** Fine-line sprig used as divider ornament. */
export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 40" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M0 20h80M140 20h80" />
      <path d="M86 20c10-10 22-10 34 0 12 10 22 10 34 0" />
      <path d="M100 14c-4-8 2-12 8-10-1 6-4 9-8 10ZM132 26c4 8-2 12-8 10 1-6 4-9 8-10Z" />
      <circle cx="110" cy="20" r="2.5" />
    </svg>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center text-terracotta ${className}`}>
      <Sprig className="h-6 w-48" />
    </div>
  );
}

/** Corner floral linework. */
export function FloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="0.7">
      <path d="M10 150C40 110 60 70 120 20" />
      <path d="M40 112c-18-4-26-18-24-30 14 4 22 16 24 30Z" />
      <path d="M62 82c-2-18 8-30 20-32 0 14-8 26-20 32Z" />
      <path d="M86 56c14-10 30-8 38 0-12 8-26 8-38 0Z" />
      <path d="M120 20c-6-6-4-14 2-16 4 4 4 12-2 16ZM120 20c8-2 14 2 14 8-6 2-12-2-14-8Z" />
      <circle cx="122" cy="18" r="1.5" />
    </svg>
  );
}
