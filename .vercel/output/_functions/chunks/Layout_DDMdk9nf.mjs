import { c as createComponent } from './astro-component_C1lIWveE.mjs';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate, q as renderSlot, r as renderComponent, t as renderHead } from './entrypoint_W1m1O1Ua.mjs';
import 'clsx';

const identity = {
  name: "Vishal Ramanand Sharma",
  logo: "/logo.webp",
  email: "vishalsharma1907@gmail.com",
  location: "Brooklyn, NY",
  role: "Systems Engineer & Non-Dual Thinker"
};
const navBarLinks = [
  { title: "VS", url: "/" },
  { title: "About", url: "/about" },
  { title: "Library", url: "/blog" }
];
const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/vishals9711",
    icon: "/mdi--github.svg",
    external: true,
    label: "Code, experiments, and open repositories"
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/vishals9711",
    icon: "/mdi--linkedin.svg",
    external: true,
    label: "Professional profile and work history"
  },
  {
    title: "Mail",
    url: "mailto:vishalsharma1907@gmail.com",
    icon: "/material-symbols--mail.svg",
    label: "Direct line for thoughtful conversations"
  }
];
const homePageContent = {
  seo: {
    title: "Vishal Ramanand Sharma | Architecting Atman",
    description: "Public portfolio and personal web surface of Vishal Ramanand Sharma: systems engineer, non-dual thinker, and builder of intentional systems.",
    image: identity.logo
  }};
const aboutPageContent = {
  seo: {
    title: "About | Vishal Ramanand Sharma",
    description: "About Vishal Ramanand Sharma: systems engineer focused on systems thinking, Advaita Vedanta, and editorial digital experiences.",
    image: identity.logo
  },
  eyebrow: "A profile in systems, non-dual philosophy, and long-term curiosity.",
  headline: "Architecting Atman: bridging execution with cosmic awareness.",
  intro: "I am a systems engineer and thinker based in Brooklyn, NY. Previously in the Bay Area, I hold an MS in Computer Science from San Francisco State University.",
  story: [
    "My journey exists in the seam where technical precision meets a profound, non-dual inquiry. I view code not as a cold tool of utility, but as a medium for conscious manifestation. This integration of the digital with the spiritual defines how I approach engineering—creating systems that are high-performance yet deeply human, robust yet open to wonder.",
    "At The News Movement, I architect full-stack surfaces and core systems. Outside the terminal, I focus on yoga at Three Jewels, quiet reflection, and studying how tools should augment, rather than distract, human attention. I keep my feet grounded in the slow, tactile textures of Brooklyn and my mind anchored in Advaita Vedanta."
  ],
  approach: [
    "I prefer systems with clean seams: components that can evolve, content models that can stretch, and architecture that does not collapse the moment ambition grows.",
    "I like interfaces with atmosphere, but not chaos. Motion should reveal structure. Copy should carry intent. Visual choices should earn their keep.",
    "When a product gets smarter, I want that intelligence to create calm: better decisions, better defaults, fewer dead ends."
  ],
  timeline: [
    {
      label: "Now",
      title: "Systems Engineer, The News Movement",
      period: "Present",
      description: "Building robust architectures, media surfaces, and optimized pipelines for a modern news organization."
    },
    {
      label: "Foundation",
      title: "MS in Computer Science",
      period: "San Francisco State University",
      description: "Formal training in software engineering, distributed systems, and mathematical foundations that still anchor my work."
    },
    {
      label: "Practice",
      title: "Inner Exploration & Yoga",
      period: "Three Jewels, Brooklyn",
      description: "Daily study of Advaita Vedanta philosophy, physical yoga, and the textures of offline community."
    }
  ],
  interests: [
    {
      title: "Advaita Vedanta & Non-Dualism",
      description: "Exploring ancient consciousness and the philosophy that all existence is one cosmic self."
    },
    {
      title: "Cinema and visual storytelling",
      description: "Interstellar, Arrival, and any work that treats scale and emotion with equal seriousness."
    },
    {
      title: "Museums, coffee, and city texture",
      description: "The kinds of offline environments that sharpen online taste instead of dulling it."
    }
  ],
  connectTitle: "Open to conversations with technical ambition.",
  connectDescription: "If you’re working on a product that needs engineering depth and a stronger point of view, reach out."
};
const blogPageContent = {
  seo: {
    title: "Writing | Vishal Ramanand Sharma",
    description: "Notes and essays on software, AI, systems, and the cultural texture around technology.",
    image: identity.logo
  },
  eyebrow: "Writing",
  headline: "Notes on systems, software, and the texture around them.",
  description: "A lightweight journal for ideas that deserve more than a Slack message but less than a thesis.",
  emptyStateTitle: "The notebook is still taking shape.",
  emptyStateDescription: "More essays are on the way. For now, the best path in is a direct conversation."
};

