import type {
	AboutPageContent,
	BlogPageContent,
	HomePageContent,
	Identity,
	NavBarLink,
	SocialLink,
} from "./types/config";

export const identity: Identity = {
	name: "Vishal Sharma",
	logo: "/logo.webp",
	email: "vishalsharma1907@gmail.com",
	location: "Brooklyn, New York",
	role: "Software engineer shaping intelligent products and cultural interfaces.",
};

export const navBarLinks: NavBarLink[] = [
	{ title: "Home", url: "/" },
	{ title: "About", url: "/about" },
	{ title: "Writing", url: "/blog" },
];

export const socialLinks: SocialLink[] = [
	{
		title: "GitHub",
		url: "https://github.com/vishals9711",
		icon: "/mdi--github.svg",
		external: true,
		label: "Code, experiments, and open repositories",
	},
	{
		title: "LinkedIn",
		url: "https://linkedin.com/in/vishals9711",
		icon: "/mdi--linkedin.svg",
		external: true,
		label: "Professional profile and work history",
	},
	{
		title: "Mail",
		url: "mailto:vishalsharma1907@gmail.com",
		icon: "/material-symbols--mail.svg",
		label: "Direct line for thoughtful conversations",
	},
];

export const homePageContent: HomePageContent = {
	seo: {
		title: "Vishal Sharma | Software Engineer, Systems Thinker, Writer",
		description:
			"A dark, editorial portfolio for Vishal Sharma: software engineer, systems thinker, and builder of intelligent product experiences.",
		image: identity.logo,
	},
	eyebrow:
		"Software engineer in Brooklyn. Building for intelligence, taste, and clarity.",
	headline:
		"Products should think clearly, move with intent, and feel unmistakably human.",
	subheadline:
		"I design technical systems that hold up under real use and still leave room for wonder.",
	description:
		"My work lives at the intersection of product engineering, AI-enabled workflows, and cultural taste. I care about interface rhythm, infrastructure honesty, and building tools that make people sharper instead of louder.",
	actions: [
		{ title: "Read the writing", url: "/blog" },
		{
			title: "Start a conversation",
			url: "mailto:vishalsharma1907@gmail.com",
			external: true,
		},
	],
	currentFocus: [
		{
			title: "Intelligent product systems",
			description:
				"Designing full-stack architectures where AI features improve the product instead of becoming the product.",
		},
		{
			title: "Editorial interaction design",
			description:
				"Exploring interfaces that borrow pacing, contrast, and composition from publishing and cinema.",
		},
		{
			title: "Operational clarity",
			description:
				"Making complex delivery pipelines, APIs, and content systems easier to reason about across teams.",
		},
	],
	capabilities: [
		{
			title: "Full-stack product engineering",
			detail:
				"TypeScript, Python, React, Astro, and the practical systems around them.",
		},
		{
			title: "AI workflow integration",
			detail:
				"Agentic tooling, orchestration, prompt systems, and the product constraints that keep them useful.",
		},
		{
			title: "System design",
			detail:
				"Architecture, deployment strategy, and interfaces that age well as scope expands.",
		},
	],
	principles: [
		{
			title: "Make complexity legible",
			description:
				"Good systems reduce cognitive drag. The user should feel the result, not the scaffolding.",
		},
		{
			title: "Treat aesthetics as engineering",
			description:
				"Visual precision, motion, and pacing are product decisions, not decoration layered on after the fact.",
		},
		{
			title: "Ship ideas with proof",
			description:
				"Conviction matters, but evidence matters more. Build the version that can survive contact with users.",
		},
	],
	contactTitle: "Interested in building something sharp?",
	contactDescription:
		"I’m most energized by products that mix technical depth, interface quality, and a real point of view.",
};

export const aboutPageContent: AboutPageContent = {
	seo: {
		title: "About | Vishal Sharma",
		description:
			"About Vishal Sharma: software engineer focused on systems thinking, AI-enabled products, and editorial digital experiences.",
		image: identity.logo,
	},
	eyebrow: "A profile in engineering, taste, and long-term curiosity.",
	headline: "I like building systems that feel composed instead of accidental.",
	intro:
		"I’m a software engineer based in Brooklyn, previously in the Bay Area, with an MS in Computer Science from San Francisco State University.",
	story: [
		"My work has steadily moved toward the places where product quality and technical rigor meet. I care about delivery, but I care just as much about the shape of the thing that gets delivered.",
		"At The News Movement, that has meant working across full-stack product surfaces, architecture decisions, and the operational details that keep a team moving. Outside of work, I keep circling back to AI systems, philosophy, and the question of how digital tools should influence human attention.",
	],
	approach: [
		"I prefer systems with clear seams: components that can evolve, content models that can stretch, and architecture that does not collapse the moment ambition grows.",
		"I like interfaces with atmosphere, but not chaos. Motion should reveal structure. Copy should carry intent. Visual choices should earn their keep.",
		"When a product gets smarter, I want that intelligence to create calm: better decisions, better defaults, fewer dead ends.",
	],
	timeline: [
		{
			label: "Now",
			title: "Software Engineer, The News Movement",
			period: "Present",
			description:
				"Building and refining product surfaces, systems, and workflows for a modern media organization.",
		},
		{
			label: "Foundation",
			title: "MS in Computer Science",
			period: "San Francisco State University",
			description:
				"Formal training in software engineering, systems thinking, and the technical habits that still anchor my work.",
		},
		{
			label: "Ongoing",
			title: "Independent research and creative exploration",
			period: "Parallel practice",
			description:
				"Writing, studying AI-human co-evolution, and exploring how culture should shape the next generation of tools.",
		},
	],
	interests: [
		{
			title: "AI and human co-evolution",
			description:
				"Less hype, more questions about cognition, responsibility, and augmentation.",
		},
		{
			title: "Cinema and visual storytelling",
			description:
				"Interstellar, Arrival, and any work that treats scale and emotion with equal seriousness.",
		},
		{
			title: "Museums, coffee, and city texture",
			description:
				"The kinds of offline environments that sharpen online taste instead of dulling it.",
		},
	],
	connectTitle: "Open to conversations with technical ambition.",
	connectDescription:
		"If you’re working on a product that needs engineering depth and a stronger point of view, reach out.",
};

export const blogPageContent: BlogPageContent = {
	seo: {
		title: "Writing | Vishal Sharma",
		description:
			"Notes and essays on software, AI, systems, and the cultural texture around technology.",
		image: identity.logo,
	},
	eyebrow: "Writing",
	headline: "Notes on systems, software, and the texture around them.",
	description:
		"A lightweight journal for ideas that deserve more than a Slack message but less than a thesis.",
	emptyStateTitle: "The notebook is still taking shape.",
	emptyStateDescription:
		"More essays are on the way. For now, the best path in is a direct conversation.",
};
