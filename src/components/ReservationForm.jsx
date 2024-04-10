import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import {
	Button,
	Calendar,
	CalendarCell,
	CalendarGrid,
	DateInput,
	DatePicker,
	DateSegment,
	Dialog,
	FieldError,
	Group,
	Heading,
	Input,
	Label,
	Popover,
	TextField,
	TimeField,
} from 'react-aria-components';
import { useEffect, useState } from 'react';
import { Time, parseDate } from '@internationalized/date';

const ReservationForm = ({ motionTemp }) => {
	const [date, setDate] = useState(parseDate('2024-04-11'));
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [time, setTime] = useState(new Time(11, 45));

	useEffect(() => console.log(date, typeof date), [date]);

	const onSubmit = (e) => {
		e.preventDefault();
		alert(JSON.stringify({ name, email, date, time }, null, 2));
	};
	const MotionInput = motion(Input);
	return (
		<section>
			<form
				onSubmit={onSubmit}
				className="flex flex-col justify-center items-center gap-2"
			>
				<div className="flex gap-20">
					<TextField className="flex flex-col" isRequired onChange={setName}>
						<Label>Name</Label>
						<MotionInput
							className=" bg-transparent text-neutral-100 p-2"
							style={{
								border: motionTemp.border,
								boxShadow: motionTemp.boxShadow,
							}}
						/>
						<FieldError />
					</TextField>
					<TextField
						className="flex flex-col"
						isRequired
						type="email"
						onChange={setEmail}
					>
						<Label>Email</Label>
						<MotionInput
							className=" bg-transparent text-neutral-100 p-2"
							style={{
								border: motionTemp.border,
								boxShadow: motionTemp.boxShadow,
							}}
						/>
						<FieldError />
					</TextField>
				</div>
				<div className="flex gap-20 justify-center items-center">
					<DatePicker
						className="flex flex-col"
						isRequired
						value={date}
						onChange={setDate}
					>
						<Label>Date</Label>
						<Group className="flex gap-3">
							<DateInput className="flex gap-2">
								{(segment) => <DateSegment segment={segment} />}
							</DateInput>
							<Button>▼</Button>
						</Group>
						<Popover>
							<Dialog>
								<Calendar className="bg-neutral-800 bg-opacity-50 p-2 rounded-md text-neutral-300">
									<header className="flex justify-around">
										<Button slot="previous">{'<'}</Button>
										<Heading />
										<Button slot="next">{'>'}</Button>
									</header>
									<CalendarGrid>
										{(date) => <CalendarCell date={date} />}
									</CalendarGrid>
								</Calendar>
							</Dialog>
						</Popover>
						<FieldError />
					</DatePicker>

					<TimeField
						className="flex flex-col"
						isRequired
						value={time}
						onChange={setTime}
					>
						<Label>Event time</Label>
						<DateInput className="flex gap-2">
							{(segment) => <DateSegment segment={segment} />}
						</DateInput>
						<FieldError />
					</TimeField>
				</div>
				<motion.button
					type="submit"
					style={{
						border: motionTemp.border,
						boxShadow: motionTemp.boxShadow,
					}}
					whileHover={{
						scale: 1.015,
					}}
					whileTap={{
						scale: 0.985,
					}}
					className="m-4 group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
				>
					Reserve a Table
					<FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
				</motion.button>
			</form>
		</section>
	);
};

export default ReservationForm;
