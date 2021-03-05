import BullyingAndHorror from "../assets/artPortImages/dbBullyingAndHorror.jpg";
import CaliforniaFires from "../assets/artPortImages/dbCartoonCaliforniaFires.jpg";
import dino from "../assets/artPortImages/dino.jpg";
import Dolphins from "../assets/artPortImages/dbCartoonDolphins.jpg";
import FoxTheater from "../assets/artPortImages/dbCentFoxTheater.jpg";
import JanssDome from "../assets/artPortImages/dbCentJanssDome.jpg";
import jitterbug from "../assets/artPortImages/jitterbug.jpg";
import SponsorshipCover from "../assets/artPortImages/exploretechlaSponsorshipCover.png";
// import tbCover from "../assets/artPortImages/tbCover.png";
// import tbFigureEightOne from "../assets/artPortImages/tbFigureEightOne.png";
// import tbFigureEightTwo from "../assets/artPortImages/tbFigureEightTwo.png";
// import tbFigureSevenOne from "../assets/artPortImages/tbFigureSevenOne.png";
import threeYears from "../assets/artPortImages/threeYears.jpg";
import UnConnon from "../assets/artPortImages/dbUnConnon.jpg";
import UnnecessaryFees from "../assets/artPortImages/dbCartoonUnnecessaryFees.jpg";
import WhyDoesOilSplash from "../assets/artPortImages/dbWhyDoesOilSplash.jpg";
import VirtualOrientation from "../assets/artPortImages/dbCartoonVirtualOrientation.jpg";

import atlassian from "../assets/logos/atlassian.png";
import calculator from "../assets/logos/calculator.png";
import dailyBruin from "../assets/logos/dailyBruin.png";
import dungeonDelver from "../assets/logos/dungeonDelver.png";
import enfinite from "../assets/logos/enfinite.jpg";
import epitome from "../assets/logos/epitome.jpg";
import juni from "../assets/logos/juni.png";
import mitPress from "../assets/logos/mitPress.png";
import peachpay from "../assets/logos/peachpay.png";
import quarantime from "../assets/logos/quarantime.png";
import spirals from "../assets/logos/spirals.png";
import sportsstore from "../assets/logos/sportsstore.jpg";
import uclaMath from "../assets/logos/uclaMath.png";

export const WorkExpList = [
  {
    name: "Atlassian",
    logo: atlassian,
    location: "New York, NY",
    url: "https://www.atlassian.com/",
    positions: [
      {
        title: "Frontend Engineer Intern",
        duration: "",
        description: [
          "Will contribute in 2021",
        ],
      },
    ],
  },
  {
    name: "Juni Learning",
    logo: juni,
    location: "San Francisco, CA",
    url: "https://junilearning.com/",
    positions: [
      {
        title: "Computer Science Instructor",
        duration: "December 2020 - Present",
        description: [
          "Virtually taught Python, C++, and Javascript to students K-12",
        ],
      },
    ],
  },
  {
    name: "PeachPay, Inc",
    logo: peachpay,
    location: "Ames, IA",
    url: "https://peachpay.app/",
    positions: [
      {
        title: "Frontend Engineering & Design Intern",
        duration: "August 2020 - December 2020",
        description: [
          "Lead a project to redesign the company website to attract more users and businesses",
          "Built a new user interface for the mobile app increasing user engagement by 20%",
          "Worked on company branding with the growth team, helping them receive a $100k investment",
          "Redesigned visual assets including logos, graphics, and promotional artwork",
          "Built new checkpoints for unit testing, enhancing the efficiency in which the team outputs code",
        ],
      },
    ],
  },  
  {
    name: "The Daily Bruin",
    logo: dailyBruin,
    location: "UCLA, Los Angeles, CA",
    url: "https://dailybruin.com/author/kyle-icban",
    positions: [
      {
        title: "Senior Editorial Cartoonist",
        duration: "October 2018 - December 2020",
        description: [
          "Provided creative perspectives on newsworthy topics on human rights, social issues, and student life",
        ],
      },
      {
        title: "Cartoons Beat Manager",
        duration: "May 2019 - May 2020",
        description: [
          "Lead a group of 10 cartoonist to create commentary about events around the UCLA campus",
          "Guided illustrators and cartoonists to produce award winning content in both print and digital platforms",
        ],
      },
    ],
  },
  {
    name: "Enfinite Technologies",
    logo: enfinite,
    location: "Los Angeles, CA",
    url: "https://www.enfinitetech.com/",
    positions: [
      {
        title: "Full Stack Engineering Intern",
        duration: "August 2020 - October 2020",
        description: [
          "Developed a dashboard to post data into Amazon DynamoDB, allowing clients to submit their own data",
          "Built database infrastructure and wrote APIs for multiple projects ",
          "Programmed a custom plugin to better handle large amounts of data on Grafana",
        ],
      },
    ],
  },
  {
    name: "MIT Press",
    logo: mitPress,
    location: "Cambridge, MA",
    url: "https://mitpress.mit.edu/",
    positions: [
      {
        title: "Graphic Designer",
        duration: "April 2020 - July 2020",
        description: [
          "Worked with Professor Achuta Kadambi and Professor Ayush Bhandari to design figures for their textbook",
          "Communicated with the research group to confirm that the scientific information is accurate",
          "Depicted complex scientific topics in each figure, such as Rayleigh scattering and birefringence",
        ],
      },
    ],
  },
  {
    name: "UCLA Mathematics",
    logo: uclaMath,
    location: "UCLA, Los Angeles, CA",
    url: "https://ww3.math.ucla.edu/",
    positions: [
      {
        title: "Math Grader",
        duration: "October 2019 - July 2020",
        description: [
          "Exercised impressive time management skills by grading 210 assignments from students each week",
          "Developed great relationships with world-renowned professors by maintaining close communication in the mathematics department",
          "Demonstrated a strong background in lower-division mathematics courses to accurately evaluate students performance in the course",
        ],
      },
    ],
  },
  // {
  //   name: "Epitome Academy",
  //   logo: epitome,
  //   location: "Diamond Bar, CA",
  //   url: "https://www.epitomeacademy.com/",
  //   positions: [
  //     {
  //       title: "Math and English Teacher",
  //       duration: "June 2019 - September 2019",
  //       description: [
  //         "Strengthened leadership skills by running a class of 12 elementary school students",
  //         "Demonstrated effective communication and patience with special needs children",
  //         "Improved children's letter grades in subjects by an average of 10%",
  //       ],
  //     },
  //   ],
  // },
];

