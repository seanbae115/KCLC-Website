/**
 * Stands in where a portrait has not been supplied yet.
 * Deliberately a symbol, never a photograph of a person — a stock face here
 * would read as the actual staff member.
 */
export type RoleKey = "volunteer" | "case" | "consult" | "partnership";

const paths: Record<RoleKey, React.ReactNode> = {
  volunteer: <path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10Z" />,
  case: (
    <>
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 13.2l2.2 2.2 4.3-4.4" />
    </>
  ),
  consult: <path d="M21 12a8 8 0 0 1-8 8H9.2L4 23l1.5-4.4A8 8 0 1 1 21 12Z" />,
  partnership: (
    <>
      <circle cx="9.2" cy="12" r="5.2" />
      <circle cx="14.8" cy="12" r="5.2" />
    </>
  ),
};

export default function RoleIcon({ role }: { role: RoleKey }) {
  return (
    <svg
      className="role-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[role]}
    </svg>
  );
}
