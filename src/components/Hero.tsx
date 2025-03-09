import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import { FadeInLeft, FadeInRight } from "./ui/motion-wrapper";

interface HeroProps {
	name: string;
	role: string;
	description: string;
	image: string;
	links: {
		title: string;
		url: string;
		external?: boolean;
	}[];
}

export default function Hero({
	name,
	role,
	description,
	image,
	links,
}: HeroProps) {
	return (
		<section className="relative min-h-[85vh] flex items-center mt-10">
			{/* Background effects */}
			<div className="absolute inset-0 hero-gradient -z-10" />
			<div className="absolute top-20 left-[5%] w-[30vw] max-w-md aspect-square rounded-full bg-gradient-to-r from-purple-500/30 to-transparent dark:from-purple-500/30 light:from-purple-600/15 blur-3xl -z-10" />
			<div className="absolute bottom-20 right-[5%] w-[30vw] max-w-md aspect-square rounded-full bg-gradient-to-r from-pink-500/20 to-transparent dark:from-pink-500/20 light:from-pink-600/15 blur-3xl -z-10" />

			{/* Animated patterns */}
			<motion.div
				className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full -z-10"
				animate={{
					y: [0, 20, 0],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute bottom-10 right-20 w-32 h-32 border border-white/10 rounded-full -z-10"
				animate={{
					y: [0, -30, 0],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 10,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute top-1/3 right-10 w-16 h-16 border border-white/10 rounded-full -z-10"
				animate={{
					y: [0, 15, 0],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 6,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
					delay: 1,
				}}
			/>

			<div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Text content */}
				<FadeInLeft className="order-2 md:order-1">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 tracking-tight">
						<span className="gradient-heading">Hello, I'm</span> {name}
					</h1>
					<h2 className="text-xl md:text-2xl mb-6 text-muted-foreground font-light">
						{role}
					</h2>

					<p className="text-lg max-w-md mb-8 text-muted-foreground/90">
						{description}
					</p>

					<div className="flex flex-wrap gap-4">
						{links.map((link, index) => (
							<Button
								key={index}
								variant={index === 0 ? "gradient" : "glass"}
								size="lg"
								asChild
								className={
									index === 0 ? "light:text-white light:font-semibold" : ""
								}
							>
								<a href={link.url} target={link.external ? "_blank" : "_self"}>
									{link.title}
								</a>
							</Button>
						))}
					</div>
				</FadeInLeft>

				{/* Image or illustration */}
				<FadeInRight className="order-1 md:order-2 flex justify-center">
					<motion.div
						className="relative w-64 h-64 sm:w-80 sm:h-80"
						whileHover={{ rotate: 5, scale: 1.05 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
					>
						<div className="glass absolute inset-0 rounded-3xl" />
						<img
							src={image}
							alt={name}
							className="relative z-10 w-full h-full object-cover rounded-3xl p-3"
						/>
						<div className="absolute -z-10 inset-4 bg-gradient-to-br from-purple-500/50 to-pink-600/50 rounded-3xl blur-xl" />
					</motion.div>
				</FadeInRight>
			</div>
		</section>
	);
}
