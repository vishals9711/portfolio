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
		<section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center py-10 sm:py-16 mt-6 sm:mt-10 px-4 sm:px-6">
			{/* Background effects */}
			<div className="absolute inset-0 hero-gradient -z-10" />
			<div className="absolute top-20 left-[5%] w-[40vw] sm:w-[30vw] max-w-md aspect-square rounded-full bg-gradient-to-r from-purple-500/30 to-transparent dark:from-purple-500/30 light:from-purple-600/15 blur-3xl -z-10" />
			<div className="absolute bottom-20 right-[5%] w-[40vw] sm:w-[30vw] max-w-md aspect-square rounded-full bg-gradient-to-r from-pink-500/20 to-transparent dark:from-pink-500/20 light:from-pink-600/15 blur-3xl -z-10" />

			{/* Animated patterns - conditionally hidden on small screens */}
			<motion.div
				className="hidden sm:block absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full -z-10"
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
				className="hidden sm:block absolute bottom-10 right-20 w-32 h-32 border border-white/10 rounded-full -z-10"
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
				className="hidden sm:block absolute top-1/3 right-10 w-16 h-16 border border-white/10 rounded-full -z-10"
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

			<div className="w-full max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-8 sm:gap-12 lg:gap-16">
					{/* Text content */}
					<div className="w-full md:w-1/2 text-center md:text-left">
						<FadeInLeft>
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 tracking-tight leading-tight">
								<span className="gradient-heading block sm:inline">Hello, I'm </span>
								<span className="block mt-1 sm:mt-0 sm:inline">{name}</span>
							</h1>
							<h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-muted-foreground font-light">
								{role}
							</h2>

							<p className="text-base sm:text-lg mx-auto md:mx-0 max-w-sm sm:max-w-md mb-6 sm:mb-8 text-muted-foreground/90">
								{description}
							</p>

							<div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
								{links.map((link, index) => (
									<Button
										key={`${link.title}-${index}`}
										variant={index === 0 ? "gradient" : "glass"}
										size="default"
										asChild
										className={`${
											index === 0 ? "light:text-white light:font-semibold" : ""
										} text-sm sm:text-base`}
									>
										<a href={link.url} target={link.external ? "_blank" : "_self"}>
											{link.title}
										</a>
									</Button>
								))}
							</div>
						</FadeInLeft>
					</div>

					{/* Image or illustration */}
					<div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
						<FadeInRight>
							<motion.div
								className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
								whileHover={{ rotate: 5, scale: 1.05 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<div className="glass absolute inset-0 rounded-3xl" />
								<img
									src={image}
									alt={name}
									className="relative z-10 w-full h-full object-cover rounded-3xl p-2 sm:p-3"
								/>
								<div className="absolute -z-10 inset-4 bg-gradient-to-br from-purple-500/50 to-pink-600/50 rounded-3xl blur-xl" />
							</motion.div>
						</FadeInRight>
					</div>
				</div>
			</div>
		</section>
	);
}
