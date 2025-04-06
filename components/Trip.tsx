import { Participants } from "./Participants";

type Props = {
  trip: Trip;
};

export const Trip: React.FC<Props> = ({ trip }) => (
  <div className="bg-neutral-800 rounded-lg shadow-md flex flex-col space-y-4 p-7">
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-3">
        <div className="text-xl font-semibold">{trip.name}</div>
        {(trip.location || trip.date || trip.description) && (
          <div className="flex flex-col gap-1">
            {trip.description && (
              <span className="font-light opacity-75">{trip.description}</span>
            )}
            <div className="h-px bg-neutral-700 my-3" />
            {trip.location && (
              <span className="font-light text-sm opacity-50">
                {trip.location}
              </span>
            )}
            {trip.date && (
              <span className="font-light text-sm opacity-50">{trip.date}</span>
            )}
          </div>
        )}
      </div>
      {trip.participants.length > 0 && (
        <div className="flex justify-between">
          <Participants
            small
            users={trip.participants}
            borderColor="neutral-800"
          />
        </div>
      )}
    </div>
  </div>
);
