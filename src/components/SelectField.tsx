import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type SelectFieldProps = {
  label: string;
  options: readonly string[];
  value?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

export function SelectField({ label, options, value, placeholder, onValueChange, className }: SelectFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5 bg-card px-6 py-4", className)}>
      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">{label}</span>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          className={cn(
            "h-7 rounded-none border-0 border-b border-border/70 bg-transparent p-0 font-serif text-lg text-cocoa shadow-none transition-colors",
            "hover:border-terracotta/70 focus:outline-none focus:ring-0 focus:ring-offset-0",
            "data-[state=open]:border-terracotta",
            "[&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-terracotta [&>svg]:opacity-80 [&>svg]:transition-transform [&>svg]:duration-300 data-[state=open]:[&>svg]:rotate-180",
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          position="popper"
          sideOffset={10}
          className="rounded-sm border-border bg-popover p-1.5 shadow-soft data-[state=open]:animate-in"
        >
          {options.map((option) => (
            <SelectItem
              key={option}
              value={option}
              className="rounded-none py-2.5 pl-5 pr-9 font-serif text-base text-cocoa transition-colors data-[highlighted]:bg-peach/70 data-[highlighted]:text-cocoa data-[state=checked]:font-semibold data-[state=checked]:text-terracotta [&>span>svg]:text-terracotta"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