export const ProjectList = [
  {
    name: "Generative Art",
    logo: spirals,
    url: "https://github.com/kyleicban/generative-art",
    description: [
      "Created an ongoing project that uses code to autonomously generate artwork",
      "Used the p5 library in Javascript and turtle library in Python",
    ],
  },
  {
    name: "Dungeon Delver",
    logo: dungeonDelver,
    url: "https://github.com/kyleicban/Dungeon-Delver",
    description: [
      "Created an adventure game ran on the console (.exe available for download on GitHub)",
      "Demonstrated knowledge of object oriented programming, recursion algorithms, and class inheritance",
    ],
  },
  {
    name: "Sport Store Application",
    logo: sportsstore,
    url: "https://github.com/kyleicban/Sport-Store-Application",
    description: [
      "Developed a data store mimicking a company store website and checkout process",
      "Integrated Routing, REST API, Pagination, and Login Authentication using React",
    ],
  },
  {
    name: "GPA Calculator",
    logo: calculator,
    url: "https://github.com/kyleicban/GPA-Calculator",
    description: [
      "Developed a responsive calculator with warning and error indicators",
      "Showcased fundamental understanding on navigating the DOM using vanilla Javascript",
    ],
  },
  {
    name: "Quarantime",
    logo: quarantime,
    url: "https://devpost.com/software/quarantime-j1d7lp",
    description: [
      "Designed a mobile app for the LA Hacks 2020 to educate people about the CoronaVirus and sustainability practices",
      "Incorporated user reseach, wireframing and A/B Testing in the development process",
    ],
  },
];

export const ArtPortImages = [
  {
    art: SponsorshipCover,
    caption:
      "Cover design for exploretech.la for the Sponsorship Packet to be shown to companies.",
  },
  // {
  //   art: tbCover,
  //   caption:
  //     'Conceptual design for a textbook about how humanity\'s next "Einstein" will most likely be a robot.',
  // },
  // {
  //   art: tbFigureEightOne,
  //   caption:
  //     "Multi-part figure describing (a) what a wavelength is, (b) the electromagnetic spectrum, (c) how cameras can selectively filter light, and (d) what spectral imaging is.",
  // },
  // {
  //   art: tbFigureEightTwo,
  //   caption: "A figure answering the question: Why is the sky blue?",
  // },
  // {
  //   art: tbFigureSevenOne,
  //   caption:
  //     "A figure attempting to explain how vikings used birefringence to navigate around.",
  // },
  {
    art: FoxTheater,
    caption:
      "An illustration of Fox Theater in Westwood Village for UCLA's Centennial Edition.",
  },
  {
    art: JanssDome,
    caption:
      "An illustration of Janss Dome in Westwood Village for UCLA's Centennial Edition.",
  },
  {
    art: UnConnon,
    caption:
      "Posted on the Daily Bruin’s Instagram story for a sports article describing athletes’ reluctance to commit to UCLA.",
  },
  {
    art: BullyingAndHorror,
    caption:
      'Drawn for QUAD article comparing the film Ma to other films that have "bullying" subplots.',
  },
  {
    art: WhyDoesOilSplash,
    caption:
      "Drawn for QUAD article about the science of cooking fried chicken, i.e. the chemistry involved with deep frying.",
  },
  {
    art: Dolphins,
    caption:
      "An editorial cartoon criticizing the reopening of beaches in California.",
  },
  {
    art: VirtualOrientation,
    caption:
      "An editorial cartoon commenting on the difficulty a virtual orientation for incoming UCLA freshman could pose.",
  },
  {
    art: CaliforniaFires,
    caption:
      "An editorial cartoon commenting on classroom leniency amidst the California fires in 2020.",
  },
  {
    art: UnnecessaryFees,
    caption:
      "An editorial cartoon criticizing how students still have to pay for on campus ammenities despite hosting remote instruction.",
  },
  {
    art: jitterbug,
    caption:
      "An album cover for a snazzy jazz song by musician, Zack Berger, from UCLA.",
  },
  {
    art: threeYears,
    caption:
      "A digital image I drew for my girlfriend for our 3 year anniversary.",
  },
  {
    art: dino,
    caption:
      "This is the first digital image I drew on my laptop. It is still my most favorite illustration.",
  },
];
