import { Participants } from "@/components/Participants";
import { Swimlane } from "@/components/Swimlane";
import "../app/globals.css";
import supabase from "../lib/initSupabase";

export const metadata = {
  title: "Trip Board",
  description: "Our very bestest trip board",
};

export const revalidate = 0;

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
            id,
            name,
            imageUrl:image_url
          )
        )
      ),
      users (
        id,
        name,
        imageUrl:image_url
      )
    `,
    )
    .eq("id", 1)
    .single();

  if (error) {
    throw error;
  }

  return (
    <main className="flex max-w-screen-2xl min-h-screen flex-col items-center mx-auto mt-12 md:mt-24">
      <div className="flex flex-col gap-4 z-10 w-full items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="text-lg md:text-2xl font-semibold">{board.name}</p>
          <span className="hidden md:block  bg-emerald-800 text-emerald-100 px-2 py-1 rounded-md">
            Private Board
          </span>
        </div>
        <Participants users={board.users} ringColor="midnight" limit={7} />
      </div>

      <div className="w-full flex overflow-x-auto space-x-7 px-7 py-12">
        {board.swimlanes.map((swimlane) => (
          <Swimlane key={swimlane.name} swimlane={swimlane} />
        ))}
      </div>
    </main>
  );
}
