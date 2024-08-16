import classnames from "classnames";

type Props = {
  user: User;
  className?: string;
  small?: boolean;
};

export const Avatar: React.FC<Props> = ({ user, small, className = null }) => (
  <div className={classnames("rounded-full overflow-hidden", className)}>
    <img
      className={classnames({
        "w-10 h-10": !small,
        "w-8 h-8": small,
      })}
      src={user.imageUrl}
      alt={user.name}
    />
  </div>
);