const $$SiteNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SiteNav;
  const { links, pathname } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="site-nav-wrap"> <div class="shell max-w-lg"> <nav class="site-nav flex justify-center !rounded-full !bg-[rgba(243,244,245,0.4)] !backdrop-blur-md border border-[#d0d0d0]/40" aria-label="Main navigation"> <div class="site-nav-links flex gap-6 px-4 py-1"> ${links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : void 0, "target")} rel="noreferrer"${addAttribute(pathname === link.url ? "page" : void 0, "aria-current")}${addAttribute([
    "text-[0.65rem] uppercase tracking-[0.4em] transition-all hover:text-primary",
    { "text-[#141414] font-medium": pathname === link.url },
    { "text-[#8a8a8a]": pathname !== link.url }
  ], "class:list")}>
[${link.title}]
</a>`)} </div> </nav> </div> </header>`;
}, "/Users/vishal/Projects/products/portfolio/src/components/layout/SiteNav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { seo } = Astro2.props;
  const pathname = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="light"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', ">", '</head> <body> <div class="site-backdrop" aria-hidden="true"> <div class="site-grid"></div> </div> ', ' <main class="site-main"> ', ' </main> <footer class="site-footer"> <div class="shell"> <div class="footer-gradient-bar"></div> <div class="footer-panel"> <div> <p class="footer-kicker">', '</p> <h2 class="footer-title">', '</h2> </div> <div class="footer-meta"> <p>', "</p> <p> <a", ">", '</a> </p> </div> <div class="footer-links"> ', ' </div> </div> </div> </footer> <script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"><\/script> <script>\n			// @ts-ignore\n			const lenis = new Lenis();\n			function raf(time) {\n				lenis.raf(time);\n				requestAnimationFrame(raf);\n			}\n			requestAnimationFrame(raf);\n		<\/script> <!-- Scroll reveal: IntersectionObserver for .reveal-on-scroll elements --> <script>\n			(function () {\n				if (typeof IntersectionObserver === "undefined") return;\n				const observer = new IntersectionObserver(\n					function (entries) {\n						for (var i = 0; i < entries.length; i++) {\n							if (entries[i].isIntersecting) {\n								entries[i].target.classList.add("is-visible");\n								observer.unobserve(entries[i].target);\n							}\n						}\n					},\n					{ threshold: 0.1, rootMargin: "0px 0px -40px 0px" }\n				);\n				var targets = document.querySelectorAll(".reveal-on-scroll");\n				for (var j = 0; j < targets.length; j++) observer.observe(targets[j]);\n			})();\n		<\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), seo.title, addAttribute(seo.description, "content"), addAttribute(seo.title, "content"), addAttribute(seo.description, "content"), addAttribute(seo.image, "content"), addAttribute(seo.title, "content"), addAttribute(seo.description, "content"), renderHead(), renderComponent($$result, "SiteNav", $$SiteNav, { "links": navBarLinks, "pathname": pathname }), renderSlot($$result, $$slots["default"]), identity.name, identity.role, identity.location, addAttribute(`mailto:${identity.email}`, "href"), identity.email, socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : void 0, "target")} rel="noreferrer"> ${link.title} </a>`));
}, "/Users/vishal/Projects/products/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, aboutPageContent as a, blogPageContent as b, homePageContent as h, identity as i, socialLinks as s };
