/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Adarsh Kumar",
  title: "Hi all, I'm Adarsh",
  subTitle: emoji(
    "An Aspiring Full Stack Developer 🚀 with strong skills in Data Structures, Algorithms, and Web Development. Experienced in building and deploying scalable applications using React.js, Python (Flask), and Supabase."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_uUDN1rdJUJmIeusi9y_NVYViCQu_3vA/view?usp=sharing", // Set to non-empty to show the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mishraadarsh27",
  linkedin: "https://linkedin.com/in/adarsh-mishra-9b394b28b/",
  gmail: "adarsh22mishra@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Experience in building and deploying scalable applications using React.js and Python (Flask)"),
    emoji(
      "⚡ Skilled in REST API development, CRUD operations, authentication, and responsive design"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "cpp",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Oriental Institute of Science and Technology",
      logo: "",
      subHeader: "B.Tech in Computer Science & Engineering",
      duration: "May 2023 - Present",
      desc: "CGPA: 7.07",
      descBullets: [
        "Specializing in Computer Science and Engineering",
        "Active involvement in technical projects and development"
      ]
    },
    {
      schoolName: "Don Bosco Convent School",
      logo: "",
      subHeader: "Class XII",
      duration: "2022",
      desc: "Jhanjharpur, Bihar",
      descBullets: []
    },
    {
      schoolName: "Don Bosco Convent School",
      logo: "",
      subHeader: "Class X",
      duration: "2020",
      desc: "Jhanjharpur, Bihar",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE BUILT",
  projects: [
    {
      image: "",
      projectName: "MediParse AI",
      projectDesc: "Developed an AI-powered medical report parser to extract and summarize health insights. Designed a responsive React.js interface improving user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mediparse-ai.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/mishraadarsh27/mediparse-ai"
        }
      ]
    },
    {
      image: "",
      projectName: "Safe Transit",
      projectDesc: "Built a transportation platform with route tracking and user interaction features. Implemented responsive UI design ensuring cross-device compatibility.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://safe-journey-hub.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/mishraadarsh27/safe-journey-hub"
        }
      ]
    },
    {
      image: "",
      projectName: "Monad Polls",
      projectDesc: "Developed a real-time polling platform with dynamic UI components. Implemented voting and result visualization features.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://monad-polls.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/mishraadarsh27/monad-polls"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Java Full Stack Development",
      subtitle: "EduSkills (AICTE Certified)",
      image: "https://eduskillsfoundation.org/wp-content/uploads/2022/09/LOGO_EduSkills.png",
      imageAlt: "EduSkills Logo",
      footerLink: []
    },
    {
      title: "AI Foundation",
      subtitle: "Oracle",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Programming in Java (Elite)",
      subtitle: "NPTEL",
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQHJZGa_G2gwUg/company-logo_200_200/company-logo_200_200/0/1631333024279?e=2147483647&v=beta&t=WO-NzMSDCnOM3mAn4uNs-_WlQvA67CyOND1RuB7R_kU",
      imageAlt: "NPTEL Logo",
      footerLink: []
    },
    {
      title: "Junior Cybersecurity Analyst",
      subtitle: "Cisco",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Cisco_logo-1000px.png",
      imageAlt: "Cisco Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7482068656",
  email_address: "adarsh22mishra@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
