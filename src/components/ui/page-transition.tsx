import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useEffect } from "react";

interface PageTransitionProps {
	children: React.ReactNode;
	path: string;
}

export default function PageTransition({
	children,
	path,
}: PageTransitionProps) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={path}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

// Component for transitioning in from the side
export function SlideTransition({ children, path }: PageTransitionProps) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={path}
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -50 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

// Component for fading in and scaling
export function ScaleTransition({ children, path }: PageTransitionProps) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={path}
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 1.05 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

// Component for staggered page transition
export function StaggeredTransition({ children, path }: PageTransitionProps) {
	// Add scroll to top on page change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [path]);

	return (
		<AnimatePresence mode="wait">
			<div key={path}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{/* Background transition */}
					<motion.div
						initial={{ scaleY: 1, originY: 0 }}
						animate={{
							scaleY: 0,
							originY: 0,
							transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
						}}
						exit={{
							scaleY: 1,
							originY: 1,
							transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
						}}
						className="fixed inset-0 z-50 bg-gradient-to-b from-purple-600 to-pink-600"
					/>

					{children}
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
