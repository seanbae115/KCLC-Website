export default function Notice({
  tone = "warning",
  className,
  children,
}: {
  tone?: "warning" | "info";
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`notice notice-${tone}${className ? ` ${className}` : ""}`}>{children}</div>;
}
