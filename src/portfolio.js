/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

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
  title: "Hello, I'm Rayen 👋",
  subTitle: emoji(
    "A Passionate Developer With Expertise In Mobile & Web Apps 🚀 – Crafting Seamless Experiences Since 2019."
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
  // Instagram, Twitter, and Kaggle are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Expertise",
  subTitle: "Innovative, Efficient, and Always Learning.",
  skills: [
    emoji(
      "⚡ Building Interactive and Scalable Front-End and Back-End Solutions for Web and Mobile Applications."
    ),
    emoji("⚡ Progressive Web Apps (PWA) & SPA Stacks Integration."),
    emoji("⚡ Seamlessly Integrating Third-Party Services like Firebase, REST API, and More.")
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Android Java",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Russian Culture Center",
      logo: require("./assets/images/codeInLogo.png"),
      subHeader: "Kotlin Development Certification",
      duration: "March 2021 - Present",
      desc: "Gained a deep understanding of Kotlin for Android development, mastering core concepts and advanced features.",
      descBullets: [
        "Developed Android apps using Kotlin and Java.",
        "Explored Android architecture, APIs, and best practices."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "85%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Tech Innovators Inc.",
      companylogo: require("./assets/images/techInnovatorsLogo.png"),
      date: "June 2018 – Present",
      desc: "Developing and maintaining Android apps and scalable web applications.",
      descBullets: [
        "Leading mobile app development with Kotlin and Flutter.",
        "Collaborating on API integration for a seamless user experience."
      ]
    }
  ]
};

// Open Source Section to View Your Github Pinned Projects

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "Innovative Projects That Showcase My Skills.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "A healthcare app providing seamless access to wellness services.",
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
      projectDesc: "A platform designed to help individuals pursue their career goals.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆 "),
  subtitle:
    "Certifications, Awards, and Accomplishments That Reflect My Expertise and Dedication.",

  achievementsCards: [
    {
      title: "Android Developer Certification",
      subtitle:
        "Certified in Android Development (Kotlin/Java) by the Russian Culture Center, demonstrating proficiency in mobile app development.",
      image: require("./assets/images/codeInLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13Et50uVCsWL-LriPIfN-Tng8hOPGFB92/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Tech Insights",
  subtitle:
    "I love to share my learnings and experiences on software development, mobile app creation, and the tech world.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt & $200 in Google Cloud Credits",
      description:
        "Learn how to create a Google Assistant Action and win awesome rewards in under 30 minutes!"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why React is the Best?",
      description:
        "Explore why React.js is the go-to library for modern, scalable web applications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating or just want to say hello? My inbox is always open!",
  number: "+201204543684",
  email_address: "Rayenmike2010@gmail.com"
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
  contactInfo,
  isHireable
};
