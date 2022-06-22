import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Props {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: Props) {
	const isLessonAvailable = isPast(availableAt);
	const availableDatePreFormatted = format(
		availableAt,
		"EEEE' • 'd' de 'MMMM' • 'k'h'mm",
		{ locale: ptBR },
	);

	const availableDateFormatted =
		availableDatePreFormatted.charAt(0).toUpperCase() +
		availableDatePreFormatted.slice(1);

	return (
		<a href={slug}>
			<span className='text-gray-300'>{availableDateFormatted}</span>

			<div className='rounded border border-gray-500 p-4 mt-2'>
				<header className='flex items-center justify-between'>
					{isLessonAvailable ? (
						<span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
							<CheckCircle size={20} />
							Conteúdo liberado
						</span>
					) : (
						<span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
							<Lock size={20} />
							Em breve
						</span>
					)}

					<span className='text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold'>
						{type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>

				<strong className='text-gray-200 mt-5 block'>{title}</strong>
			</div>
		</a>
	);
}
