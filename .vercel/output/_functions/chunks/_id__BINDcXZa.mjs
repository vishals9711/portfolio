import { i as identity, $ as $$Layout } from './Layout_DDMdk9nf.mjs';
import { c as createComponent } from './astro-component_C1lIWveE.mjs';
import { b as renderTemplate, r as renderComponent, m as maybeRenderHead, c as addAttribute } from './entrypoint_W1m1O1Ua.mjs';
import { g as getEntry, r as renderEntry } from './_astro_content_DLixpyeC.mjs';
import { $ as $$SignalDivider } from './SignalDivider_Cx6lPm2c.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const entry = await getEntry("posts", id);
  if (!entry) {
    return Astro2.redirect("/blog");
  }
  const { Content, remarkPluginFrontmatter } = await renderEntry(entry);
  return renderTemplate(_a || (_a = __template(["", ' <script>\n	(function () {\n		var bar = document.getElementById("reading-progress");\n		if (!bar) return;\n		function updateProgress() {\n			var scrollTop = window.scrollY;\n			var docHeight = document.documentElement.scrollHeight - window.innerHeight;\n			var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;\n			bar.style.width = Math.min(progress, 100) + "%";\n		}\n		window.addEventListener("scroll", updateProgress, { passive: true });\n		updateProgress();\n	})();\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "seo": {
    title: `${entry.data.title} | ${identity.name}`,
    description: entry.data.description,
    image: entry.data.image.url
  } }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="reading-progress-bar" id="reading-progress" aria-hidden="true"></div> <article class="shell article-shell"> <div class="article-intro"> <a href="/blog" class="back-link">Back to writing</a> ${renderComponent($$result2, "SignalDivider", $$SignalDivider, { "label": "Essay", "animate": true })} <h1 class="page-title">${entry.data.title}</h1> <p class="page-description">${entry.data.description}</p> <div class="article-meta"> <span>${identity.name}</span> <span> ${entry.data.pubDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })} </span> <span>${remarkPluginFrontmatter.minutesRead}</span> </div> </div> <div class="article-image"> <img${addAttribute(entry.data.image.url, "src")}${addAttribute(entry.data.image.alt, "alt")}> </div> <div class="article-prose prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ` }));
}, "/Users/vishal/Projects/products/portfolio/src/pages/blog/[id].astro", void 0);

const $$file = "/Users/vishal/Projects/products/portfolio/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
