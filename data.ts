import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Node JS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React JS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "VScode",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "GIT",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Jenkins",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "JIRA",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Confluence",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "MS Office",
    level: "90",
  },
];

export const projects: IProject[] = [
  { 
    id:0,
    name: "Food Order",
    description:
      "This is the food web. This react.js project is a webapp that enable users to order food online. The users can store their orders in a cart and order from there and see the amounts of dishes available and the quantities. This app has all the functionalities behavior, major and minor that an amazon website has.",
    image_path: "/images/food-web.PNG",
    deployed_url: "https://food-web-mu.vercel.app/",
    github_url: "https://github.com/TeamAbella060420/food-web",
    category: ["react"],
    key_techs: ["ReactJS", "JavaScript"],
  },
  { 
    id:1,
    name: "Simple Profile",
    description:
      "It helps a potential client understand what I am capable of, what tools I use and the extent of my expertise in the work I do",
    image_path: "/images/Simple Profile.PNG",
    deployed_url: "https://teamabella060420.github.io/Project-2-Official/#skills",
    github_url: "https://github.com/TeamAbella060420/Project-2-Official",
    category: ["HTML5&CSS3"],
    key_techs: ["HTML5", "CSS3"],
  },
  {
    id:2,
    name: "Full Stack Conf",
    image_path: "/images/Full Stack Conf.PNG",
    deployed_url: "https://teamabella060420.github.io/U9-Bootstrap-Basics/",
    github_url: "https://github.com/TeamAbella060420/U9-Bootstrap-Basics",
    category: ["Bootstrap"],
    description:
      "Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs. As a framework, Bootstrap includes the basics for responsive web development, so developers only need to insert the code into a pre-defined grid system."
      ,
    key_techs: ["Bootstrap, HTML5"],
  },

  {
    id:3,
    name: "Web Style Guide",
    image_path: "/images/Web-Style-Guide.PNG",
    deployed_url: "https://teamabella060420.github.io/Web-Style-Guide/#grid",
    github_url: "https://github.com/TeamAbella060420/Web-Style-Guide",
    category: ["SCSS"],
    description:
      "It facilitates you to write clean, easy and less CSS in a program construct. It contains fewer codes so you can write CSS quicker. It has very good documentation, meaning that you can get all the required information online. It provides nesting so you can use nested syntax.",
    key_techs: [
      "SCSS",
      "HTML5&CSS3",
    ],
  },

  {
    id:4,
    name: "My Biography",
    image_path: "/images/Basic Biography.PNG",
    deployed_url: "https://teamabella060420.github.io/techdegree-project-1/index.html",
    github_url: "https://github.com/TeamAbella060420/techdegree-project-1",
    category: ["HTML5&CSS3"],
    description:
      "This is my first website when I learned the basics of front end development which is HTML and CSS.",
    key_techs: ["HTML5&CSS3"],
  },

  {
    id:5,
    name: "Online Registration Form",
    image_path: "/images/online-registration.PNG",
    deployed_url: "https://teamabella060420.github.io/p3-online-registration-form/",
    github_url: "https://github.com/TeamAbella060420/p3-online-registration-form",
    category: ["HTML5&CSS3"],
    description:
      "This project is an Online Registration Form built by only HTML5 and CSS3",
    key_techs: ["HTML5&CSS3"],
  },

  {
    id:6,
    name: "Transition and Transform",
    image_path: "/images/3d-transform.PNG",
    deployed_url: "https://teamabella060420.github.io/U4-Transition-Transform-3D-2/",
    github_url: "https://github.com/TeamAbella060420/U4-Transition-Transform-3D-2",
    category: ["HTML5&CSS3"],
    description:
      "CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.",
    key_techs: ["HTML5&CSS3"],
  },
  {
    id:7,
    name: "Virtual Reality",
    image_path: "/images/Virtual Reality.PNG",
    deployed_url: "https://teamabella060420.github.io/U4-SASS-nestingmediaqueries/",
    github_url: "https://github.com/TeamAbella060420/U4-SASS-nestingmediaqueries",
    category: ["SCSS"],
    description:
      'Sass lets you nest media queries directly inside the initial rules your modifying. This keeps media queries local to the original selector, and makes writing and maintaining them easy',
    key_techs: [
      "SCSS",
      "HTML5&CSS3"
    ],
  },
  {
    id:8,
    name: "Purple Portfolio",
    image_path: "/images/Purple Portfolio.PNG",
    deployed_url: "https://teamabella060420.github.io/bootsrap-SASS/#portfolio",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["Bootstrap"],
    description:
      "Bootstrap includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the ! default flag and can be overridden and extended.",
    key_techs: ["Bootstrap", "SaSS"],
  },
  {
    id:9,
    name: "Transform Gallery",
    image_path: "/images/TransformGallery.PNG",
    deployed_url: "https://teamabella060420.github.io/U4-Transition-Transform-3/",
    github_url: "https://github.com/TeamAbella060420/U4-Transition-Transform-3",
    category: ["HTML5&CSS3"],
    description:
      "The effect of a CSS Transform is to modify the appearance of an element in the browser by translation, rotation or other means. When defined in a style sheet, transformations are applied as the page is rendered, so you don't actually see any animations taking place. Transforms can also be applied as a mouseover or similar effect which you can see in the next section.",
    key_techs: ["HTML5&CSS3"],
  },
  {
    id:10,
    name: "Transition Gallery",
    image_path: "/images/TransitionGallery.PNG",
    deployed_url: "https://teamabella060420.github.io/U4-Transition-Transform-3/",
    github_url: "https://github.com/TeamAbella060420/U4-Transition-Transform-3",
    category: ["HTML5&CSS3"],
    description:
      "CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. ",
    key_techs: ["HTML5&CSS3"],
  },
  {
    id:11,
    name: "Interactive Photo Gallery",
    image_path: "/images/Interactive.PNG",
    deployed_url: "https://teamabella060420.github.io/U5-Project-Interactive-Photo-Gallery/",
    github_url: "https://github.com/TeamAbella060420/U4-Transition-Transform-3",
    category: ["JavaScript"],
    description:
      "This project showcases a responsive image gallery with real-time search and baguetteBox to display a larger version of the image with a caption. I wrote JavaScript to allow users to do a real-time search, hiding images that do not have a caption to match the users search. The project uses minimal CSS by using grid for the image gallery.",
    key_techs: ["JavaScript", "HTML5", "CSS3",],
  },
  {
    id:12,
    name: "Pet Directory",
    image_path: "/images/Pet.PNG",
    deployed_url: "https://teamabella060420.github.io/U6-JavaScript-Build-an-Object-Challenge/",
    github_url: "https://github.com/TeamAbella060420/U6-JavaScript-Build-an-Object-Challenge",
    category: ["JavaScript"],
    description:
      "It's time to put my knowledge of JavaScript Objects to the test. In this website, I used JavaScript loops, arrays, and objects to create a script that builds a pet directory, then displays it on the page.",
    key_techs: ["JavaScript", "HTML5", "CSS3",],
  },
  {
    id:13,
    name: "My Day",
    image_path: "/images/DOM.PNG",
    deployed_url: "https://teamabella060420.github.io/U6-JavaScript-DOM/",
    github_url: "https://github.com/TeamAbella060420/U6-JavaScript-DOM",
    category: ["JavaScript"],
    description:
      "DOM manipulation is when you use JavaScript to add, remove, and modify elements of a website. DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from a website document.",
    key_techs: ["JavaScript", "HTML5", "CSS3",],
  },
  {
    id:14,
    name: "Let us Party",
    image_path: "/images/RSVP.PNG",
    deployed_url: "https://teamabella060420.github.io/U6-JavaScript-DOM-Scripting/",
    github_url: "https://github.com/TeamAbella060420/U6-JavaScript-DOM-Scripting",
    category: ["JavaScript"],
    description:
      "It's party time! You're planning a party, and you've sent invitations out. Now as the RSVP's come in, you need a way to keep track of who's coming. Let's look at the app we'll be building to manage that for us.",
    key_techs: ["JavaScript", "HTML5", "CSS3",],
  },
  {
    id:15,
    name: "Wheel of Success",
    image_path: "/images/game.PNG",
    deployed_url: "https://teamabella060420.github.io/U6-Game-Show-App/",
    github_url: "https://github.com/TeamAbella060420/U6-JavaScript-DOM-Scripting",
    category: ["JavaScript"],
    description:
      "This word-guessing game is built with JavaScript. Some JavaScript concepts you'll find underneath the hood including arrays, functions, loops, conditionals and events. Guess the phrase by selecting a letter on the screen's keyboard. You get 5 chances. Guess the phrase before you run out of turns! Guess 5 wrong letters and you lose the game.",
    key_techs: ["JavaScript", "HTML5", "CSS3",],
  },
];
