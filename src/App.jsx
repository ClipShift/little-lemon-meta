import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Banner from './assets/monochrome-banner.svg';

export default function App() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [mouseVariant, setMouseVariant] = useState('default');
	const [open, setOpen] = useState(false);

	const handleMouseMove = (e) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const mouseVariants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			mixBlendMode: 'difference',
		},
		zoom: {
			x: mousePosition.x - 32,
			y: mousePosition.y - 32,
			height: 64,
			width: 64,
			mixBlendMode: 'difference',
		},
	};

	return (
		<>
			<Navbar setMouseVariant={setMouseVariant} />
			<Hero setMouseVariant={setMouseVariant} />
			<motion.div
				className="w-8 h-8 bg-neutral-100 fixed top-0 left-0 rounded-full z-[300] pointer-events-none"
				variants={mouseVariants}
				animate={mouseVariant}
			/>
			<img src={Banner} className="fixed bottom-4 inset-x-[40%] w-96" />
		</>
	);
}
