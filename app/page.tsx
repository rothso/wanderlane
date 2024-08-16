import { Swimlane } from "@/components/Swimlane";
import { getData } from "./data";
import { AvatarGroup } from "@/components/AvatarGroup";

export default function Home() {
  const board = getData();

  return (
    <main className="flex min-h-screen flex-col space-y-12 items-center p-24">
      <div className="z-10 w-full max-w-7xl items-center justify-between text-sm lg:flex">
        <div className="flex items-center space-x-4">
          <p className="text-2xl font-semibold">{board.name}</p>
          <span className="bg-emerald-800 text-emerald-100 px-2 py-1 rounded-md">
            Private Board
          </span>
        </div>
        <AvatarGroup users={board.users} borderColor="midnight" />
      </div>

      <div className="mb-32 flex space-x-7 text-center lg:mb-0 lg:w-full lg:max-w-7xl lg:text-left">
        {board.swimlanes.map((swimlane) => (
          <Swimlane key={swimlane.name} swimlane={swimlane} />
        ))}
      </div>
    </main>
  );
}
