import classnames from "classnames";
import { AvatarGroup } from "./AvatarGroup";
import { type User } from "@/types";

const colorVariants = {
  midnight: "ring-midnight",
  "neutral-800": "ring-neutral-800",
};

type Props = {
  users: User[];
  borderColor: keyof typeof colorVariants;
  small: boolean;
};

export const Participants: React.FC<Props> = ({
  users,
  borderColor,
  small = false,
}) => {
  const ringClass = classnames(
    "ring-offset-0 ring-4 -ml-2 z-0",
    colorVariants[borderColor]
  );

  return (
    <div className="flex flex-row-reverse">
      <div
        className={classnames(
          ringClass,
          "w-8 h-8 rounded-full bg-neutral-700 flex justify-center items-center"
        )}
      >
        <span className="text-neutral-500 text-lg">+</span>
      </div>

      <AvatarGroup users={users} borderColor={borderColor} small={small} />
    </div>
  );
};
