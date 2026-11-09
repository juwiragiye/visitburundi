export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 235 44"
      role="img"
      aria-label="VisitBurundi"
      className={`h-9 w-48 ${className}`}
    >
      <path
        d="M5 29 15 10l8 12 6-8 10 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 34h32" stroke="currentColor" strokeWidth="2" />
      <text
        x="48"
        y="30"
        fill="currentColor"
        fontSize="26"
        fontFamily="Georgia,serif"
      >
        VisitBurundi
      </text>
    </svg>
  );
}
