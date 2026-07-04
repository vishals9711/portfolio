import { Float, PointMaterial, Points, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function Particles({ count = 5000 }) {
	// biome-ignore lint/style/noNonNullAssertion: R3F ref initialization
	const points = useRef<THREE.Points>(null!);
	const mouse = useRef([0, 0]);

	const particles = useMemo(() => {
		const positions = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
		}
		return positions;
	}, [count]);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			mouse.current = [
				(event.clientX / window.innerWidth) * 2 - 1,
				-(event.clientY / window.innerHeight) * 2 + 1,
			];
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useFrame((state, delta) => {
		points.current.rotation.y += delta * 0.05;
		points.current.rotation.x += delta * 0.02;

		// Subtle mouse reaction
		points.current.position.x = THREE.MathUtils.lerp(
			points.current.position.x,
			mouse.current[0] * 0.5,
			0.1,
		);
		points.current.position.y = THREE.MathUtils.lerp(
			points.current.position.y,
			mouse.current[1] * 0.5,
			0.1,
		);
	});

	return (
		<Points ref={points} positions={particles} stride={3} frustumCulled={false}>
			<PointMaterial
				transparent
				color="#acafff"
				size={0.015}
				sizeAttenuation={true}
				depthWrite={false}
				blending={THREE.NormalBlending}
			/>
		</Points>
	);
}

const ZenToggle = ({
	isZen,
	setIsZen,
}: { isZen: boolean; setIsZen: (v: boolean) => void }) => {
	return (
		<button
			type="button"
			onClick={() => setIsZen(!isZen)}
			className="zen-mode-toggle"
			aria-label="Toggle Zen Mode"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<title>Toggle Zen Mode</title>
				<circle cx="12" cy="12" r="10" />
				<path
					d="M12 2a10 10 0 0 0 0 20"
					fill="currentColor"
					opacity={isZen ? 1 : 0}
				/>
			</svg>
		</button>
	);
};

export default function CelestialHero() {
	const [isZen, setIsZen] = useState(false);

	useEffect(() => {
		if (isZen) {
			document.body.classList.add("zen-mode-active");
		} else {
			document.body.classList.remove("zen-mode-active");
		}
	}, [isZen]);

	return (
		<div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[#d0d0d0]/60 bg-[#ffffff]">
			<Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
				<color attach="background" args={["#ffffff"]} />
				<ambientLight intensity={0.5} />
				<Stars
					radius={100}
					depth={50}
					count={5000}
					factor={4}
					saturation={0}
					fade
					speed={1}
				/>
				<Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
					<Particles count={8000} />
				</Float>
			</Canvas>

			<ZenToggle isZen={isZen} setIsZen={setIsZen} />

			<AnimatePresence>
				{isZen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
					>
						<p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-primary/40">
							Synchronizing Realities...
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
