"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export function NavSearch({
  transparent = false,
  className = "",
  onSearch,
}: {
  transparent?: boolean;
  className?: string;
  onSearch?: () => void;
}) {
  const router = useRouter();
  const [value, setValue] = useState("");

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const q = value.trim();
        router.push(q ? `/explore?q=${encodeURIComponent(q)}` : "/explore");
        onSearch?.();
      }}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-colors duration-500 focus-within:border-terracotta ${
        transparent
          ? "border-peach/50 bg-cocoa/25 text-peach backdrop-blur-sm"
          : "border-border bg-card text-cocoa"
      } ${className}`}
    >
      <Search className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search venues, planners, or areas in Karachi..."
        aria-label="Search venues, planners, or areas in Karachi"
        className={`w-full min-w-0 bg-transparent text-sm outline-none ${
          transparent ? "placeholder:text-peach/75" : "placeholder:text-muted-foreground"
        }`}
      />
    </form>
  );
}
