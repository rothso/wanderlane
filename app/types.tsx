type User = {
  name: string;
  imageUrl: string;
};

type Tag = {
  name: string;
  hexColor: string;
};

type Trip = {
  name: string;
  location?: string;
  tags?: Tag[];
  date?: string;
  description?: string;
  participants?: User[];
};

type Swimlane = {
  name: string;
  description: string;
  color: string;
  trips?: Trip[];
};

type Board = {
  name: string;
  users: User[];
  swimlanes: Swimlane[];
};
