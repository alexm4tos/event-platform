import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface Props {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: Props) {
	const { slug: slugUrl } = useParams<{ slug: string }>();

	const isLessonAvailable = isPast(availableAt);
	const availableDatePreFormatted = format(
		availableAt,
		"EEEE' • 'd' de 'MMMM' • 'k'h'mm",
		{ locale: ptBR },
	);

	const isLessonActive = slugUrl === slug;

	const link = isLessonAvailable ? `/event/lesson/${slug}` : '#';

	const availableDateFormatted =
		availableDatePreFormatted.charAt(0).toUpperCase() +
		availableDatePreFormatted.slice(1);

	return (
		<Link
			to={link}
			className={`group ${!isLessonAvailable ? 'cursor-not-allowed' : ''}`}
		>
			<span className='text-gray-300'>{availableDateFormatted}</span>

			<div
				className={`rounded p-4 mt-2 ${
					isLessonActive
						? 'bg-green-500'
						: 'border border-gray-500 group-hover:border-green-500'
				}`}
			>
				<header className='flex items-center justify-between'>
					{isLessonAvailable ? (
						<span
							className={`text-sm font-medium flex items-center gap-2 ${
								isLessonActive ? 'text-white' : 'text-blue-500'
							}`}
						>
							<CheckCircle size={20} />
							Conteúdo liberado
						</span>
					) : (
						<span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
							<Lock size={20} />
							Em breve
						</span>
					)}

					<span
						className={`text-xs rounded px-2 py-[2px] text-white font-bold border ${
							isLessonActive ? 'border-white' : 'border-green-300'
						}`}
					>
						{type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>

				<strong
					className={`mt-5 block  ${
						isLessonActive ? 'text-white' : 'text-gray-200'
					}`}
				>
					{title}
				</strong>
			</div>
		</Link>
	);
}
