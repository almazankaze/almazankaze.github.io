import TeddyGame from "../images/TeddyGame.PNG";
import GradeTracker from "../images/gradetrack.png";
import Ani from "../images/anisearch.PNG";
import Pomo from "../images/pomodoro.PNG";
import Budget from "../images/budget.PNG";
import Birthday from "../images/birthday.PNG";

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
    title: "Budget Tracker",
    img: Budget,
    projectLink: "https://almabudgetapp-45a33f.netlify.app/",
    gitLink: "https://github.com/almazankaze/budgetTracker",
    description:
      "Made an app to help me keep track of how much I am spending and commit to a budget.",
  },
  {
    id: 3,
    title: "Anime Database",
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
    title: "Pomodoro App",
    img: Pomo,
    projectLink: "https://ja-my-pomo-app.netlify.app/",
    gitLink: "https://github.com/almazankaze/pomodoro/tree/main/pomo-app",
    description:
      "Inspired by the pomodoro technique, helps me breakup my work into chunks and complete it in a timely fashion.",
  },
];

export default myProjects;
