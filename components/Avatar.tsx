import classnames from "classnames";

type Props = {
  user: User;
  className?: string;
  small?: boolean;
};

export const Avatar: React.FC<Props> = ({ user, small, className = null }) => {
  const cn = classnames(
    "rounded-full",
    {
      "w-10 h-10": !small,
      "w-8 h-8": small,
    },
    className
  );

  return <img className={cn} src={user.imageUrl} alt={user.name} />;
};
