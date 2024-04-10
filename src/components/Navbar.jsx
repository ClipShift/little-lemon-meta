import { FiHome } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiInfo } from 'react-icons/fi';
import { MdOutlineTableBar } from 'react-icons/md';
import { motion } from 'framer-motion';

const Navbar = ({ setMouseVariant }) => {
	const navData = [
		{
			id: 1,
			icon: <FiHome />,
			title: 'Home',
		},
		{
			id: 2,
			icon: <FiPhone />,
			title: 'Contact',
		},
		{
			id: 3,
			icon: <FiInfo />,
			title: 'About',
		},
		{
			id: 4,
			icon: <MdOutlineTableBar />,
			title: 'Reserve',
		},
	];

	return (
		<div className="fixed flex justify-center  gap-10 top-5 inset-x-[40%] z-50 text-neutral-100 py-2 px-10 font-thin ">
			{navData.map((item) => (
				<NavItem
					icon={item.icon}
					key={item.id}
					title={item.title}
					setMouseVariant={setMouseVariant}
				/>
			))}
		</div>
	);
};

const NavItem = ({ icon, title, setMouseVariant }) => {
	return (
		<motion.nav
			className={`flex flex-col items-center justify-center text-2xl`}
			onMouseOver={() => setMouseVariant('zoom')}
			onMouseLeave={() => setMouseVariant('default')}
			whileHover={{
				scale: 1.5,
			}}
			whileTap={{
				scale: 0.985,
			}}
		>
			{icon}
			<p className="text-xs">{title}</p>
		</motion.nav>
	);
};

export default Navbar;
