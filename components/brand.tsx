import Image from "next/image";
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/images/burundi-flag.webp"
        alt="Burundi flag"
        width={54}
        height={36}
        className="h-8 w-12 rounded-sm object-contain"
      />
      <span className="font-display text-2xl font-semibold">VisitBurundi</span>
    </span>
  );
}
