import { $ as $$Layout, a as aboutPageContent, b as $$SignalDivider, s as socialLinks } from './Layout_B9dJ5NsS.mjs';
import { c as createComponent } from './astro-component_CcQ7a6rc.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DxdXlVIs.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": aboutPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="shell page-hero"> <p class="eyebrow">${aboutPageContent.eyebrow}</p> <h1 class="page-title">${aboutPageContent.headline}</h1> <p class="page-description">${aboutPageContent.intro}</p> </section> <section class="shell editorial-grid"> <div> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Path" })} <div class="story-block"> ${aboutPageContent.story.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div> </div> <aside class="note-panel"> <p class="note-panel__label">Operating mode</p> <ul> ${aboutPageContent.approach.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </aside> </section> <section class="shell timeline-section"> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Timeline" })} <div class="timeline-list"> ${aboutPageContent.timeline.map((item) => renderTemplate`<article class="timeline-item"> <div class="timeline-item__meta"> <p>${item.label}</p> <span>${item.period}</span> </div> <div> <h2>${item.title}</h2> <p>${item.description}</p> </div> </article>`)} </div> </section> <section class="shell interest-section"> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Interests" })} <div class="interest-grid"> ${aboutPageContent.interests.map((item) => renderTemplate`<article class="interest-card"> <h2>${item.title}</h2> <p>${item.description}</p> </article>`)} </div> </section> <section class="shell cta-panel"> <div> <p class="eyebrow">Connect</p> <h2 class="section-title">${aboutPageContent.connectTitle}</h2> </div> <div class="connect-list"> <p>${aboutPageContent.connectDescription}</p> <div class="connect-list__links"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : void 0, "target")} rel="noreferrer" class="connect-link"> <img${addAttribute(link.icon, "src")} alt="" aria-hidden="true"> <div> <span>${link.title}</span> <small>${link.label}</small> </div> </a>`)} </div> </div> </section> ` })}`;
}, "/Users/vishal/Projects/products/portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/vishal/Projects/products/portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
