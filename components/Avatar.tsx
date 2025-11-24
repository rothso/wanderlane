import { cn, hash } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type Props = {
  id: string;
  className?: string;
  small?: boolean;
};

const bgClassNames = [
  "bg-emerald-900",
  "bg-sky-900",
  "bg-teal-900",
  "bg-cyan-900",
  "bg-pink-900",
];

export const Avatar = ({
  children,
  id,
  small,
  className,
}: PropsWithChildren<Props>) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center rounded-full overflow-hidden ring-4 ring-transparent text-white",
      bgClassNames[hash(id) % bgClassNames.length],
      {
        "w-10 h-10 text-base": !small,
        "w-9 h-9 text-sm": small,
      },
      className,
    )}
  >
    {children}
  </div>
);
