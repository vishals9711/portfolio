import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";

const nodes = [
	{ x: 240, y: 240, size: 84 },
	{ x: 1050, y: 720, size: 132 },
	{ x: 880, y: 286, size: 42 },
];

export const FutureSignalComposition = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const reveal = spring({
		fps,
		frame,
		config: { damping: 18, stiffness: 80, mass: 0.9 },
	});
	const drift = interpolate(frame, [0, 180], [0, 1]);

	return (
		<AbsoluteFill
			style={{
				background:
					"radial-gradient(circle at top, rgba(51,255,214,0.16), transparent 28%), linear-gradient(180deg, rgba(255,198,87,0.09), transparent 24%), #0b1016",
				color: "#f4f7fb",
				fontFamily: '"Space Grotesk", sans-serif',
			}}
		>
			<svg
				viewBox="0 0 1440 1080"
				style={{ width: "100%", height: "100%" }}
				role="img"
				aria-label="Animated future signal composition"
			>
				<title>Animated future signal composition</title>
				<defs>
					<linearGradient
						id="remotionStroke"
						x1="120"
						y1="120"
						x2="1320"
						y2="940"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0%" stopColor="#33ffd6" />
						<stop offset="55%" stopColor="#ffc657" />
						<stop offset="100%" stopColor="#33ffd6" />
					</linearGradient>
				</defs>

				<rect
					x="96"
					y="96"
					width="1248"
					height="888"
					rx="60"
					fill="rgba(11,16,22,0.66)"
					stroke="rgba(255,255,255,0.16)"
				/>

				{[240, 480, 720, 960].map((line) => (
					<path
						key={`h-${line}`}
						d={`M120 ${line}H1320`}
						stroke="rgba(255,255,255,0.08)"
						strokeDasharray="10 20"
						opacity={0.5}
					/>
				))}

				{[320, 720, 1080].map((line) => (
					<path
						key={`v-${line}`}
						d={`M${line} 120V960`}
						stroke="rgba(255,255,255,0.08)"
						strokeDasharray="10 20"
						opacity={0.5}
					/>
				))}

				<path
					d="M180 350C420 200 680 200 900 350C1080 470 1210 520 1280 520"
					fill="none"
					stroke="url(#remotionStroke)"
					strokeWidth={3}
					strokeDasharray="14 18"
					opacity={0.76}
					transform={`translate(${drift * 12}, ${-drift * 8}) scale(${0.96 + reveal * 0.04})`}
				/>
				<path
					d="M150 680C340 760 550 810 768 810C960 810 1140 740 1288 590"
					fill="none"
					stroke="url(#remotionStroke)"
					strokeWidth={3}
					strokeDasharray="14 18"
					opacity={0.4}
					transform={`translate(${-drift * 16}, ${drift * 8})`}
				/>

				{nodes.map((node, index) => {
					const localScale = spring({
						fps,
						frame: frame - index * 10,
						config: { damping: 14, stiffness: 90 },
					});

					return (
						<g
							key={`${node.x}-${node.y}`}
							transform={`translate(${node.x} ${node.y})`}
						>
							<circle
								r={node.size}
								fill="rgba(51,255,214,0.08)"
								stroke="rgba(51,255,214,0.15)"
								transform={`scale(${0.92 + localScale * 0.08})`}
							/>
							<circle r="8" fill="#33ffd6" />
						</g>
					);
				})}

				<text
					x="180"
					y="176"
					fill="rgba(255,255,255,0.5)"
					fontSize="22"
					letterSpacing="8"
				>
					SYSTEM / TASTE / STRUCTURE
				</text>
				<text
					x="930"
					y="176"
					fill="rgba(255,255,255,0.5)"
					fontSize="22"
					letterSpacing="8"
				>
					VISHAL SHARMA
				</text>
				<text
					x="180"
					y="916"
					fill="rgba(255,255,255,0.5)"
					fontSize="22"
					letterSpacing="8"
				>
					BROOKLYN, NEW YORK
				</text>
				<text
					x="938"
					y="916"
					fill="rgba(255,255,255,0.5)"
					fontSize="22"
					letterSpacing="8"
				>
					INTENTIONAL SOFTWARE
				</text>
			</svg>
		</AbsoluteFill>
	);
};
