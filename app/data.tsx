const users: User[] = [
  {
    name: "Honya",
    imageUrl: "https://avatars.githubusercontent.com/u/30172148?v=4",
  },
  {
    name: "Liam",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQHPlkHzfgDgjg/profile-displayphoto-shrink_800_800/0/1574110938072?e=1724889600&v=beta&t=68D2_K8kYkQQSJM5_t9YpS0j8smIpLZ8m4yYH7kQQbg",
  },
  {
    name: "Lili",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1526712007260483584/LzWnqI3a_400x400.jpg",
  },
  {
    name: "Chris",
    imageUrl:
      "https://cdn.discordapp.com/avatars/201023563879153674/d19d2b1493fd75e97c3d7b5874b67f5e.webp?size=160",
  },
  {
    name: "Raine",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQGLVXQo4Zs5iA/profile-displayphoto-shrink_800_800/0/1539964840562?e=1724889600&v=beta&t=hD02rZPqc0TyXiX12iAWlvJxzl4B2nhw3H7DrmTTG6s",
  },
  {
    name: "Will",
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQEk0Ov3gKxHFA/profile-displayphoto-shrink_800_800/0/1706880524301?e=1724889600&v=beta&t=dgXd92bHc-AddPBNIe5P2qexal_Ya4aMy9QkP-OVOyw",
  },
  {
    name: "Kevin",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQGJNroiJhUdvQ/profile-displayphoto-shrink_800_800/0/1580776432079?e=1725494400&v=beta&t=ER6IrZfVoq99gWqEd7bpUgdDJjd7bfIc6oYqneI9tnc",
  },
  {
    name: "Roth",
    imageUrl: "https://avatars.githubusercontent.com/u/6506631?v=4",
  },
];

const swimlanes: Swimlane[] = [
  {
    name: "Honya's Bright Ideas",
    description:
      "Someone had an idea for a trip and we really want to all go. Or else :-)",
    color: "bg-red-500",
    trips: [
      {
        name: "Small Road Trip",
        location: "Savannah, GA",
      },
      {
        name: "International Trip",
        location: "Canada",
      },
      {
        name: "Hiking Trip",
        location: "Machu Picchu, Peru",
        date: "August",
        description: "Honya is going backpacking through Machu Picchu! ️🦙✨",
      },
      {
        name: "Seattle Trip",
        location: "Cape Flattery, WA",
      },
    ],
  },
  {
    name: "Dating Phase",
    description:
      "We know we're going somewhere, but we're still working out the dates.",
    color: "bg-indigo-500",
  },
  {
    name: "Lodging Booked",
    description:
      "We're past the dating phase and now we're officially moving in.",
    color: "bg-sky-500",
    trips: [
      {
        name: "Glamping in Yurts",
        location: "Sky Ridge Yurts (Bryson City, NC)",
        date: "Aug 30, 2024 - Sep 2, 2024",
        participants: users.slice(0, 5),
      },
    ],
  },
  {
    name: "Planned",
    description: "We've started using Google Calendar. *shudders*",
    color: "bg-emerald-500",
    trips: [
      {
        name: "De Leon Springs",
        location: "De Leon Springs State Park (FL)",
        date: "July 6, 2024",
        description: "Day trip! 🥞🏊",
        participants: users,
      },
    ],
  },
  // {
  //   name: "Planned",
  //   description: "We've started using Google Calendar. *shudders*",
  //   color: "bg-emerald-500",
  //   trips: [
  //     {
  //       name: "De Leon Springs",
  //       location: "De Leon Springs State Park (FL)",
  //       date: "July 6, 2024",
  //       description: "Day trip! 🥞🏊",
  //       participants: users,
  //     },
  //   ],
  // },
];

const board: Board = {
  name: "All of Us, Everywhere, All at Once",
  users: users,
  swimlanes: swimlanes,
};

export function getData(): Board {
  return board;
}
