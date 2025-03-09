import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface ThemeSwitchProps {
	className?: string;
}

export default function ThemeSwitch({ className = "" }: ThemeSwitchProps) {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	useEffect(() => {
		// Check for saved theme preference or use system preference
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		const systemPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
		setTheme(initialTheme);
		document.documentElement.classList.toggle(
			"light",
			initialTheme === "light",
		);
		document.documentElement.classList.toggle("dark", initialTheme === "dark");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);

		// Update localStorage and document class
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("light", newTheme === "light");
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<button
			onClick={toggleTheme}
			className={`relative w-12 h-6 rounded-full ${theme === "dark" ? "bg-purple-900/30" : "bg-blue-100"} p-1 transition-colors duration-300 ${className}`}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
		>
			<motion.div
				className={`w-4 h-4 rounded-full ${theme === "dark" ? "bg-purple-500" : "bg-yellow-400"} relative z-10`}
				animate={{
					x: theme === "dark" ? 0 : 24,
				}}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
			>
				{/* Sun/Moon icons inside the toggle */}
				{theme === "dark" ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						className="absolute inset-0 w-4 h-4 text-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						className="absolute inset-0 w-4 h-4 text-yellow-900"
					>
						<circle cx="12" cy="12" r="5" strokeWidth={2} />
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
						/>
					</svg>
				)}
			</motion.div>

			{/* Stars in dark mode */}
			{theme === "dark" && (
				<>
					<span className="absolute top-1.5 right-3 w-0.5 h-0.5 bg-white rounded-full" />
					<span className="absolute top-3 right-5 w-0.5 h-0.5 bg-white rounded-full" />
					<span className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full" />
				</>
			)}

			{/* Clouds in light mode */}
			{theme === "light" && (
				<>
					<span className="absolute top-1.5 left-7 w-2 h-1 bg-white rounded-full" />
					<span className="absolute top-3 left-4 w-3 h-1 bg-white rounded-full" />
				</>
			)}
		</button>
	);
}
