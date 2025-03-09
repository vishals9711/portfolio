import { motion } from "framer-motion";
import React from "react";
import { Card } from "./ui/card";
import { HoverScale } from "./ui/motion-wrapper";

interface Company {
	name: string;
	image: string;
	url: string;
}

interface ResumeCardProps {
	title: string;
	company: Company;
	date: string;
	index?: number;
}

export default function ResumeCard({
	title,
	company,
	date,
	index = 0,
}: ResumeCardProps) {
	return (
		<HoverScale>
			<a href={company.url} target="_blank" rel="noopener noreferrer">
				<Card
					className={`p-6 ${index % 2 === 0 ? "glass" : "bg-gradient-to-br from-purple-600/70 to-pink-600/70 border-none"}`}
				>
					<div className="flex items-center gap-4">
						<motion.div
							className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10"
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<img
								src={company.image}
								alt={company.name}
								className="w-full h-full object-cover"
							/>
						</motion.div>

						<div className="flex-1">
							<h3 className="font-bold text-lg">{title}</h3>
							<p className="text-muted-foreground">{company.name}</p>
						</div>

						<div className="text-right">
							<span className="bg-white/10 px-3 py-1 rounded-full text-sm">
								{date}
							</span>
						</div>
					</div>
				</Card>
			</a>
		</HoverScale>
	);
}
