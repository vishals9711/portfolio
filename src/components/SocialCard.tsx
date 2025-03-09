import React from "react";
import { Card } from "./ui/card";
import { HoverScale } from "./ui/motion-wrapper";

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
			>
				<Card
					className={`p-5 h-full flex items-center ${index % 2 === 0 ? "glass" : "bg-gradient-to-br from-purple-600/70 to-pink-600/70 border-none"}`}
				>
					<div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full mr-4">
						<span className="icon" aria-hidden="true">
							<svg width="24" height="24" className="w-5 h-5">
								<use href={`/sprites.svg#${icon.replace("mdi:", "")}`} />
							</svg>
						</span>
					</div>

					<div className="flex-1">
						<h3 className="font-medium">{title}</h3>
					</div>

					<div className="transform rotate-45">
						<span className="icon" aria-hidden="true">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 19V5H19"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5 5L19 19"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</div>
				</Card>
			</a>
		</HoverScale>
	);
}
