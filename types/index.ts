import { ColorName } from "@/constants/colors";

export type User = {
  name: string;
  imageUrl: string;
};

export type Trip = {
  name: string;
  location?: string;
  date?: string;
  description?: string;
  participants: User[];
};

export type Swimlane = {
  name: string;
  description: string;
  color: ColorName;
  trips: Trip[];
};

export type Board = {
  name: string;
  users: User[];
  swimlanes: Swimlane[];
};
