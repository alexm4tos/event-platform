import { gql, useQuery } from '@apollo/client';
import { useGetLessonsQuery } from '../graphql/generated';

import { Lesson } from './Lesson';

interface Props {
	showMenu?: boolean;
}

export function Sidebar({ showMenu = false }: Props) {
	const { data } = useGetLessonsQuery();

	return (
		<aside
			className={`${
				showMenu ? '' : 'hidden'
			} md:block w-full md:w-[348px] bg-gray-700 p-6 border-l border-gray-600`}
		>
			<span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
				Cronograma de aulas
			</span>

			<div className='flex flex-col gap-8'>
				{data?.lessons.map((lesson) => (
					<Lesson
						key={lesson.id}
						title={lesson.title}
						slug={lesson.slug}
						type={lesson.lessonType}
						availableAt={new Date(lesson.availableAt)}
					/>
				))}
			</div>
		</aside>
	);
}
