import type { ReactNode } from "react";

type InvitationFrameProps = {
  children: ReactNode;
  innerColor: string;
  outerColor: string;
  bg: string;
  className?: string;
};

export function InvitationFrame({
  children,
  innerColor,
  outerColor,
  bg,
  className = "",
}: InvitationFrameProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        backgroundColor: bg,
        boxShadow: `inset 0 0 0 1px ${innerColor}, inset 0 0 0 6px transparent, inset 0 0 0 7px ${outerColor}`,
      }}
    >
      {children}
    </div>
  );
}
