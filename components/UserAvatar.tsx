import { User } from "@/types";
import { Avatar, Props as AvatarProps } from "./Avatar";

type Props = Omit<AvatarProps, "id"> & {
  user: User;
  className?: string;
};

export const UserAvatar = ({ user, className, ...rest }: Props) => {
  return (
    <Avatar id={user.id.toString()} className={className} {...rest}>
      {user.name.charAt(0).toUpperCase()}
    </Avatar>
  );
};
