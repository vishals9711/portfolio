import React from "react";
import { Card } from "./ui/card";
import { HoverScale } from "./ui/motion-wrapper";
import { motion } from "framer-motion";

interface SocialCardProps {
	title: string;
	url: string;
	icon: string;
	external?: boolean;
	index?: number;
}

export default function SocialCard({
	title,
	url,
	icon,
	external = true,
	index = 0,
}: SocialCardProps) {
	return (
		<HoverScale>
			<a
				href={url}
				target={external ? "_blank" : "_self"}
				rel={external ? "noopener noreferrer" : ""}
				className="block transition-all duration-300"
			>
				<Card
					className={`p-5 h-full flex items-center relative overflow-hidden group transition-all duration-300 ${
						index % 2 === 0 
							? "glass backdrop-blur-md border-white/10" 
							: "bg-gradient-to-br from-purple-600/70 to-pink-600/70 border-none"
					}`}
				>
					<motion.div 
						className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						initial={{ opacity: 0 }}
						whileHover={{ opacity: 1 }}
					/>
					
					<div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full mr-4 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
						{icon.startsWith('/') ? (
							<img src={icon} alt={title} className="w-5 h-5 text-current" />
						) : (
							<motion.div 
								className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm"
								whileHover={{ scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							/>
						)}
					</div>

					<div className="flex-1">
						<h3 className="font-medium tracking-wide">{title}</h3>
					</div>

					<motion.div 
						className="transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"
						whileHover={{ rotate: 90 }}
						transition={{ type: "spring", stiffness: 300, damping: 15 }}
					>
						<img src="/mdi--arrow-up.svg" alt="Arrow" className="w-5 h-5" />
					</motion.div>
				</Card>
			</a>
		</HoverScale>
	);
}
