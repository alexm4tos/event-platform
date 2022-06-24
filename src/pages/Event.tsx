import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { AlertMessage } from '../components/AlertMessage';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
	const { slug } = useParams<{ slug: string }>();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex flex-col min-h-screen'>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />

			<main className='flex flex-1 flex-col md:flex-row'>
				{slug ? (
					<Video lessonSlug={slug} hidden={isOpen} />
				) : (
					<AlertMessage message='Escolha uma aula ao lado' />
				)}

				<Sidebar showMenu={isOpen} />
			</main>
		</div>
	);
}
