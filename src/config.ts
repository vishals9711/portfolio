import type {
	AboutPageContent,
	BlogPageContent,
	HomePageContent,
	Identity,
	NavBarLink,
	ProjectPageContent,
	SocialLink,
} from "./types/config";

export const identity: Identity = {
	name: "Vishal Sharma",
	logo: "/logo.webp",
	email: "vishalsharma1907@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "About",
		url: "/about",
	},
	{
		title: "Projects",
		url: "/projects",
	},
];

export const socialLinks: SocialLink[] = [
	{
		title: "GitHub",
		url: "https://github.com/vishals9711",
		icon: "/mdi--github.svg",
		external: true,
	},
	{
		title: "LinkedIn",
		url: "https://linkedin.com/in/vishals9711",
		icon: "/mdi--linkedin.svg",
		external: true,
	},
	{
		title: "Mail",
		url: "mailto:vishalsharma1907@gmail.com",
		icon: "/material-symbols--mail.svg",
	},
];

// Home (/)
export const homePageContent: HomePageContent = {
	seo: {
		title: "Vishal Sharma",
		description:
			"Software Engineer building products that blend code, creativity, and cool vibes.",
		image: identity.logo,
	},
	role: "Software Engineer & Product Builder",
	description:
		"I'm Vishal Sharma, a software engineer passionate about building digital products that combine smooth experiences, creativity, and cool vibes.",
	socialLinks: socialLinks,
	links: [
		{
			title: "Explore My Projects",
			url: "/projects",
		},
		{
			title: "Know More About Me",
			url: "/about",
		},
	],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
	seo: {
		title: "About | Vishal Sharma",
		description:
			"Software Engineer who loves building creative and interactive products.",
		image: identity.logo,
	},
	subtitle: "A bit about me",
	about: {
		description: `
I'm Vishal, a software engineer currently working at **The News Movement**, where I build scalable and innovative products using modern tech stacks. <br/><br/>
I have a deep passion for crafting intuitive user experiences, automating workflows, and building tools that help people do things faster and better. <br/><br/>
Recently, I've been working on products that automate content workflows, AI-powered summarization, and building high-impact applications for millions of users.`, // Markdown is supported
		image_l: {
			url: "/profile-1.jpg",
			alt: "Picture of Vishal working",
		},
		image_r: {
			url: "/profile-2.jpg",
			alt: "Another picture of Vishal",
		},
	},
	work: {
		description: `I've been fortunate to work with incredible teams and products that impact millions of users. Here's a snapshot of my journey so far:`, // Markdown is supported
		items: [
			{
				title: "Software Engineer",
				company: {
					name: "The News Movement",
					image: "/tnm-logo.webp",
					url: "https://www.thenewsmovement.com/",
				},
				date: "2023 - Present",
			},
			// {
			//   title: "Software Engineer",
			//   company: {
			//     name: "Freelance",
			//     image: "/freelance-logo.webp",
			//     url: "https://github.com/vishalramanand",
			//   },
			//   date: "2021 - 2023",
			// },
		],
	},
	connect: {
		description: `I'm always open to collaborating, brainstorming, or just talking about cool ideas in tech. Feel free to connect with me on any platform below.`, // Markdown is supported
		links: socialLinks,
	},
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
	seo: {
		title: "Projects | Vishal Sharma",
		description:
			"A curated selection of the projects I've built or contributed to.",
		image: identity.logo,
	},
	subtitle: "Some of the coolest things I've built.",
	projects: [
		{
			title: "Task Crafter",
			description:
				"A tool that extracts tasks and subtasks from free-form text and allows you to create GitHub issues from them.",
			image: "/task_crafter.jpg",
			year: "2023",
			url: "https://task-crafter-one.vercel.app/",
			tech: ["Next.js", "TypeScript", "GitHub API"],
		},
		{
			title: "Terms Simplified",
			description:
				"An app that transforms complex legal jargon into easy-to-understand language, making terms of service and privacy policies accessible to everyone.",
			image: "/terms_simplified.jpg",
			year: "2023",
			url: "https://github.com/vishals9711/terms_simplified",
			tech: ["React", "TypeScript", "shadcn/ui"],
		},
		{
			title: "CLI Chat",
			description:
				"A command-line interface tool for generating shell scripts using OpenAI, making terminal automation more accessible.",
			image: "/cli_chat.jpg",
			year: "2022",
			url: "https://github.com/vishals9711/clichat",
			tech: ["Python", "OpenAI API"],
		},
		// {
		// 	title: "Slack Bot: GitHub Issue Generator",
		// 	description:
		// 		"A Slack bot that turns natural language into actionable GitHub issues.",
		// 	image: "/project-1.jpg",
		// 	year: "2025",
		// 	url: "https://github.com/vishals9711/slack-github-issues",
		// },
		// {
		// 	title: "AI Video Summary Tool",
		// 	description:
		// 		"An LLM-powered tool that generates concise summaries from long videos.",
		// 	image: "/project-2.jpg",
		// 	year: "2024",
		// 	url: "https://github.com/vishals9711/ai-video-summary",
		// },
		// {
		// 	title: "NYC Apartment Tracker",
		// 	description:
		// 		"A web app that helps people find and track apartments in NYC.",
		// 	image: "/project-3.jpg",
		// 	year: "2025",
		// 	url: "https://github.com/vishals9711/nyc-apartment-finder",
		// },
	],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
	seo: {
		title: "Blog | Vishal Sharma",
		description: "Thoughts, deep dives, and stories from my experience.",
		image: identity.logo,
	},
	subtitle: "Stories, ideas, and tech experiments.",
};
