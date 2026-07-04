import { c as createComponent } from './astro-component_C1lIWveE.mjs';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_W1m1O1Ua.mjs';
import 'clsx';

const $$SignalDivider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SignalDivider;
  const { label, animate = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["signal-divider", { "animate-scan": animate }], "class:list")} aria-hidden="true"> <span>${label}</span> </div>`;
}, "/Users/vishal/Projects/products/portfolio/src/components/graphics/SignalDivider.astro", void 0);

export { $$SignalDivider as $ };
