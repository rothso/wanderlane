const users: User[] = [
  {
    name: "Ang",
    imageUrl:
      "https://media.discordapp.net/attachments/793693131311808543/1274053553823944764/1274042325105901578remix-1723828436427.png?ex=66c0da56&is=66bf88d6&hm=ff6a870b5ec46530f1a680121cdadeb63f39baf53cc93b77db1dcfebf9a1a72e&=&format=webp&quality=lossless&width=100&height=100",
  },
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
        date: "2025",
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
    trips: [
      {
        name: "Universal Orlando",
        description: "Ang's birthday party 🥳",
        location: "Universal Orlando Resort",
        date: "Nov 1, 2024 - Nov 2, 2024",
        participants: users.filter((u) =>
          ["Lili", "Roth", "Chris", "Ang"].includes(u.name)
        ),
      },
    ],
  },
  {
    name: "Lodging Booked",
    description:
      "We're past the dating phase and now we're officially moving in.",
    color: "bg-sky-500",
  },
  {
    name: "Planned",
    description: "We've started using Google Calendar. *shudders*",
    color: "bg-emerald-500",
    trips: [
      {
        name: "Glamping in Yurts",
        location: "Sky Ridge Yurts (Bryson City, NC)",
        date: "Aug 30, 2024 - Sep 2, 2024",
        participants: users,
      },
    ],
  },
  {
    name: "We Made It",
    description: "We'll never forget those nights we spent together.",
    color: "bg-stone-500",
    trips: [
      {
        name: "De Leon Springs",
        location: "De Leon Springs State Park (FL)",
        date: "July 6, 2024",
        description: "Day trip! 🥞🏊",
        participants: users.filter((u) => !["Will", "Ang"].includes(u.name)),
      },
    ],
  },
];

const board: Board = {
  name: "All of Us, Everywhere, All at Once",
  users: users,
  swimlanes: swimlanes,
};

export function getData(): Board {
  return board;
}
