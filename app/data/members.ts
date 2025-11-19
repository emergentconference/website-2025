export interface Member {
  name: string;
  image: string;
}

export interface YearTeam {
  year: string;
  members: Member[];
}

export const teamMembers: YearTeam[] = [
  {
    year: "2025–26",
    members: [
      {
        name: "Amil Agrawal",
        image: "/team/amil.jpg",
      },
      {
        name: "Karsten Assoua",
        image: "/team/karsten.jpg",
      },
      {
        name: "Hadley Carr",
        image: "/team/hadley.jpg",
      },
      {
        name: "Lara Gamaleldin",
        image: "/team/lara.jpg",
      },
      {
        name: "Akshay Irudayaraj",
        image: "/team/akshay.jpg",
      },
      {
        name: "Malin Leven",
        image: "/team/malin.jpg",
      },
      {
        name: "Alex Mazansky",
        image: "/team/alex.jpg",
      },
      {
        name: "Everett Mokarow",
        image: "/team/everett.jpg",
      },
      {
        name: "Sami Nourji",
        image: "/team/sami.jpg",
      },
      {
        name: "Jameel Saeb",
        image: "/team/jameel.jpg",
      },
      {
        name: "A.J. Shulman",
        image: "/team/aj.jpg",
      },
    ],
  },
  {
    year: "Emergent Alums",
    members: [
      {
        name: "Lindsay Gould",
        image: "/team/lindsay.jpg",
      },
      {
        name: "Angie Osei-Ampadu",
        image: "/team/angie.jpg",
      },
      {
        name: "Sam Shulman",
        image: "/team/sam.jpg",
      },
      {
        name: "Erik Vank",
        image: "/team/erik.jpg",
      },
    ],
  },
];
