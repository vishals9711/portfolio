import { $ as $$Layout, c as blogPageContent, b as $$SignalDivider } from './Layout_B9dJ5NsS.mjs';
import { c as createComponent } from './astro-component_CcQ7a6rc.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DxdXlVIs.mjs';
import { a as getCollection, r as renderEntry } from './_astro_content_BswpZatK.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  for (const post of posts) {
    const { remarkPluginFrontmatter } = await renderEntry(post);
    post.data.readingTime = remarkPluginFrontmatter.minutesRead;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": blogPageContent.seo }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="shell page-hero"> <p class="eyebrow">${blogPageContent.eyebrow}</p> <h1 class="page-title">${blogPageContent.headline}</h1> <p class="page-description">${blogPageContent.description}</p> </section> <section class="shell writing-archive"> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Archive" })} ${posts.length > 0 ? renderTemplate`<div class="writing-archive__list"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class="archive-row"> <div class="archive-row__meta"> <span> ${post.data.pubDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </span> <span>${post.data.readingTime}</span> </div> <div class="archive-row__body"> <h2>${post.data.title}</h2> <p>${post.data.description}</p> </div> <div class="archive-row__thumb"> <img${addAttribute(post.data.image.url, "src")}${addAttribute(post.data.image.alt, "alt")} loading="lazy"> </div> </a>`)} </div>` : renderTemplate`<div class="empty-panel"> <h2>${blogPageContent.emptyStateTitle}</h2> <p>${blogPageContent.emptyStateDescription}</p> </div>`} </section> ` })}`;
}, "/Users/vishal/Projects/products/portfolio/src/pages/blog/index.astro", void 0);

const $$file = "/Users/vishal/Projects/products/portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
