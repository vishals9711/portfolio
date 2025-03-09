import React from "react";
import ProjectCard from "./ProjectCard";
import { FadeInStagger } from "./ui/motion-wrapper";

interface Project {
	title: string;
	description: string;
	image: string;
	year: string;
	url: string;
	tags?: string[];
}

interface FeaturedProjectsProps {
	title: string;
	description: string;
	projects: Project[];
	viewAllLink: string;
}

export default function FeaturedProjects({
	title,
	description,
	projects,
	viewAllLink,
}: FeaturedProjectsProps) {
	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="max-w-2xl mx-auto text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
						{title}
					</h2>
					<p className="text-lg text-muted-foreground">{description}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<FadeInStagger key={index} delay={index * 0.1}>
							<ProjectCard
								title={project.title}
								description={project.description}
								image={project.image}
								year={project.year}
								url={project.url}
								tags={project.tags}
								glass={index % 2 === 0}
								gradient={index % 2 !== 0}
							/>
						</FadeInStagger>
					))}
				</div>

				<div className="mt-12 text-center">
					<a
						href={viewAllLink}
						className="inline-block relative overflow-hidden group"
					>
						<span className="relative z-10 text-lg font-medium px-4 py-2">
							View All Projects
						</span>
						<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:h-full opacity-80 group-hover:opacity-20" />
					</a>
				</div>
			</div>
		</section>
	);
}
