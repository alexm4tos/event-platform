import { List, X } from 'phosphor-react';

import { Logo } from './Logo';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export function Header({ isOpen, setIsOpen }: Props) {
	return (
		<header className='w-full py-5 flex items-center justify-between px-6 md:justify-center bg-gray-700 border-b border-gray-600'>
			<div className='w-[150px]'>
				<Logo />
			</div>

			<div
				className='flex items-center gap-2 md:hidden cursor-default group'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className='text-sm group-hover:text-gray-200'>Aulas</span>
				{isOpen ? (
					<X size={32} className='text-blue-500 group-hover:text-blue-400' />
				) : (
					<List size={32} className='text-blue-500 group-hover:text-blue-400' />
				)}
			</div>
		</header>
	);
}
