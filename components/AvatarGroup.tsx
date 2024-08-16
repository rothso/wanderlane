import classnames from "classnames";
import { Avatar } from "./Avatar";

const colorVariants = {
  midnight: "bg-midnight ring-midnight",
  "neutral-800": "bg-neutral-800 ring-neutral-800",
};

type Props = {
  users: User[];
  borderColor: keyof typeof colorVariants;
  small?: boolean;
};

export const AvatarGroup: React.FC<Props> = ({
  users,
  borderColor,
  small = false,
}) => (
  <div className="flex flex-row-reverse ml-2">
    {users.map((user) => (
      <Avatar
        key={user.name}
        user={user}
        className={classnames(
          "ring-offset-0 ring-4 -ml-2 z-0",
          colorVariants[borderColor]
        )}
        small={small}
      />
    ))}
  </div>
);
