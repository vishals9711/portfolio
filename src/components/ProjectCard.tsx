import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { HoverTilt } from "./ui/motion-wrapper";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	year: string;
	url: string;
	tags?: string[];
	glass?: boolean;
	gradient?: boolean;
}

export default function ProjectCard({
	title,
	description,
	image,
	year,
	url,
	tags = [],
	glass = true,
	gradient = false,
}: ProjectCardProps) {
	return (
		<HoverTilt>
			<Card
				className={"overflow-hidden h-full"}
				glass={glass}
				gradient={gradient}
			>
				<div className="relative overflow-hidden aspect-video flex items-center justify-center bg-slate-900/20">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
					/>
					<div className="absolute top-3 right-3">
						<Badge variant={glass ? "glass" : "gradient"}>{year}</Badge>
					</div>
				</div>

				<CardHeader>
					<CardTitle className="line-clamp-1">{title}</CardTitle>
				</CardHeader>

				<CardContent>
					<p className="text-muted-foreground line-clamp-2 mb-4">
						{description}
					</p>

					{tags.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-4">
							{tags.map((tag) => (
								<Badge key={tag} variant="secondary" className="text-xs">
									{tag}
								</Badge>
							))}
						</div>
					)}
				</CardContent>

				<CardFooter>
					<Button variant="gradient" size="sm" className="w-full" asChild>
						<a href={url} target="_blank" rel="noopener noreferrer">
							View Project
						</a>
					</Button>
				</CardFooter>
			</Card>
		</HoverTilt>
	);
}
