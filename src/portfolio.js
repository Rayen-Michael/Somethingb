/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 5000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rayen Michael",
  title: "Hey There!, I'm Rayen",
  subTitle: emoji(
    "A Passionate Frontend Developer 🚀 With Extensive Experience In Mobile Applications Development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1f40OeS0aruCJhnwtIAx7STkdpCSmpFKV/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RayenMichael",
  linkedin: "https://www.linkedin.com/in/rayen-michael-504889218/",
  gmail: "Rayenmike2010@gmail.com",
  facebook: "https://www.facebook.com/rayen.michael.10",
  stackoverflow: "https://stackoverflow.com/users/14309397/rayen-michael?tab=profile",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle: "A Lion Who Loves Exploring New Technology and Creating Amazing Solutions",
  skills: [
    emoji(
      "⚡ Expertise in Frontend / User Interfaces for both Web and Mobile Applications"
    ),
    emoji("⚡ Building Progressive Web Applications ( PWA ) with SPA and multi-stack technologies"),
    emoji(
      "⚡ Integration of third-party services like Firebase, REST API, and more"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Android-Java",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fa fa-flutter"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fa fa-dart-lang"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Contributed to various groundbreaking research projects in AI and Data Science.",
      descBullets: [
        "Published papers on Artificial Intelligence and Machine Learning",
        "Participated in global hackathons and research competitions"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Gained deep knowledge in Software Engineering, Security, and Cloud Computing.",
      descBullets: ["Graduated with honors, top 10% of the class"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-end", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lead the development of new features in Facebook's mobile app with a focus on user experience and scalability.",
      descBullets: [
        "Collaborated with cross-functional teams to improve app performance",
        "Implemented robust solutions for large-scale applications"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Enhanced user interface design and optimized page load time, improving overall site performance."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Worked on the development of new features for the Airbnb platform with an emphasis on API integration."
    }
  ]
};

// Open Source Section

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS I HAVE DEVELOPED AND PRACTICED",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "A health tracking platform built for seamless user experience and medical management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "A platform designed to simplify the process of job searching and recruitment.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Awards, Certifications, and Cool Stuff I've Achieved!",

  achievementsCards: [
    {
      title: "Kotlin Developer Certification",
      subtitle:
        "Certified in Kotlin for Android Development with strong expertise in Java for Android applications. Certified from Russian Culture Center",
      image: require("./assets/images/codeInLogo.png"),
      footerLink: [
        {
          name: "PICTURE",
          url: "https://drive.google.com/file/d/13Et50uVCsWL-LriPIfN-Tng8hOPGFB92/view"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love writing about technology and sharing knowledge with others.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "A quick guide on creating a Google Assistant Action and winning rewards!"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React has become one of the most popular libraries for frontend development. Here's why!"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Sharing knowledge and learning from others!"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I Love Discussing Technology and My Journey!",

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in working together? Or just want to say hi? Reach out to me!",
  number: "+201204543684",
  email_address: "Rayenmike2010@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
