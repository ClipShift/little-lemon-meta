import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import {
	useMotionTemplate,
	useMotionValue,
	motion,
	animate,
} from 'framer-motion';
import { HorizontalScrollCarousel } from './Carousel';

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export const Hero = ({ setMouseVariant }) => {
	const color = useMotionValue(COLORS_TOP[0]);

	useEffect(() => {
		animate(color, COLORS_TOP, {
			ease: 'easeInOut',
			duration: 10,
			repeat: Infinity,
			repeatType: 'mirror',
		});
	}, []);

	const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
	const border = useMotionTemplate`1px solid ${color}`;
	const boxShadow = useMotionTemplate`0px 4px 15px ${color}`;

	return (
		<motion.main
			style={{
				backgroundImage,
			}}
			className="relative min-h-screen place-content-center bg-gray-950 px-4 py-24 text-gray-200"
		>
			<div className="relative z-10 flex flex-col items-center">
				<HorizontalScrollCarousel
					motionTemp={{ border, boxShadow }}
					setMouseVariant={setMouseVariant}
				/>
			</div>
		</motion.main>
	);
};
