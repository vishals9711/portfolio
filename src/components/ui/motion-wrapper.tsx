import { type MotionProps, motion } from "framer-motion";

type Props = {
	children: React.ReactNode;
	delay?: number;
	className?: string;
} & MotionProps;

export const FadeIn = ({ children, delay = 0, className, ...rest }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export const FadeInLeft = ({
	children,
	delay = 0,
	className,
	...rest
}: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export const FadeInRight = ({
	children,
	delay = 0,
	className,
	...rest
}: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export const ScaleIn = ({ children, delay = 0, className, ...rest }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export const FadeInStagger = ({
	children,
	delay = 0,
	className,
	...rest
}: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export const HoverScale = ({ children, className, ...rest }: Props) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export const HoverTilt = ({ children, className, ...rest }: Props) => {
	return (
		<motion.div
			whileHover={{ rotate: [0, 2, -2, 0], scale: 1.05 }}
			transition={{ duration: 0.5 }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};
