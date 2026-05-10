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
    "A Full Stack Developer 🚀 specializing in Python Web Development & React.js. I build fast, clean, and scalable web applications — from robust backends (Flask, Django, FastAPI) to pixel-perfect frontends."
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
  leetcode: "https://leetcode.com/i_adarshmishra",
  gfg: "https://auth.geeksforgeeks.org/user/adarsh22mishra",
  whatsapp: "https://wa.me/917482068656",
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
  title: "Technical Prowess",
  subTitle: "My core technical stack",
  skills: [
    emoji(
      "⚡ Architecting scalable Python backends with Flask, FastAPI & Django — powering RESTful APIs with JWT/OAuth2 security"
    ),
    emoji(
      "⚡ Building pixel-perfect React.js frontends with dynamic state management and seamless full-stack integrations"
    ),
    emoji(
      "⚡ Deploying cloud-native apps on Vercel & Supabase with Docker-powered CI/CD pipelines for zero-downtime releases"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-django"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
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
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
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
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/OIST_Bhopal_Logo.png",
      subHeader: "B.Tech in Computer Science & Engineering",
      duration: "May 2023 - Present",
      desc: "CGPA: 8.41",
      descBullets: [
        "Specializing in Computer Science and Engineering",
        "Active involvement in technical projects and development"
      ]
    },
    {
      schoolName: "Don Bosco Convent School",
      logo: "https://dbcsjhanjharpur.edu.in/images/logo.png",
      subHeader: "Class XII",
      duration: "2022",
      desc: "Jhanjharpur, Bihar",
      descBullets: []
    },
    {
      schoolName: "Don Bosco Convent School",
      logo: "https://dbcsjhanjharpur.edu.in/images/logo.png",
      subHeader: "Class X",
      duration: "2020",
      desc: "Jhanjharpur, Bihar",
      descBullets: []
    }
  ]
};

// Skill chips grouped by category

const techStack = {
  viewSkillBars: false, // Disabled — using skill chips instead
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false,
  // Grouped skill chips for the new UI
  skillGroups: [
    {
      category: "Backend",
      icon: "fas fa-server",
      color: "#3a7bd5",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "Flask", icon: "fas fa-flask" },
        { name: "FastAPI", icon: "fas fa-bolt" },
        { name: "Django", icon: "fas fa-layer-group" },
        { name: "REST APIs", icon: "fas fa-exchange-alt" },
        { name: "JWT Auth", icon: "fas fa-lock" }
      ]
    },
    {
      category: "Frontend",
      icon: "fas fa-desktop",
      color: "#6c63ff",
      skills: [
        { name: "React.js", icon: "fab fa-react" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "Tailwind CSS", icon: "fab fa-css3" },
        { name: "SCSS", icon: "fab fa-sass" }
      ]
    },
    {
      category: "Languages",
      icon: "fas fa-code",
      color: "#00d2ff",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "C++", icon: "fas fa-code" },
        { name: "Java", icon: "fab fa-java" },
        { name: "SQL", icon: "fas fa-database" }
      ]
    },
    {
      category: "Tools & Cloud",
      icon: "fas fa-tools",
      color: "#43ce57",
      skills: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "MySQL", icon: "fas fa-server" },
        { name: "Supabase", icon: "fas fa-cloud" },
        { name: "Vercel", icon: "fas fa-rocket" }
      ]
    }
  ]
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
  subtitle: "Real-world problems I solved with code",
  projects: [
    {
      image: "",
      projectName: "MediParse AI",
      projectDesc:
        "An AI-driven platform that parses complex medical reports and extracts key health metrics — solving the problem of unreadable medical documents for patients and doctors alike.",
      techTags: ["React.js", "Python", "Flask", "AI/ML", "Vercel"],
      footerLink: [
        {
          name: "Live Demo",
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
      projectDesc:
        "A smart transit management system that solves commuter safety and route-tracking challenges with real-time data processing and a cross-device responsive interface.",
      techTags: ["React.js", "Node.js", "REST API", "Supabase"],
      footerLink: [
        {
          name: "Live Demo",
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
      projectDesc:
        "A decentralized polling platform on the Monad blockchain, providing transparent and tamper-proof voting with real-time result aggregation and a modern UI.",
      techTags: ["React.js", "Blockchain", "Monad", "JavaScript"],
      footerLink: [
        {
          name: "Live Demo",
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
      image:
        "https://eduskillsfoundation.org/wp-content/uploads/2022/09/LOGO_EduSkills.png",
      imageAlt: "EduSkills Logo",
      footerLink: []
    },
    {
      title: "AI Foundation",
      subtitle: "Oracle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Programming in Java (Elite)",
      subtitle: "NPTEL",
      image:
        "https://raw.githubusercontent.com/mishraadarsh27/my-portfolio/main/src/assets/images/nptel_logo.png",
      imageAlt: "NPTEL Logo",
      footerLink: []
    },
    {
      title: "Junior Cybersecurity Analyst",
      subtitle: "Cisco",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/Cisco_logo-1000px.png",
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
  title: emoji("Contact Me 📬"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "", // hidden — WhatsApp button kept below
  email_address: "adarsh22mishra@gmail.com",
  whatsapp_link: "https://wa.me/917482068656"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

const competitiveProgramming = {
  title: "Competitive Programming",
  subtitle: "ANALYTICS & CODING PROFILES",
  display: true,
  profiles: [
    {
      platform: "LeetCode",
      username: "i_adarshmishra",
      profileLink: "https://leetcode.com/i_adarshmishra",
      solved: 275,
      easy: 145,
      medium: 114,
      hard: 16,
      rating: "1596",
      ranking: "208,004 (Global)",
      topics: ["Array", "String", "Hash Table", "DP"],
      languages: ["C++", "Java", "Python"]
    },
    {
      platform: "GeeksforGeeks",
      username: "adarsh22mishra",
      profileLink: "https://auth.geeksforgeeks.org/user/adarsh22mishra",
      solved: 295,
      easy: 92, // Basic (13) + Easy (79)
      medium: 170,
      hard: 33,
      score: "1105",
      ranking: "53 (Institute Rank)",
      topics: ["Tree", "Array", "DP", "Matrix", "Strings"],
      languages: ["C++", "Java"]
    }
  ]
};

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
  competitiveProgramming,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
