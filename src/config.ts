import type {
	AboutPageContent,
	BlogPageContent,
	HomePageContent,
	Identity,
	NavBarLink,
	SocialLink,
} from "./types/config";

export const identity: Identity = {
	name: "Vishal Ramanand Sharma",
	logo: "/logo.webp",
	email: "vishalsharma1907@gmail.com",
	location: "Brooklyn, NY",
	role: "Systems Engineer & Non-Dual Thinker",
};

export const navBarLinks: NavBarLink[] = [
	{ title: "VS", url: "/" },
	{ title: "About", url: "/about" },
	{ title: "Library", url: "/blog" },
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
		title: "Vishal Ramanand Sharma | Architecting Atman",
		description:
			"Public portfolio and personal web surface of Vishal Ramanand Sharma: systems engineer, non-dual thinker, and builder of intentional systems.",
		image: identity.logo,
	},
	eyebrow: "Systems Engineering. Non-Dual Consciousness. Brooklyn, NY.",
	headline:
		"Operating at the cutting edge of high-performance technical systems while anchoring the soul in ancient, non-dual consciousness.",
	subheadline:
		"Architecting Atman. Systems Engineer bridging the boundary between digital execution and cosmic awareness.",
	description:
		"I design technical systems that hold up under real scale and still leave room for wonder. My perspective is that computers are not cold, separate realities, but simply direct extensions of our human voices, senses, and consciousness.",
	actions: [
		{ title: "Initialize System", url: "/blog" },
		{
			title: "View Visual Poems",
			url: "mailto:vishalsharma1907@gmail.com",
			external: true,
		},
	],
	currentFocus: [
		{
			title: "High-Performance Technical Systems",
			description:
				"Building backend frameworks, intelligent pipelines, and robust schemas that are fast, legible, and simple to reason about.",
		},
		{
			title: "The Architecture of Atman",
			description:
				"Studying the seamless integration of digital creation tools with ancient, meditative states of being.",
		},
		{
			title: "Editorial Interaction Design",
			description:
				"Crafting beautiful, light-first editorial interfaces that balance structured logic with human scale and breathing room.",
		},
	],
	capabilities: [
		{
			title: "Systems Architecture & Scalability",
			detail:
				"Designing robust distributed structures, legible APIs, and maintainable full-stack code bases.",
		},
		{
			title: "Cognitive Engineering & AI",
			detail:
				"Orchestrating agentic models and AI integrations that reduce noise and enhance human clarity.",
		},
		{
			title: "Interaction Aesthetics",
			detail:
				"Tailoring custom responsive interfaces, fluid animations, and micro-interactions that feel premium.",
		},
	],
	principles: [
		{
			title: "Ahimsa Paramo Dharma",
			description:
				"Harmlessness as the highest law. Building technology that respects human attention, operates with deep integrity, and cultivates calm.",
		},
		{
			title: "Master the Micro-Details",
			description:
				"Visual and systemic precision are not decorations; they communicate structure, care, and reliability in every seam.",
		},
		{
			title: "Make Complexity Legible",
			description:
				"Reduce cognitive friction. The user should feel the elegance of the interface, never the complexity of the scaffolding.",
		},
	],
	contactTitle: "Interested in building something sharp?",
	contactDescription:
		"I’m most energized by products that mix technical depth, interface quality, and a real point of view.",
};

export const aboutPageContent: AboutPageContent = {
	seo: {
		title: "About | Vishal Ramanand Sharma",
		description:
			"About Vishal Ramanand Sharma: systems engineer focused on systems thinking, Advaita Vedanta, and editorial digital experiences.",
		image: identity.logo,
	},
	eyebrow:
		"A profile in systems, non-dual philosophy, and long-term curiosity.",
	headline: "Architecting Atman: bridging execution with cosmic awareness.",
	intro:
		"I am a systems engineer and thinker based in Brooklyn, NY. Previously in the Bay Area, I hold an MS in Computer Science from San Francisco State University.",
	story: [
		"My journey exists in the seam where technical precision meets a profound, non-dual inquiry. I view code not as a cold tool of utility, but as a medium for conscious manifestation. This integration of the digital with the spiritual defines how I approach engineering—creating systems that are high-performance yet deeply human, robust yet open to wonder.",
		"At The News Movement, I architect full-stack surfaces and core systems. Outside the terminal, I focus on yoga at Three Jewels, quiet reflection, and studying how tools should augment, rather than distract, human attention. I keep my feet grounded in the slow, tactile textures of Brooklyn and my mind anchored in Advaita Vedanta.",
	],
	approach: [
		"I prefer systems with clean seams: components that can evolve, content models that can stretch, and architecture that does not collapse the moment ambition grows.",
		"I like interfaces with atmosphere, but not chaos. Motion should reveal structure. Copy should carry intent. Visual choices should earn their keep.",
		"When a product gets smarter, I want that intelligence to create calm: better decisions, better defaults, fewer dead ends.",
	],
	timeline: [
		{
			label: "Now",
			title: "Systems Engineer, The News Movement",
			period: "Present",
			description:
				"Building robust architectures, media surfaces, and optimized pipelines for a modern news organization.",
		},
		{
			label: "Foundation",
			title: "MS in Computer Science",
			period: "San Francisco State University",
			description:
				"Formal training in software engineering, distributed systems, and mathematical foundations that still anchor my work.",
		},
		{
			label: "Practice",
			title: "Inner Exploration & Yoga",
			period: "Three Jewels, Brooklyn",
			description:
				"Daily study of Advaita Vedanta philosophy, physical yoga, and the textures of offline community.",
		},
	],
	interests: [
		{
			title: "Advaita Vedanta & Non-Dualism",
			description:
				"Exploring ancient consciousness and the philosophy that all existence is one cosmic self.",
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
		title: "Writing | Vishal Ramanand Sharma",
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
