import {
	Float,
	Scroll,
	ScrollControls,
	shaderMaterial,
} from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import * as THREE from "three";

// Custom Shader for the "Celestial Bloom"
const CelestialBloomMaterial = shaderMaterial(
	{
		uTime: 0,
		uColor: new THREE.Color("#ffffff"),
		uOpacity: 1,
		uPixelRatio: 2,
		uMouse: new THREE.Vector2(0, 0),
		uHover: 0,
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
  `,
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
					(Math.random() - 0.5) * 20,
				),
			);
		}
		return p;
	}, [count]);

	return (
		<group>
			{points.map((p, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: stable point array
				<mesh key={i} position={p}>
					<sphereGeometry args={[0.015, 8, 8]} />
					<meshBasicMaterial color="#acafff" transparent opacity={0.25} />
				</mesh>
			))}
		</group>
	);
}

function EnergyLines({ count = 15, internal = false }) {
	const lines = useMemo(() => {
		const l = [];
		const start = new THREE.Vector3(0, 0.5, 0.1); // Heart position
		for (let i = 0; i < count; i++) {
			const points = [];
			for (let j = 0; j < 8; j++) {
				const spread = internal ? 0.8 : 4.0;
				points.push(
					new THREE.Vector3(
						start.x +
							j *
								spread *
								(Math.random() > 0.5 ? 1 : -1) *
								(internal ? 0.2 : 1),
						start.y + Math.sin(j * 0.5) * (internal ? 1.5 : 3.0),
						start.z + (Math.random() - 0.5) * spread,
					),
				);
			}
			l.push(new THREE.CatmullRomCurve3(points));
		}
		return l;
	}, [count, internal]);

	return (
		<group>
			{lines.map((curve, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: stable line array
				<mesh key={i}>
					<tubeGeometry
						args={[curve, 30, internal ? 0.003 : 0.006, 8, false]}
					/>
					<meshBasicMaterial
						color="#acafff"
						transparent
						opacity={internal ? 0.35 : 0.2}
					/>
				</mesh>
			))}
		</group>
	);
}

function HeartCore() {
	// biome-ignore lint/style/noNonNullAssertion: R3F ref initialization
	const mesh = useRef<THREE.Mesh>(null!);

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		mesh.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
	});

	return (
		<mesh ref={mesh} position={[0, 0.5, 0.1]}>
			<sphereGeometry args={[0.15, 32, 32]} />
			<meshBasicMaterial color="#acafff" />
		</mesh>
	);
}

function BodyOfLight({ count = 30000 }) {
	// biome-ignore lint/style/noNonNullAssertion: R3F ref initialization
	const mesh = useRef<THREE.Points>(null!);
	// biome-ignore lint/suspicious/noExplicitAny: custom shader material ref
	// biome-ignore lint/style/noNonNullAssertion: R3F ref initialization
	const material = useRef<any>(null!);
	const mouse = useRef(new THREE.Vector2(0, 0));
	const hover = useRef(0);

	const [positions, colors, sizes] = useMemo(() => {
		const pos = new Float32Array(count * 3);
		const cols = new Float32Array(count * 3);
		const s = new Float32Array(count);

		for (let i = 0; i < count; i++) {
			// Silhouette formation
			const u = Math.random();
			const v = Math.random();
			const y = (u - 0.5) * 6.0;

			// Body width varies with height
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
			cols[i * 3 + 2] = 1.0;
			s[i] = Math.random() * 1.5 + 0.2;
		}
		return [pos, cols, s];
	}, [count]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouse.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * 5;
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

	return (
		<group position={[3, 0, 0]}>
			<HeartCore />
			<EnergyLines count={20} internal={true} />
			<EnergyLines count={12} internal={false} />
			<points ref={mesh}>
				<bufferGeometry>
					<bufferAttribute attach="attributes-position" args={[positions, 3]} />
					<bufferAttribute attach="attributes-color" args={[colors, 3]} />
					<bufferAttribute attach="attributes-size" args={[sizes, 1]} />
				</bufferGeometry>
				{/* @ts-ignore */}
				<celestialBloomMaterial
					ref={material}
					transparent
					depthWrite={false}
					blending={THREE.NormalBlending}
					vertexColors
				/>
			</points>
		</group>
	);
}

function CelestialNode({
	position,
	title,
	description,
}: { position: [number, number, number]; title: string; description: string }) {
	const [hovered, setHovered] = useState(false);
	// biome-ignore lint/style/noNonNullAssertion: R3F ref initialization
	const mesh = useRef<THREE.Mesh>(null!);

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		mesh.current.position.y += Math.sin(t + position[0]) * 0.002;
	});

	return (
		<group position={position}>
			<mesh
				ref={mesh}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			>
				<sphereGeometry args={[0.2, 32, 32]} />
				<meshBasicMaterial
					color={hovered ? "#00F0FF" : "#acafff"}
					transparent
					opacity={0.5}
				/>
			</mesh>

			{hovered && <HtmlOverlay title={title} description={description} />}
		</group>
	);
}

function HtmlOverlay({
	title,
	description,
}: { title: string; description: string }) {
	return (
		<Scroll html>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="pointer-events-none fixed inset-0 flex items-center justify-center p-4 md:p-8"
			>
				<div className="pointer-events-auto w-[90vw] max-w-md rounded-[16px] border border-[#d0d0d0]/60 bg-[rgba(243,244,245,0.4)] p-6 md:p-8 backdrop-blur-2xl">
					<h3 className="text-[0.7rem] uppercase tracking-[0.4em] text-primary">
						{title}
					</h3>
					<p className="mt-4 text-sm leading-relaxed text-[#141414]/60">
						{description}
					</p>
				</div>
			</motion.div>
		</Scroll>
	);
}

export default function DigitalAltar() {
	return (
		<div className="fixed inset-0 z-0 bg-[#ffffff]">
			<Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
				<color attach="background" args={["#ffffff"]} />
				<BackgroundNetwork />
				<Suspense fallback={null}>
					<ScrollControls pages={3} damping={0.2}>
						<Scroll>
							<Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
								<BodyOfLight />
							</Float>

							<group position={[0, -10, 0]}>
								<CelestialNode
									position={[-3, 0, 0]}
									title="Atman"
									description="AI-Native Operating System for creative manifestation."
								/>
								<CelestialNode
									position={[3, 2, -2]}
									title="ManualMate"
									description="Pre-trip planning agent for the deliberate traveler."
								/>
								<CelestialNode
									position={[0, -3, 2]}
									title="Visual Poems"
									description="Generative art exploring the intersection of code and consciousness."
								/>
							</group>
						</Scroll>

						<Scroll html>
							<div className="relative w-full">
								{/* Hero Overlay */}
								<section className="flex h-screen w-full flex-col items-start justify-center px-6 md:px-12 lg:px-24">
									<motion.div
										initial={{ opacity: 0, x: -50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 3, ease: "easeOut" }}
										className="text-left"
									>
										<h1 className="text-[12vw] font-light tracking-[0.1em] text-[#141414] sm:text-6xl md:text-8xl lg:text-9xl leading-[1.1] sm:leading-none">
											AHAM
											<br />
											BRAHMASMI.
										</h1>
										<div className="mt-8 md:mt-16 text-[15vw] tracking-[0.2em] sm:tracking-[0.3em] text-[#141414]/5 blur-[2px] sm:blur-[3px] transition-all hover:text-[#141414]/10 sm:text-7xl md:text-9xl lg:text-[12rem] font-sans">
											अहं ब्रह्मास्मि
										</div>
									</motion.div>
								</section>

								{/* Library Transition Space */}
								<section className="h-[200vh] w-full" />
							</div>
						</Scroll>
					</ScrollControls>

					<EffectComposer>
						<Bloom
							luminanceThreshold={0.2}
							mipmapBlur
							intensity={1.5}
							radius={0.4}
						/>
					</EffectComposer>
				</Suspense>
			</Canvas>

			{/* Zen Toggle (Divine micro-interaction) */}
			<ZenToggle />
		</div>
	);
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

	return (
		<button
			type="button"
			onClick={() => setZen(!zen)}
			className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] h-10 w-10 rounded-full border border-[#d0d0d0]/60 bg-[rgba(243,244,245,0.4)] text-[#141414]/40 backdrop-blur-md transition-all hover:border-primary/40 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
			aria-label="Toggle Zen Mode"
		>
			{zen ? "●" : "○"}
		</button>
	);
}
