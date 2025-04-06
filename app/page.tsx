import { Swimlane } from "@/components/Swimlane";
import { AvatarGroup } from "@/components/AvatarGroup";
import supabase from "../lib/initSupabase";
import "../app/globals.css";

export const metadata = {
  title: "Trip Board",
  description: "Our very bestest trip board",
};

export default async function Home() {
  const { data: board, error } = await supabase
    .from("boards")
    .select(
      `
      name,
      swimlanes (
        name,
        description,
        color,
        trips (
          name,
          description,
          location,
          date,
          participants:users (
            name,
            imageUrl:image_url
          )
        )
      ),
      users (
        name,
        imageUrl:image_url
      )
    `
    )
    .eq("id", 1)
    .single();

  if (error) {
    throw error;
  }

  return (
    <main className="flex max-w-screen-2xl min-h-screen flex-col space-y-12 items-center mx-auto py-24">
      <div className="z-10 w-full items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <p className="text-2xl font-semibold">{board.name}</p>
          <span className="bg-emerald-800 text-emerald-100 px-2 py-1 rounded-md">
            Private Board
          </span>
        </div>
        <AvatarGroup users={board.users} borderColor="midnight" />
      </div>

      <div className="mb-32 flex space-x-7">
        {board.swimlanes.map((swimlane) => (
          <Swimlane key={swimlane.name} swimlane={swimlane} />
        ))}
      </div>
    </main>
  );
}
