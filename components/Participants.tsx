import { cn } from "@/lib/utils";
import { Avatar } from "./Avatar";
import { OverlapGroup } from "./OverlapGroup";
import { User } from "@/types";
import { UserAvatar } from "./UserAvatar";
import { useOverflow } from "@/hooks/useOverflow";

const ringClassName = {
  midnight: "ring-midnight",
  "neutral-800": "ring-neutral-800",
};

type Props = {
  users: User[];
  ringColor: keyof typeof ringClassName;
  limit?: number;
  small?: boolean;
};

export const Participants = ({
  users,
  ringColor,
  limit,
  small = false,
}: Props) => {
  const { withinLimit, excess } = useOverflow(users, limit ?? users.length, 2);

  return (
    <OverlapGroup>
      {withinLimit.map((user) => (
        <UserAvatar
          key={user.id}
          user={user}
          className={ringClassName[ringColor]}
          small={small}
        />
      ))}
      {excess.length > 0 && (
        <Avatar
          id="show-all"
          key="show-all"
          className={cn("bg-slate-500 font-bold", ringClassName[ringColor])}
          small={small}
        >
          +{excess.length}
        </Avatar>
      )}
      <Avatar
        id="add-participant"
        key="add-participant"
        className={cn("bg-neutral-700", ringClassName[ringColor])}
        small={small}
      >
        <span
          className={cn("text-neutral-500 font-bold", {
            "text-xl": !small,
            "text-lg": small,
          })}
        >
          +
        </span>
      </Avatar>
    </OverlapGroup>
  );
};
