import TeddyGame from "../images/TeddyGame.PNG";
import GradeTracker from "../images/gradetrack.png";
import Ani from "../images/anisearch.jpg";
import Pomo from "../images/pomodoro.jpg";
import Poke from "../images/pokeClone.jpg";
import Birthday from "../images/birthday.jpg";
import WebTech from "../images/webtech.png";

export const myProjects = [
  {
    id: 1,
    title: "Staying Alive",
    img: TeddyGame,
    projectLink: "https://youtu.be/GxPSZ6UuVGM",
    gitLink: "https://github.com/almazankaze/cs426Proj",
    description:
      "Done as part of a team for a class where you play as a robot that must survive the night from a horde of teddy bears.",
  },
  {
    id: 2,
    title: "Poke Clone",
    img: Poke,
    projectLink: "https://mypokeclone.netlify.app/",
    gitLink: "https://github.com/almazankaze/Pokemon_battle",
    description:
      "Created a clone of the original Pokemon game to play when I am bored.",
  },
  {
    id: 3,
    title: "Anime Site",
    img: Ani,
    projectLink: "https://an1search.netlify.app/",
    gitLink: "https://github.com/almazankaze/animeWiki",
    description:
      "Pulls data from an API and displays it to the user where they can find their next Anime to watch.",
  },
  {
    id: 4,
    title: "Grade Tracker",
    img: GradeTracker,
    projectLink: "https://youtu.be/NWHj1km2aVU",
    gitLink: "https://github.com/almazankaze/GradeTracker",
    description:
      "Created a program with a UI which kept track of my grades during college.",
  },
  {
    id: 5,
    title: "Birthday Board",
    img: Birthday,
    projectLink: "https://ja-birthday-mern.com/",
    gitLink: "https://github.com/almazankaze/BirthdayWebsite",
    description:
      "User can create a page for a friend's birthday. Other friends can then go on there and wish him/her a happy birthday!",
  },
  {
    id: 6,
    title: "Pomodoro",
    img: Pomo,
    projectLink: "https://ja-my-pomo-app.netlify.app/",
    gitLink: "https://github.com/almazankaze/pomodoro/tree/main/pomo-app",
    description:
      "Inspired by the pomodoro technique, helps me breakup my work into chunks and complete it in a timely fashion.",
  },
  {
    id: 7,
    title: "Ecommerce Site",
    img: WebTech,
    projectLink: "https://ecommerce-learn-proj.netlify.app/",
    gitLink: "https://github.com/almazankaze/techWeb",
    description: "Simple ecommerce site that sells tech stuff.",
  },
];

export default myProjects;
