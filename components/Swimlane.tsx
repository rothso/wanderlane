import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Trip } from "./Trip";
import { colors } from "@/constants/colors";
import { type Swimlane as SwimlaneType } from "@/types";

type Props = {
  swimlane: SwimlaneType;
};

export const Swimlane = ({ swimlane }: Props) => (
  <div className="flex flex-col flex-1 min-w-[15rem] space-y-6">
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2.5">
        <div
          className={cn("rounded-full w-2 h-2 mr-1", colors[swimlane.color])}
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
