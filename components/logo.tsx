export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Zerovo Labs"
      className={className}
      style={{ height: "auto", maxHeight: "100%", imageRendering: "crisp-edges" }}
    />
  )
}
