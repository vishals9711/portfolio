import { $ as $$Layout, h as homePageContent } from './Layout_DDMdk9nf.mjs';
import { c as createComponent } from './astro-component_C1lIWveE.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_W1m1O1Ua.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { shaderMaterial, ScrollControls, Scroll, Float } from '@react-three/drei';
import { extend, Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import { Suspense, useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const CelestialBloomMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color("#ffffff"),
    uOpacity: 1,
    uPixelRatio: 2,
    uMouse: new THREE.Vector2(0, 0),
    uHover: 0
  },
  // Vertex Shader
  `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uMouse;
  uniform float uHover;
  attribute float size;
  varying vec3 vColor;
  
  void main() {
    vColor = color;
    vec3 pos = position;
    
    // Physics-based cursor attraction
    float dist = distance(pos.xy, uMouse);
    if (dist < 2.0) {
      vec2 dir = normalize(pos.xy - uMouse);
      float force = (2.0 - dist) * 0.5 * uHover;
      pos.xy -= dir * force;
    }

    // Gentle drift (Prakriti and Purusha dance)
    pos.x += sin(uTime * 0.5 + position.y) * 0.1;
    pos.y += cos(uTime * 0.5 + position.x) * 0.1;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z) * uPixelRatio;
    gl_Position = projectionMatrix * mvPosition;
  }
  `,
  // Fragment Shader
  `
  varying vec3 vColor;
  uniform float uOpacity;
  
  void main() {
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 3.0);
    
    gl_FragColor = vec4(vColor, uOpacity * strength);
  }
  `
);
extend({ CelestialBloomMaterial });
function BackgroundNetwork({ count = 80 }) {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20
        )
      );
    }
    return p;
  }, [count]);
  return /* @__PURE__ */ jsx("group", { children: points.map((p, i) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: stable point array
    /* @__PURE__ */ jsxs("mesh", { position: p, children: [
      /* @__PURE__ */ jsx("sphereGeometry", { args: [0.015, 8, 8] }),
      /* @__PURE__ */ jsx("meshBasicMaterial", { color: "#acafff", transparent: true, opacity: 0.25 })
    ] }, i)
  )) });
}
function EnergyLines({ count = 15, internal = false }) {
  const lines = useMemo(() => {
    const l = [];
    const start = new THREE.Vector3(0, 0.5, 0.1);
    for (let i = 0; i < count; i++) {
      const points = [];
      for (let j = 0; j < 8; j++) {
        const spread = internal ? 0.8 : 4;
        points.push(
          new THREE.Vector3(
            start.x + j * spread * (Math.random() > 0.5 ? 1 : -1) * (internal ? 0.2 : 1),
            start.y + Math.sin(j * 0.5) * (internal ? 1.5 : 3),
            start.z + (Math.random() - 0.5) * spread
          )
        );
      }
      l.push(new THREE.CatmullRomCurve3(points));
    }
    return l;
  }, [count, internal]);
  return /* @__PURE__ */ jsx("group", { children: lines.map((curve, i) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: stable line array
    /* @__PURE__ */ jsxs("mesh", { children: [
      /* @__PURE__ */ jsx(
        "tubeGeometry",
        {
          args: [curve, 30, internal ? 3e-3 : 6e-3, 8, false]
        }
      ),
      /* @__PURE__ */ jsx(
        "meshBasicMaterial",
        {
          color: "#acafff",
          transparent: true,
          opacity: internal ? 0.35 : 0.2
        }
      )
    ] }, i)
  )) });
}
function HeartCore() {
  const mesh = useRef(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
  });
  return /* @__PURE__ */ jsxs("mesh", { ref: mesh, position: [0, 0.5, 0.1], children: [
    /* @__PURE__ */ jsx("sphereGeometry", { args: [0.15, 32, 32] }),
    /* @__PURE__ */ jsx("meshBasicMaterial", { color: "#acafff" })
  ] });
}
function BodyOfLight({ count = 3e4 }) {
  const mesh = useRef(null);
  const material = useRef(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const hover = useRef(0);
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const y = (u - 0.5) * 6;
      const width = Math.cos(y * 0.5) * 0.8 + 0.2;
      const angle = v * Math.PI * 2;
      const radius = Math.random() * width;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      cols[i * 3] = 0.67;
      cols[i * 3 + 1] = 0.68;
      cols[i * 3 + 2] = 1;
      s[i] = Math.random() * 1.5 + 0.2;
    }
    return [pos, cols, s];
  }, [count]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth * 2 - 1) * 5;
      mouse.current.y = (-(e.clientY / window.innerHeight) * 2 + 1) * 5;
      hover.current = 1.5;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  useFrame((state) => {
    if (material.current) {
      material.current.uTime = state.clock.getElapsedTime();
      material.current.uMouse.lerp(mouse.current, 0.05);
      material.current.uHover = THREE.MathUtils.lerp(hover.current, 0, 0.02);
      hover.current = THREE.MathUtils.lerp(hover.current, 0, 0.02);
    }
  });
  return /* @__PURE__ */ jsxs("group", { position: [3, 0, 0], children: [
    /* @__PURE__ */ jsx(HeartCore, {}),
    /* @__PURE__ */ jsx(EnergyLines, { count: 20, internal: true }),
    /* @__PURE__ */ jsx(EnergyLines, { count: 12, internal: false }),
    /* @__PURE__ */ jsxs("points", { ref: mesh, children: [
      /* @__PURE__ */ jsxs("bufferGeometry", { children: [
        /* @__PURE__ */ jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }),
        /* @__PURE__ */ jsx("bufferAttribute", { attach: "attributes-color", args: [colors, 3] }),
        /* @__PURE__ */ jsx("bufferAttribute", { attach: "attributes-size", args: [sizes, 1] })
      ] }),
      /* @__PURE__ */ jsx(
        "celestialBloomMaterial",
        {
          ref: material,
          transparent: true,
          depthWrite: false,
          blending: THREE.NormalBlending,
          vertexColors: true
        }
      )
    ] })
  ] });
}
function CelestialNode({
  position,
  title,
  description
}) {
  const [hovered, setHovered] = useState(false);
  const mesh = useRef(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y += Math.sin(t + position[0]) * 2e-3;
  });
  return /* @__PURE__ */ jsxs("group", { position, children: [
    /* @__PURE__ */ jsxs(
      "mesh",
      {
        ref: mesh,
        onPointerOver: () => setHovered(true),
        onPointerOut: () => setHovered(false),
        children: [
          /* @__PURE__ */ jsx("sphereGeometry", { args: [0.2, 32, 32] }),
          /* @__PURE__ */ jsx(
            "meshBasicMaterial",
            {
              color: hovered ? "#00F0FF" : "#acafff",
              transparent: true,
              opacity: 0.5
            }
          )
        ]
      }
    ),
    hovered && /* @__PURE__ */ jsx(HtmlOverlay, { title, description })
  ] });
}
function HtmlOverlay({
  title,
  description
}) {
  return /* @__PURE__ */ jsx(Scroll, { html: true, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "pointer-events-none fixed inset-0 flex items-center justify-center p-8",
      children: /* @__PURE__ */ jsxs("div", { className: "pointer-events-auto max-w-md rounded-[16px] border border-[#d0d0d0]/60 bg-[rgba(243,244,245,0.4)] p-8 backdrop-blur-2xl", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[0.7rem] uppercase tracking-[0.4em] text-primary", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-[#141414]/60", children: description })
      ] })
    }
  ) });
}
function DigitalAltar() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-0 bg-[#ffffff]", children: [
    /* @__PURE__ */ jsxs(Canvas, { camera: { position: [0, 0, 10], fov: 50 }, dpr: [1, 2], children: [
      /* @__PURE__ */ jsx("color", { attach: "background", args: ["#ffffff"] }),
      /* @__PURE__ */ jsx(BackgroundNetwork, {}),
      /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
        /* @__PURE__ */ jsxs(ScrollControls, { pages: 3, damping: 0.2, children: [
          /* @__PURE__ */ jsxs(Scroll, { children: [
            /* @__PURE__ */ jsx(Float, { speed: 1.5, rotationIntensity: 0.2, floatIntensity: 0.5, children: /* @__PURE__ */ jsx(BodyOfLight, {}) }),
            /* @__PURE__ */ jsxs("group", { position: [0, -10, 0], children: [
              /* @__PURE__ */ jsx(
                CelestialNode,
                {
                  position: [-3, 0, 0],
                  title: "Atman",
                  description: "AI-Native Operating System for creative manifestation."
                }
              ),
              /* @__PURE__ */ jsx(
                CelestialNode,
                {
                  position: [3, 2, -2],
                  title: "ManualMate",
                  description: "Pre-trip planning agent for the deliberate traveler."
                }
              ),
              /* @__PURE__ */ jsx(
                CelestialNode,
                {
                  position: [0, -3, 2],
                  title: "Visual Poems",
                  description: "Generative art exploring the intersection of code and consciousness."
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(Scroll, { html: true, children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
            /* @__PURE__ */ jsx("section", { className: "flex h-screen w-full flex-col items-start justify-center px-12 md:px-24", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 3, ease: "easeOut" },
                className: "text-left",
                children: [
                  /* @__PURE__ */ jsxs("h1", { className: "text-6xl font-light tracking-[0.2em] text-[#141414] md:text-8xl lg:text-9xl leading-none", children: [
                    "AHAM",
                    /* @__PURE__ */ jsx("br", {}),
                    "BRAHMASMI."
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-16 text-7xl tracking-[0.3em] text-[#141414]/5 blur-[3px] transition-all hover:text-[#141414]/10 md:text-9xl lg:text-[12rem] font-sans", children: "अहं ब्रह्मास्मि" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("section", { className: "h-[200vh] w-full" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(EffectComposer, { children: /* @__PURE__ */ jsx(
          Bloom,
          {
            luminanceThreshold: 0.2,
            mipmapBlur: true,
            intensity: 1.5,
            radius: 0.4
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ZenToggle, {})
  ] });
}
function ZenToggle() {
  const [zen, setZen] = useState(false);
  useEffect(() => {
    if (zen) {
      document.body.classList.add("zen-mode-active");
    } else {
      document.body.classList.remove("zen-mode-active");
    }
  }, [zen]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: () => setZen(!zen),
      className: "fixed bottom-8 right-8 z-[100] h-10 w-10 rounded-full border border-[#d0d0d0]/60 bg-[rgba(243,244,245,0.4)] text-[#141414]/40 backdrop-blur-md transition-all hover:border-primary/40 hover:text-primary",
      "aria-label": "Toggle Zen Mode",
      children: zen ? "●" : "○"
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": homePageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-[300vh] bg-[#050505]"> ${renderComponent($$result2, "DigitalAltar", DigitalAltar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/vishal/Projects/products/portfolio/src/components/ui/DigitalAltar", "client:component-export": "default" })} </div> ` })}`;
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
