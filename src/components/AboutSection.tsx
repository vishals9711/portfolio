import React from "react";
import { Button } from "./ui/button";
import { FadeIn, FadeInStagger } from "./ui/motion-wrapper";

interface AboutSectionProps {
	title: string;
	description: string;
	skills?: string[];
	aboutLink: string;
}

export default function AboutSection({
	title,
	description,
	skills = [],
	aboutLink,
}: AboutSectionProps) {
	return (
		<section className="py-20 relative">
			{/* Background gradient - adjusted positioning */}
			<div className="absolute top-10 right-[5%] w-[30vw] max-w-md aspect-square rounded-full bg-gradient-to-r from-purple-500/10 to-transparent dark:from-purple-500/10 light:from-purple-600/5 blur-3xl -z-10" />

			<div className="container px-4 mx-auto">
				<div className="glass rounded-3xl p-8 md:p-12 relative">
					{/* Inner glow effect */}
					<div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 dark:from-purple-500/5 dark:to-pink-600/5 light:from-purple-600/10 light:to-pink-700/10" />

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<FadeIn>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">
								{title}
							</h2>

							<div className="text-lg text-muted-foreground/90 space-y-4 mb-8">
								{description.split("\n").map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>

							<Button variant="gradient" size="lg" asChild>
								<a href={aboutLink}>Learn More About Me</a>
							</Button>
						</FadeIn>

						{skills.length > 0 && (
							<div>
								<FadeInStagger>
									<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
										{skills.map((skill, index) => (
											<div
												key={index}
												className="glass p-4 rounded-xl text-center hover:bg-white/10 transition-colors duration-300"
											>
												<p className="font-medium">{skill}</p>
											</div>
										))}
									</div>
								</FadeInStagger>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
