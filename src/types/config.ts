export type NavBarLink = {
	title: string;
	url: string;
	external?: boolean;
};

export type ActionLink = {
	title: string;
	url: string;
	external?: boolean;
};

export type SocialLink = {
	title: string;
	url: string;
	icon: string;
	external?: boolean;
	label: string;
};

export type Identity = {
	name: string;
	logo: string;
	email: string;
	location: string;
	role: string;
};

export type SEOInfo = {
	title: string;
	description: string;
	image: string;
};

export type FocusItem = {
	title: string;
	description: string;
};

export type Capability = {
	title: string;
	detail: string;
};

export type Principle = {
	title: string;
	description: string;
};

export type TimelineItem = {
	label: string;
	title: string;
	period: string;
	description: string;
};

export type Interest = {
	title: string;
	description: string;
};

export type HomePageContent = {
	seo: SEOInfo;
	eyebrow: string;
	headline: string;
	subheadline: string;
	description: string;
	actions: ActionLink[];
	currentFocus: FocusItem[];
	capabilities: Capability[];
	principles: Principle[];
	contactTitle: string;
	contactDescription: string;
};

export type AboutPageContent = {
	seo: SEOInfo;
	eyebrow: string;
	headline: string;
	intro: string;
	story: string[];
	approach: string[];
	timeline: TimelineItem[];
	interests: Interest[];
	connectTitle: string;
	connectDescription: string;
};

export type BlogPageContent = {
	seo: SEOInfo;
	eyebrow: string;
	headline: string;
	description: string;
	emptyStateTitle: string;
	emptyStateDescription: string;
};
