export default function Notice({
  tone = "warning",
  children,
}: {
  tone?: "warning" | "info";
  children: React.ReactNode;
}) {
  return <div className={`notice notice-${tone}`}>{children}</div>;
}
