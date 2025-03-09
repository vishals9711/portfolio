import React from "react";
import { Card } from "./ui/card";
import { HoverScale } from "./ui/motion-wrapper";
import { Icon } from '@iconify-icon/react';

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
						<Icon icon={icon} width={24} height={24} className="w-5 h-5" />
					</div>

					<div className="flex-1">
						<h3 className="font-medium">{title}</h3>
					</div>

					<div className="transform rotate-45">
						<Icon icon="mdi:arrow-up" width={20} height={20} />
					</div>
				</Card>
			</a>
		</HoverScale>
	);
}
