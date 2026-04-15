import { $ as $$Layout, h as homePageContent, i as identity, s as socialLinks, b as $$SignalDivider } from './Layout_B9dJ5NsS.mjs';
import { c as createComponent } from './astro-component_CcQ7a6rc.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate, r as renderComponent } from './entrypoint_DxdXlVIs.mjs';
import { a as getCollection } from './_astro_content_BswpZatK.mjs';
import 'clsx';

const $$FutureSignal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FutureSignal;
  const { className = "", title = "Future signal artwork" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 760 640" fill="none" role="img"${addAttribute(title, "aria-label")}${addAttribute(`future-signal ${className}`.trim(), "class")}> <defs> <linearGradient id="signalStroke" x1="0" y1="0" x2="760" y2="640" gradientUnits="userSpaceOnUse"> <stop offset="0%" stop-color="hsl(168 89% 58%)"></stop> <stop offset="55%" stop-color="hsl(45 93% 64%)"></stop> <stop offset="100%" stop-color="hsl(168 89% 58%)"></stop> </linearGradient> <linearGradient id="signalSoft" x1="40" y1="80" x2="660" y2="560" gradientUnits="userSpaceOnUse"> <stop offset="0%" stop-color="rgba(51, 255, 214, 0.24)"></stop> <stop offset="100%" stop-color="rgba(255, 198, 87, 0.08)"></stop> </linearGradient> </defs> <rect x="24" y="24" width="712" height="592" rx="40" class="future-signal__frame"></rect> <rect x="68" y="68" width="624" height="504" rx="28" class="future-signal__panel"></rect> <path d="M68 200H692" class="future-signal__line"></path> <path d="M68 412H692" class="future-signal__line"></path> <path d="M240 68V572" class="future-signal__line"></path> <path d="M516 68V572" class="future-signal__line"></path> <path d="M146 136L614 506" class="future-signal__diagonal"></path> <path d="M146 506L614 136" class="future-signal__diagonal is-soft"></path> <circle cx="240" cy="200" r="84" class="future-signal__halo"></circle> <circle cx="516" cy="412" r="132" class="future-signal__halo is-large"></circle> <circle cx="240" cy="200" r="10" class="future-signal__core"></circle> <circle cx="516" cy="412" r="10" class="future-signal__core"></circle> <path d="M148 320C218 260 300 222 402 222C514 222 596 262 648 334" class="future-signal__beam"></path> <path d="M120 356C216 428 322 468 428 468C528 468 608 438 662 382" class="future-signal__beam is-soft"></path> <g class="future-signal__text"> <text x="102" y="116">SYSTEM / TASTE / STRUCTURE</text> <text x="102" y="550">BROOKLYN, NEW YORK</text> <text x="542" y="116">VISHAL SHARMA</text> <text x="534" y="550">INTENTIONAL SOFTWARE</text> </g> </svg>`;
}, "/Users/vishal/Projects/products/portfolio/src/components/graphics/FutureSignal.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  const latestPosts = posts.slice(0, 2);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": homePageContent.seo }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section shell"> <div class="hero-copy"> <p class="eyebrow">${homePageContent.eyebrow}</p> <h1 class="hero-title">${homePageContent.headline}</h1> <p class="hero-subtitle">${homePageContent.subheadline}</p> <p class="hero-description">${homePageContent.description}</p> <div class="action-row"> ${homePageContent.actions.map((action, index) => renderTemplate`<a${addAttribute(action.url, "href")}${addAttribute(action.external ? "_blank" : void 0, "target")} rel="noreferrer"${addAttribute(["action-link", { "is-secondary": index > 0 }], "class:list")}> ${action.title} </a>`)} </div> <div class="social-row"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : void 0, "target")} rel="noreferrer" class="social-chip"> <img${addAttribute(link.icon, "src")} alt="" aria-hidden="true"> <span>${link.title}</span> </a>`)} </div> </div> <div class="hero-art"> <div class="hero-art__video"> <video src="/remotion/future-signal.mp4" poster="/remotion/future-signal-poster.png" autoplay muted loop playsinline></video> </div> ${renderComponent($$result2, "FutureSignal", $$FutureSignal, { "className": "hero-art__svg" })} <div class="hero-card"> <p class="hero-card__label">Current coordinates</p> <p class="hero-card__value">${identity.location}</p> <p class="hero-card__note">Building product systems with AI-aware workflows and editorial precision.</p> </div> </div> </section> <section class="shell section-grid"> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Current focus" })} <div class="section-grid__cards"> ${homePageContent.currentFocus.map((item, index) => renderTemplate`<article class="signal-card"> <p class="signal-card__index">0${index + 1}</p> <h2>${item.title}</h2> <p>${item.description}</p> </article>`)} </div> </section> <section class="shell split-section"> <div> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Capabilities" })} <h2 class="section-title">Technical depth with taste in the loop.</h2> </div> <div class="stack-list"> ${homePageContent.capabilities.map((capability) => renderTemplate`<article class="stack-item"> <h3>${capability.title}</h3> <p>${capability.detail}</p> </article>`)} </div> </section> <section class="shell principle-strip"> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Principles" })} <div class="principle-grid"> ${homePageContent.principles.map((principle) => renderTemplate`<article class="principle-card"> <h2>${principle.title}</h2> <p>${principle.description}</p> </article>`)} </div> </section> <section class="shell writing-section"> <div class="writing-section__intro"> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Writing" })} <h2 class="section-title">Thoughts in progress, not content sludge.</h2> <p>
Short essays on software, AI, culture, and the details that decide whether a product feels deliberate or disposable.
</p> </div> <div class="writing-list"> ${latestPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class="writing-card"> <p class="writing-card__meta"> ${post.data.pubDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </p> <h3>${post.data.title}</h3> <p>${post.data.description}</p> </a>`)} </div> </section> <section class="shell cta-panel"> <div> <p class="eyebrow">Contact</p> <h2 class="section-title">${homePageContent.contactTitle}</h2> </div> <div> <p>${homePageContent.contactDescription}</p> <a${addAttribute(`mailto:${identity.email}`, "href")} class="action-link">Email Vishal</a> </div> </section> ` })}`;
}, "/Users/vishal/Projects/products/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/vishal/Projects/products/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
