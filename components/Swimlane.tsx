import classnames from "classnames";
import { Button } from "./Button";
import { Trip } from "./Trip";

type Props = {
  swimlane: Swimlane;
};

export const Swimlane: React.FC<Props> = ({ swimlane }) => (
  <div className="flex flex-col flex-1 space-y-6">
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2.5">
        <div
          className={classnames("rounded-full w-2 h-2 mr-1", swimlane.color)}
        />
        <p className="text-xl font-light">{swimlane.name}</p>
        <p className="text-xl font-light opacity-50">
          {swimlane.trips?.length ?? 0}
        </p>
      </div>
      <p className="font-light opacity-70">{swimlane.description}</p>
    </div>
    {swimlane.trips?.map((trip) => (
      <Trip key={trip.name} trip={trip} />
    ))}
    <Button label="Add trip" />
  </div>
);
