import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import ReservationForm from './ReservationForm';

export const HorizontalScrollCarousel = ({ motionTemp, setMouseVariant }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const [text, setText] = useState(false);
	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-110%']);

	useEffect(() => {
		const textChange = () => {
			if (scrollYProgress.get() < 0.9) setText(false);
			else setText(true);
		};
		return () => scrollYProgress.onChange(textChange);
	}, []);

	return (
		<section ref={targetRef} className=" h-[300vh]">
			<div className="sticky top-0 flex h-screen w-screen  items-center overflow-hidden">
				{text ? (
					<Reveal width="100vw">
						<div className="flex items-center justify-center flex-col  text-center w-full font-thin  gap-5">
							<p
								className="text-5xl"
								onMouseOver={() => setMouseVariant('zoom')}
								onMouseLeave={() => setMouseVariant('default')}
							>
								Do You Have Any Dinner Plan Today? <br /> Reserve Your Table
							</p>

							<p>
								Make online reservations, read restaurant reviews from diners,
								and earn points towards free meals. OpenTable is a real-time
								online reservation.
							</p>
							<ReservationForm motionTemp={motionTemp} />
						</div>
					</Reveal>
				) : (
					<motion.div style={{ x }} className="flex gap-4">
						{cards.map((card) => {
							return <Card card={card} key={card.id} motionTemp={motionTemp} />;
						})}
					</motion.div>
				)}
			</div>
		</section>
	);
};

const Card = ({ card, motionTemp }) => {
	return (
		<motion.div
			style={{ border: motionTemp.border, boxShadow: motionTemp.boxShadow }}
			key={card.id}
			className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
		>
			<div
				style={{
					backgroundImage: `url(${card.url})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
				className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
			></div>
			<div className="absolute inset-0 z-10 grid place-content-center">
				<p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
					{card.title}
				</p>
			</div>
		</motion.div>
	);
};

export default Example;

const cards = [
	{
		url: image1,
		title: 'Salad',
		id: 1,
	},
	{
		url: image2,
		title: 'Eggplant',
		id: 2,
	},
	{
		url: image3,
		title: 'Chickpeas',
		id: 3,
	},
	{
		url: image4,
		title: 'Lobster',
		id: 4,
	},
	{
		url: image5,
		title: 'Hummus',
		id: 5,
	},
];
