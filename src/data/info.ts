export const info = {
  baseUrl: "https://vishalrsharma.dev/",
  name: "Vishal Sharma",
  jobDescription: "Full Stack Engineer",
  about: `Experienced Senior Software Engineer with a demonstrated history of
  working in the information technology and services industry. Currently
  enrolled for the Master's program in Computer Science at San Francisco
  State University.
  `,

  experience: [
    {
      name: "Privacera",
      location: "Fremont, CA, USA 🇺🇸",
      startDate: "Jun 2022",
      endDate: "Jun 2023",
      description: [
        "🤖 ML product: NextJS, Flask, MongoDB.",
        "🚀 Optimized backend algorithms for scalability.",
        "💬 Deployed chatbot for 20% higher resolution rate.",
        "🤝 Collaborated for polished UX, meeting requirements.",
        "☁️ Optimized cloud services for 10% cost reduction.",
      ],
    },
    {
      name: "Persistent Systems",
      location: "Goa, India 🇮🇳",
      startDate: "Jul 2019",
      endDate: "Jul 2021",
      description: [
        "👥 Mentored devs, 30% code quality boost.",
        "🔍 Code reviews for 25% quality improvement.",
        "🚀 Collaborated for innovative solutions, 15% user satisfaction increase.",
        "⏰ Managed large-scale web app, meeting 90% milestones.",
        "🔄 Agile and TDD methodologies for better cycles.",
      ],
    },
    {
      name: "Analog Devices",
      location: "Bangalore, India 🇮🇳",
      startDate: "Feb 2018",
      endDate: "Aug 2018",
      description: [
        "🔍 Developed solution for electric grid efficiency.",
        "🏆 Led team, won 1st place in Anveshan Fellowship.",
        "🤝 Collaborated for project success, high-quality results.",
        "💡 Strong problem-solving skills for effective solutions.",
        "📢 Communicated effectively for clear expectations.",
      ],
    },
  ],

  education: [
    {
      name: "San Francisco State University",
      location: "San Francisco, CA",
      startDate: "2021",
      endDate: "2023",
      description: ["Master of Science, Computer Science"],
    },
    {
      name: "Goa College of Engineering",
      location: "Goa, India",
      startDate: "2015",
      endDate: "2019",
      description: ["Bachelor of Engineering, Computer Engineering"],
    },
  ],

  socialMedia: {
    twitter: "https://twitter.com/vishals9711",
    github: "https://github.com/vishals9711",
    email: "mailto:vishalsharma1907@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishals9711/",
  },

  projects: [
    {
      title: "Covid Dashboard",
      isFeatured: false,
      thumbnail: null,
      url: "https://coviddashboardgoa.sygence.in/",
      desc: "A covid dashboard outlining the different trends and numbers for different talukas and districts, built for the state of Goa, India.",
      technologies: ["Angular", "Ant Design", "Swimlane Charts"],
    },
    {
      title: "Vaccination Slot Alert",
      isFeatured: false,
      thumbnail: null,
      githubUrl: "https://github.com/vishals9711/cowin_notifier",
      url: "https://vaccineslotalert.in/",
      desc: "A web portal that can create Vaccination slot Alerts in India and notify via email or Text SMS when slots open up.",
      technologies: ["ReactJS", "Firebase SDK", "Twilio", "AWS"],
    },
    {
      title: "Food Reservation",
      isFeatured: false,
      thumbnail: null,
      url: "https://github.com/vishals9711/FoodReservation",
      desc: "A PWA wherein people can reserve tables at a restaurant, order food, pay bills thereby reducing contact and saving time for the restaurant and the customer.",
      technologies: ["Ionic", "ExpressJS", "Typescript", "MYSQL"],
    },
    {
      title: "Power, Energy and Machine Analyzer",
      isFeatured: false,
      thumbnail: null,
      githubUrl: "https://github.com/vishals9711/Anveshan",
      desc: "An all-in-one solution to monitor the electric grid & industrial machinery. This project done as part of Fellowship for Analog Devices (Anveshan).",
      technologies: ["Angular", "Embedded C", "IBM Bluemix"],
    },
    {
      title: "BotBoulevard",
      isFeatured: true,
      thumbnail: "https://www.botboulevard.net/favicon.svg",
      githubUrl: "https://github.com/botboulevard",
      url: "https://www.botboulevard.net/",
      desc: "Supercharge Your Daily Activities",
      technologies: [], // Add relevant technologies if available
    },
  ],
};
